namespace :export_data_to_csv do
  desc 'CSVに吐き出します'
  task all_data: :environment do
    Rails.application.eager_load!
    models = ApplicationRecord.descendants.collect(&:name).filter{|name| name.include?("V2")}

    models.each do |model|
      CSV.open(OUTPUT_DIR + "#{model.split("::")[1].underscore}.csv", 'wb') do |csv|
        column_names = eval("#{model}.column_names")
        csv << column_names
        all_records = eval("#{model}.all.sort")
        all_records.each do |record|
          csv << record.attributes.values_at(*column_names)
        end
      end
    end
  end
end
