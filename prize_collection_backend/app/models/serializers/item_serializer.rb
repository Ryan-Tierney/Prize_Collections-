class ItemSerializer < ActiveModel::Serializer 
    attributes :id, :name, :description, :individual_worth
end 