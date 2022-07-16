namespace :data_edit do
  desc "材料が重複する場合一方の材料を削除するrakeタスク"
  task :delete_duplicate_cocktails_concrete_ingredients => :environment do
    Cocktail.all.each do |ci|
      cocktails_list = ci.cocktails_concrete_ingredients
      hash = cocktails_list.pluck(:id, :concrete_ingredient_id).to_h.invert
      if !cocktails_list.where.not(id: hash.values).empty? then
        p ci.id,cocktails_list.where.not(id: hash.values)
      end
      cocktails_list.where.not(id: hash.values).destroy_all
    end
  p "完了しました"
  end

  desc '材料が一つしかないカクテルを削除するrakeタスク'
  task delete_mono_cocktail: :environment do
    Cocktail.all.each do |cocktail|
      if cocktail.concrete_ingredients.count <= 1
        p cocktail.id, cocktail.name
        cocktail.destroy
      end
    end
    p '完了しました'
  end

  desc "Unitのmlへの統合タスク"
  task integrate_units_to_ml: :environment do
    ml = Unit.find_by(name: "ml")

    UNIT_CONVERSIONS = [ ["ml", "", "右", "", ""], ["splash", "", "", 15, "ml"], ["tsp", "小さじ", "左", "", ""], ["適量", "", "右", "", ""], ["すくい", "", "右", "", ""], ["bottle", "", "", 750, "ml"], ["Tsp", "大さじ", "左", "", ""], ["個", "", "右", "", ""], ["カップ", "", "", 200, "ml"], ["本", "", "右", "", ""], ["袋", "", "右", "", ""], ["dash", "", "", 1, "ml"], ["oz", "", "", 30, "ml"], ["shot", "", "", 45, "ml"], ["枚", "", "右", "", ""], ["片", "", "右", "", ""], ["比率", "", "右", "", ""], ["cl", "", "", 10, "ml"], ["qt", "", "", 1000, "ml"], ["glass", "", "", 60, "ml"], ["少々", "", "右", "", ""], ["drop", "滴", "右", "", ""], ["s", "", "", 45, "ml"], ["カット", "", "右", "", ""], ["can", "", "", 200, "ml"], ["fifth", "", "", 800, "ml"], ["つまみ", "", "右", "", ""], ["切れ", "", "右", "", ""], ["個分", "", "右", "", ""], ["L", "", "右", "", ""], ["dl", "", "", 100, "ml"], ["g", "", "右", "", ""], ["pint", "", "", 500, "ml"], ["粒", "", "右", "", ""], ["房", "", "右", "", ""], ["litter", "L", "右", "", ""], ["gallon", "", "", 4000, "ml"], ["数個", "", "右", "", ""], ["杯", "", "右", "", ""], ["quart", "", "", 1000, "ml"], ["振り", "", "右", "", ""], ["jigger", "", "", 45, "ml"], ["少量", "", "右", "", ""], ["squirt", "", "", 15, "ml"], ["gal", "", "", 4000, "ml"], ["paint", "", "", 400, "ml"], ["微量", "", "右", "", ""], ["スライス", "", "右", "", ""], ["輪切り", "", "右", "", ""], ["drops", "滴", "右", "", ""], ["dtsp", "", "", 10, "ml"], ["split", "", "", 187, "ml"], ["個絞る", "", "右", "", ""], ["好みで", "", "右", "", ""], ["数枚", "", "右", "", ""], ["尾", "", "右", "", ""], ["パック", "", "右", "", ""], ["l", "", "", 30, "ml"], ["kg", "", "右", "", ""], ["つかみ", "", "右", "", ""], ["tblsp", "大さじ", "", 15, "ml"], ["数カット", "", "右", "", ""], ["ひとつまみ", "", "右", "", ""], ["玉", "", "右", "", ""], ["スプレー", "", "右", "", ""], ["好みで加減", "", "右", "", ""] ]
    # UNIT_CONVERSION_NAMES = UNIT_CONVERSIONS.map{|unit| unit[0]}
    Unit.all.each do |unit|
      unit_conversion = UNIT_CONVERSIONS.find{|uc| uc[0] == unit.name}
      raise "cannot find #{unit.name}" if unit_conversion.nil?
      p unit_conversion

      unit_name, new_unit_name, display_order, unit_conv_amount, _  = unit_conversion[0], unit_conversion[1], unit_conversion[2], unit_conversion[3], unit_conversion[4]
      
      # 新しい単位への変換
      if new_unit_name.present?
        p "start change_unit"
        change_unit(unit, new_unit_name, display_order)
      end

      # 表示順序の設定
      p "start is_display_before_amount"
      unit.is_display_before_amount = case display_order
      when "右", ""
        false
      when "左"
        true
      end
      unit.save!

      # mlへの変換
      if unit_conv_amount.present?
        p "start unit_conv_amount"
        ccis = CocktailsConcreteIngredient.where(unit_id: unit.id)
        ccis.each do |cci|
          begin
            if cci.amount.to_i > 0
              cci.amount = (cci.amount.to_i * unit_conv_amount).to_s
            end
            cci.unit_id = ml.id
            cci.save!
          rescue => exception
            p exception
            p cci
          end
        end
      end

    end
  end
end

def change_unit(prev_unit, new_unit_name, display_order)
  is_display_before_amount = case display_order
  when "右", ""
    false
  when "左"
    true
  end
  
  new_unit = Unit.find_by(name: new_unit_name)
  new_unit = Unit.create(name: new_unit_name, is_display_before_amount: is_display_before_amount) if new_unit.nil?

  prev_unit_id, new_unit_id = prev_unit.id, new_unit.id
  ccis = CocktailsConcreteIngredient.where(unit_id: prev_unit_id)
  ccis.each do |cci|
    begin
      cci.unit_id = new_unit_id
      cci.save!
    rescue => exception
      p exception
      p cci
    end
  end
end
