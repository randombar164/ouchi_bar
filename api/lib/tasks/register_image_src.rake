namespace :dbm do

  desc "マスターデータを保存するrakeタスク"
  task :register_image_src => :environment do
    ConcreteIngredient.all.each do |ci|
      tag = ci.tag
      next if tag.nil?
      doc = Nokogiri::HTML.parse(tag)
      img_src = doc.search('img')[0].attributes['src'].value
      p img_src
      ci.img_src = img_src
      ci.save!
    end
  end

end
