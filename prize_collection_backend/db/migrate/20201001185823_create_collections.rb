class CreateCollections < ActiveRecord::Migration[6.0]
  def change
    create_table :collections do |t|
      t.string :name 
      t.text :description 
      t.integer :worth
      t.timestamps
    end
  end
end
