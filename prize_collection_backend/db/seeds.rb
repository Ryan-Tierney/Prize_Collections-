# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Collection.create(name: 'Pokemon Cards', description: 'N/A', worth: 50.00)
Item.create(name: 'Pikachu', description: 'gen 1 pikachu card, mint', individual_worth: 5.00, collection_id: 1)
Item.create(name: 'Squirtle', description: 'gen 1 Squirtle card, mint', individual_worth: 10.00, collection_id: 1)
Item.create(name: 'Charizard', description: 'gen 1 Charizard card, near-mint', individual_worth: 35.00 , collection_id: 1)
Collection.create(name: 'Rocks', description: 'A collection of rocks found in nature', worth: 100.00)
Item.create(name: 'Sapphire', description: 'uncut small sapphire', individual_worth: 10.00, collection_id: 2)
Item.create(name: 'Ruby', description: 'refined large ruby', individual_worth: 90.00, collection_id: 2)
Collection.create(name: 'Guitars', description: 'A collection of prize guitars', worth: 1000.00)
Item.create(name: 'Gibson, Les Paul', description: 'A vintage Gibson Les Paul with a sunburst finish', individual_worth: 500.00, collection_id: 3)
Item.create(name: 'ibanez, art series', description: 'A 2010 Ibanez art series, white', individual_worth: 250.00, collection_id:3)
Item.create(name: 'BC RICH, Warlock', description: 'An all black BC RICH, Warlock made in 2015', individual_worth: 250.00, collection_id: 3)


