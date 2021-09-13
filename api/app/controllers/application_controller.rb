class ApplicationController < ActionController::API
  # 404 Not Found
  def response_not_found(class_name = 'Page')
    render status: 404, json: { status: 404, message: "#{class_name} Not Found" }
  end
end
