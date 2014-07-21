class RelativesController < ApplicationController
  before_action :set_relative, only: [:show, :edit, :update, :destroy]
  respond_to :json

  def index
    @relatives = Relative.all
    render json: @relatives, each_serializer: RelativeSerializer
  end

  def show
    render json: @relative
  end

  def new
    @relative = Relative.new
  end

  def edit
  end

  def create
    @relative = Relative.new(relative_params)

    if @relative.save
      render json: @relative, status: :created
    else
      render json: @relative.errors, status: :unprocessable_entity
    end
  end

  def update
    ap params
    @relative.parent_id = params[:relative][:parent_rails_id]
    if @relative.update(relative_params)
      render json: @relative, status: :updated
    else
      render json: @relative.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @relative.destroy
    render json: { status: :created }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_relative
      valid_id = Integer params[:relative][:rails_id] rescue false
      @relative = Relative.find_by_id(valid_id) if valid_id
      @relative = Relative.find_by_full_path(params[:id]) if !valid_id
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def relative_params
      params.require(:relative).permit(:name)
    end
end
