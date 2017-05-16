# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create(username: "test", password: "password",
                    name: "Janice Lee", bio: "test id no.1")
user2 = User.create(username: "user2", password: "password",
                    name: "User2", bio: "test id no.2")
user1 = User.create(username: "user3", password: "password",
                    name: "User3", bio: "test id no.3")
user2 = User.create(username: "user4", password: "password",
                    name: "User4", bio: "test id no.4")
