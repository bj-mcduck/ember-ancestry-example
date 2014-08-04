class RelativesController < ApplicationController
  before_action :set_relative, only: [:show, :edit, :update, :destroy]
  before_action :serialize_ancestry, only: [:create, :update]
  respond_to :json

  def index
    set_relatives
    respond_with @relatives, each_serializer: RelativeSerializer
  end

  def show
    respond_with @relative
  end

  def create
    @relative = Relative.new(relative_params)

    if @relative.save
      render json: @relative, status: :ok
    else
      respond_with @relative.errors, status: :error
    end
  end

  def update
    if @relative.update(relative_params)
      render json: @relative, status: update_response
    else
      respond_with @relative.errors, status: :error
    end
  end

  def destroy
    @relative.destroy
    respond_with status: :ok
  end

private
  def update_response
    @relative.full_path != params[:id] ? :error : :ok
  end

  def serialize_ancestry
    # This seems like a bit of a hack.
    # I'd rather this happened in a serializer/adapter in Ember itself.
    params[:relative][:parent_id] = params[:relative][:parent_rails_id]
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_relative
    valid_id = Integer params[:relative][:rails_id] rescue false
    @relative = Relative.find_by_id(valid_id) if valid_id
    @relative = Relative.find_by_full_path(params[:id]) if !valid_id
  end

  def set_relatives
    if params[:ids].present?
      @relatives = Relative.where full_path: params[:ids]
    else
      @relatives = Relative.roots
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def relative_params
    params.require(:relative).permit(:name, :parent_id)
  end
end
