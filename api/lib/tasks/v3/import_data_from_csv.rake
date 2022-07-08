namespace :v3 do
  namespace :import_data_from_csv do
    OUTPUT_DIR = "./lib/tasks/master_data/outputs/"
    desc 'CSVからimportします。'
    task all_data: :environment do
      models = models = %w[Unit UnitConversion HandlingStore GlassType DrinkMethod Category BaseDrink Cocktail ConcreteIngredient CocktailsConcreteIngredient ConcreteIngredientsHandlingStore].map{|name| "V3::#{name}"}
  
      models.each do |model|
        p "Start: #{model} import"
        rows = CSV.read(OUTPUT_DIR + "#{model.split("::")[1].underscore}.csv", headers: true)
        rows.each_slice(1000) do |sliced_rows|
          array_of_hash = sliced_rows.map(&:to_hash)
          eval("#{model.gsub(/ConcreteIngredient/, "Ingredient")}.insert_all!(array_of_hash)")
          ActiveRecord::Base.connection.execute("SELECT setval('#{model.gsub(/ConcreteIngredient/, "Ingredient").gsub(/::/, "_").underscore.pluralize}_id_seq', coalesce((SELECT MAX(id)+1 FROM #{model.gsub(/ConcreteIngredient/, "Ingredient").gsub(/::/, "_").underscore.pluralize}), 1), false)")
        end
        p "End: #{model} import"
        p ''
      end
    end
  end
end
