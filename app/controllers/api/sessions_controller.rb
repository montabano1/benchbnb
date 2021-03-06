class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render :template => '/api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

   def destroy
     if current_user
       log_out
       render json: {}
     else
       render json:["no current user"], status: 404
     end
   end



end
