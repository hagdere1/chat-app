# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Change to find by ID or other unique identifier
if !Channel.find_by(name: "General")
  Channel.create(name: "General")
end

Channel.find_by(name: "General").messages.create({user_id: User.first.id})
