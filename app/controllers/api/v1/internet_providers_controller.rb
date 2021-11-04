module Api
    module V1
        class InternetProvidersController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                internet_providers = InternetProvider.all
                render json: InternetProviderSerializer.new(internet_providers, options).serializable_hash.to_json
            end

            def show
                internet_provider = InternetProvider.find_by(slug: params[:slug])

                render json: InternetProviderSerializer.new(internet_provider, options).serializable_hash.to_json
            end

            def create
            internet_provider = InternetProvider.new(internet_provider_params)
                if internet_provider.save
                    render json: InternetProviderSerializer.new(internet_provider).serializable_hash.to_json
                else
                    render json: {error: internet_provider.errors.messages} , status: 422
                end
            end

            def update
            internet_provider = InternetProvider.find_by(slug: params[:slug])
                if internet_provider.update(internet_provider_params)
                    render json: InternetProviderSerializer.new(internet_provider, options).serializable_hash.to_json
                else
                    render json: {error: internet_provider.errors.messages} , status: 422
                end
            end

            def destroy
            internet_provider = InternetProvider.find_by(slug: params[:slug])
                if internet_provider.destroy
                    render :no_content
                else
                #error 422 unprocessed entity
                    render json: {error: internet_provider.errors.messages} , status: 422
                end
            end

            private

            def internet_provider_params
                params.require(:internet_provider).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
        end
    end
end	