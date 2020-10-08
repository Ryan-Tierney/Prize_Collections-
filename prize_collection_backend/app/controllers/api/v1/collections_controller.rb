class Api::V1::CollectionsController < ApplicationController
    before_action :set_collection, only: [:show, :update, :destroy]
    def index 
        @collections = Collection.all 
    
     
        render json: @collections 
    end 

    def show
        render json: @collection 
    end 

    def create 
        @Collection = Collection.Create(collection_params)

        render json: @collection 
    end 

    def update 
        @collection.update(collection_params)

        render json: @collection, status: 200 
    end 

    def destroy 
        @collection.delete 

        render json: {collectionId: @collection.id}
    end
    
    private 

    def set_collection 
        @collection = Collection.find(params[:id])
    end 

    def collection_params 
        params.require(:collection).permit(:name, :description, :worth)
    end
        

end
