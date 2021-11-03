class ApplicationController < ActionController::API
  # 200 Success
  def response_success(class_name, action_name)
    render status: :ok, json: { status: 200, message: "Success #{class_name} #{action_name}" }
  end
  # 404 Not Found
  def response_not_found(class_name = 'Page')
    render status: :not_found, json: { status: 404, message: "#{class_name} Not Found" }
  end
end
