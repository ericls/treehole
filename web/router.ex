defmodule Treehole.Router do
  use Treehole.Web, :router

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

  scope "/", Treehole do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/:slug", PageController, :index
  end

  scope "/api", Treehole do
      pipe_through :api

      resources "/notes", NoteController, only: [:create, :show, :delete]
  end

  # Other scopes may use custom stacks.
  # scope "/api", Treehole do
  #   pipe_through :api
  # end
end
