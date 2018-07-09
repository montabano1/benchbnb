class Bench < ApplicationRecord

	validates :description, :lat, :lng, presence: true

	# def self.in_bounds(bounds)
	# 	Bench.all.select{|el| el.lat.between?(bounds.northeast.lat, bounds.southwest.lat) && el.lng.between?(bounds.northeast.lng, bounds.southwest.lng)}
  # end

	

end
