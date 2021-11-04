module Api
    module V1
        class ReviewsController < ApplicationController
        protect_from_forgery with: :null_session
            def create
                review = internet_provider.reviews.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serializable_hash.to_json
                else
                    render json: {error: review.erros.messages }, status: 422
                end
            end

            def destroy
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: {error: review.erros.messages }, status: 422
                end
            end


            private

            def internet_provider
                @internet_provider ||= InternetProvider.find(params[:internet_provider_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :internet_provider_id)
            end
        end
    end
end	