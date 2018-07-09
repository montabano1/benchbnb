# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

monte = User.create(username: 'monte', password: 'password')
alan = User.create(username: 'alan', password: 'password')

a = Bench.create(description: 'first bench', lat: 40.765010, lng: -73.958470)
b = Bench.create(description: 'second bench', lat: 40.766694, lng: -73.972246)
