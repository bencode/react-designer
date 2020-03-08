defmodule PageviverWeb.Router do
  use PageviverWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PageviverWeb do
    pipe_through :browser

    get "/", PageController, :index

    resources "/widgets", WidgetController, only: [:new]
  end

  # Other scopes may use custom stacks.
  # scope "/api", PageviverWeb do
  #   pipe_through :api
  # end
end
