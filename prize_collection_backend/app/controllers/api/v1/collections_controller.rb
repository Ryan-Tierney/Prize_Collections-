class Api::V1::CollectionsController < ApplicationController

    def index 
        @collections = Collection.all 
     
        render json: @collections, status: 200 
    end 

    def show 
        @collection = Collection.find(params[:id])

        render json: @collection, status: 200 
    end 

    def create 
        @Collection = Collection.Create(collection_params)

        render json: @collection, status: 200 
    end 

    def update 
        @collection = Collection.find(params[:id])
        @collection.update(collection_params)

        render json: @collection, status: 200 
    end 

    def destroy 
        @collection = Collection.find(params[:id])
        @collection.delete 

        render json: {collectionId: @collection.id}
    end
    
    private 

    def collection_params 
        params.require(:collection).permit(:name, :description, :worth)
    end
        

end
