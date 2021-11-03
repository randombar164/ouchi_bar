class Commands::RegisterConcreteIngredientByAmazonProductController < ApplicationController
  def execute
    p "Commands::RegisterConcreteIngredientByAmazonProductController"
    response_success(self.to_s, "execute")
  end
end
