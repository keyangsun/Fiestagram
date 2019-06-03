class ApplicationController < ActionController::Base
    
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?, :require_logged_in, 
        :require_logged_out
    
    def current_user
        @current_user ||=  User.find_by(session_token: session[:session_token])
    end 

    def login!(user)
        session[:session_token] = user.session_token
    end 

    def logged_in?
        !!(current_user)
    end 

    def logout!
        current_user.reset_session_token!
        @current_user = nil
        session[:session_token] = nil
    end

    def require_logged_in 
        if !logged_in? 
            render json: ['login required']
        end 
    end 

    def require_logged_out
        if logged_in? 
            render json: ['logout required']
        end 
    end 

end
