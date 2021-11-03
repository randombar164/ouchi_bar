class Commands::RegisterUserController < ApplicationController
  def execute
    mock = { 
      "user":
        { "id":3,
          "uuid":"08013dd3-4e3d-443d-a991-3c7c57c263fd",
          "created_at":"2021-08-24T14:41:54.350Z",
          "updated_at":"2021-08-24T14:41:54.350Z"
        }
    }
    render json: mock
  end
end
