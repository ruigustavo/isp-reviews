require 'test_helper'

class InternetProviderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @internet_provider = InternetProvider.new(name: "Example ISP",
                                              image_url: "https://imgur.com/123456")
  end

  test "should be valid" do
    assert @internet_provider.valid?
  end
end
