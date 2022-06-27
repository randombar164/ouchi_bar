namespace :import_data_from_csv do
  OUTPUT_DIR = "./lib/tasks/master_data/outputs/"
  desc 'CSVからimportします。'
  task all_data: :environment do
    Rails.application.eager_load!
    models = ApplicationRecord.descendants.collect(&:name).filter{|name| name.include?("V3")}
    
    models.each do |model|
      p "Start: #{model} import"
      rows = CSV.read("./lib/tasks/master_data/outputs/v3" + "#{model.underscore}.csv", headers: true)
      rows.each_slice(1000) do |sliced_rows|
        array_of_hash = sliced_rows.map(&:to_hash)
        eval("#{model}.insert_all!(array_of_hash)")
        ActiveRecord::Base.connection.execute("SELECT setval('#{model.underscore.pluralize}_id_seq', coalesce((SELECT MAX(id)+1 FROM #{model.underscore.pluralize}), 1), false)")
      end
      p "End: #{model} import"
      p ''
    end
  end
end
