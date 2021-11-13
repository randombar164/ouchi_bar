namespace :import_data_from_csv do
  OUTPUT_DIR = "./lib/tasks/master_data/outputs/"
  desc 'CSVからimportします。'
  task all_data: :environment do
    # Rails.application.eager_load!
    # models = ApplicationRecord.descendants.collect(&:name) - ['V1::Cocktail']

    models = %w[Unit UnitConversion HandlingStore GlassType DrinkMethod Category BaseDrink Cocktail BaseIngredient BaseDrinksBaseIngredient ConcreteIngredient CocktailsConcreteIngredient ConcreteIngredientsHandlingStore]
    
    models.each do |model|
      p "Start: #{model} import"
      array_of_hash = CSV.read(OUTPUT_DIR + "#{model.underscore}.csv", headers: true).map(&:to_hash)
      eval("#{model}.insert_all!(array_of_hash)")
      p "End: #{model} import"
      p ''
    end
  end
end
