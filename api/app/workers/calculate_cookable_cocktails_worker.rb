class CalculateCookableCocktailsWorker
  include Sidekiq::Worker
  sidekiq_options queue: :default

  def perform(user_id)
    user = User.find(user_id)
    user.update_cookable_cocktails
    user.save!
  end
end
