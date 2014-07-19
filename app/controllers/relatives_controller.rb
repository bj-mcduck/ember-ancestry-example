class RelativesController < ApplicationController
  before_action :set_relative, only: [:show, :edit, :update, :destroy]
  respond_to :json
  # GET /relatives
  # GET /relatives.json
  def index
    @relatives = Relative.all
    render json: @relatives, each_serializer: RelativeSerializer
  end

  # GET /relatives/1
  # GET /relatives/1.json
  def show
    render json: @relative
  end

  # GET /relatives/new
  def new
    @relative = Relative.new
  end

  # GET /relatives/1/edit
  def edit
  end

  # POST /relatives
  # POST /relatives.json
  def create
    @relative = Relative.new(relative_params)

    respond_to do |format|
      if @relative.save
        format.html { redirect_to @relative, notice: 'Relative was successfully created.' }
        format.json { render action: 'show', status: :created, location: @relative }
      else
        format.html { render action: 'new' }
        format.json { render json: @relative.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /relatives/1
  # PATCH/PUT /relatives/1.json
  def update
    respond_to do |format|
      if @relative.update(relative_params)
        format.html { redirect_to @relative, notice: 'Relative was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @relative.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /relatives/1
  # DELETE /relatives/1.json
  def destroy
    @relative.destroy
    respond_to do |format|
      format.html { redirect_to relatives_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_relative
      @relative = Relative.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def relative_params
      params.require(:relative).permit(:name, :ancestry)
    end
end
