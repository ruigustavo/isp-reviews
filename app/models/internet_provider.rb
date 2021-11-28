class InternetProvider < ApplicationRecord
    has_many :reviews

	before_create :slugify
	def slugify
		#parameterize - creates safe names
		self.slug = name.parameterize
	end

	def avg_score
		return 0 unless reviews.size.positive?
		reviews.average(:score).round(2).to_f
	end
end
