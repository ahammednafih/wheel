# frozen_string_literal: true

namespace :api, defaults: { format: :json } do
  namespace :v1 do
    devise_scope :user do
      post "login", to: "sessions#create", as: "login"
      delete "logout", to: "sessions#destroy", as: "logout"
    end

    resources :users, except: %i[index new edit], constraints: { id: /.*/ }
    resources :notes, except: %i[new show edit] do
      collection do
        post "bulk_delete"
      end
    end

    resources :cypress_runs, only: [:create]
  end
end
