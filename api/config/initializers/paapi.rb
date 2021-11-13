Paapi.configure do |config|
  config.access_key = ENV['PAAPI_ACCESS_KEY']
  config.secret_key = ENV['PAAPI_SECRET_KEY']
  config.partner_tag = ENV['PAAPI_PARTNER_TAG']
  config.market = :jp
end
