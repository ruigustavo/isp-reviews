class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :internet_provider_id
end
