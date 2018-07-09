class Api::UsersController < ApplicationController


  def create
    # debugger
    @user = User.new(user_params)

    if @user.save!
      log_in!(@user)
      render :show
    else
      render json: [":invalid credentials"], status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end



end
