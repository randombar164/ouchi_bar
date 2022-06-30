namespace :import_data_from_csv do
  OUTPUT_DIR = "./lib/tasks/master_data/outputs/"
  desc 'CSVからimportします。'
  task all_data: :environment do
    Rails.application.eager_load!
    # 従属関係からこの順で定義しておかないと行けない。
    models = %w[Unit UnitConversion HandlingStore GlassType DrinkMethod Category BaseDrink Cocktail BaseIngredient BaseDrinksBaseIngredient ConcreteIngredient CocktailsConcreteIngredient ConcreteIngredientsHandlingStore].map{|name| "V2::#{name}"}

    models.each do |model|
      p "Start: #{model} import"
      rows = CSV.read(OUTPUT_DIR + "#{model.split("::")[1].underscore}.csv", headers: true)
      rows.each_slice(1000) do |sliced_rows|
        array_of_hash = sliced_rows.map(&:to_hash)
        eval("#{model}.insert_all!(array_of_hash)")
        ActiveRecord::Base.connection.execute("SELECT setval('#{model.gsub(/::/, "_").underscore.pluralize}_id_seq', coalesce((SELECT MAX(id)+1 FROM #{model.gsub(/::/, "_").underscore.pluralize}), 1), false)")
      end
      p "End: #{model} import"
      p ''
    end
  end
end
