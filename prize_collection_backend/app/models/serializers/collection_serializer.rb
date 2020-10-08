class CollectionSerializer < ActiveModel::CollectionSerializer
    attributes :name, :description, :worth, :items
end 