# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


internet_providers = InternetProvider.create([
  { 
    name: "Orange",
    image_url: "https://lh3.googleusercontent.com/-4JGNlwh6tjRbSPFZtEOkOx-YFVl0fftXcvk4LwkLLSNn-5WJ8-uDeMKB40PP1NdDaml=s85"
  }, 
  { 
    name: "Virgin telco",
    image_url: "https://lh3.googleusercontent.com/sWnQzR93Fz5NeumXjnaSTs3TUab6A8U4OcwITLzLfl9L_hyQwINZ3ZwCyesZp46UyjOTfw=s85"
  },
  { 
    name: "Finetwork",
    image_url: "https://lh3.googleusercontent.com/qi-1qeW3KkK7w3MqiaWRaJUe_nFP61gh0mIamFv2PjGvwgPTTDUAJ22i51A-1lBcHeBN=s85" 
  }, 
  { 
    name: "Vodafone",
    image_url: "https://lh3.googleusercontent.com/AvyTLdvedEUSLg9Yd7buyJsB09Pb2oAyIq8EEdd72aCbW2C1kN3mIqrciaDRdnaiCoY3ww=s80" 
  }, 
  { 
    name: "Parlem",
    image_url: "https://lh3.googleusercontent.com/DILRVkUrFCrF4d4B_-du9KDXimhzZf-JkbRInXG9Ipuow6fnOik5UXrF1S4UgRvIaFu3SoQ=s85" 
  }, 
  { 
    name: "Movistar",
    image_url: "https://lh3.googleusercontent.com/1WsqMcFhMov8eCByOTNdj4Jqqx4E40QpT_CTmMhkJCl59NSbcYj0F2nHK4keYYVcei1ldIg=s153" 
  }
])

reviews = Review.create([
    {
        title: 'Great internet provider',
        description: 'The internet was great',
        score: 5,
        internet_provider: internet_providers.first
    },
    {
        title: 'Bad internet provider',
        description: 'The internet was awful',
        score: 1,
        internet_provider: internet_providers.first
    }
])
      