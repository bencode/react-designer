# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :pageviver,
  ecto_repos: [Pageviver.Repo]

# Configures the endpoint
config :pageviver, PageviverWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "6GyuFjdQ3Xyvrwkq+im/mfr3nE/oBqDVtIdTiT/qppN9EBU21dQZa//f7IF9t+bF",
  render_errors: [view: PageviverWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Pageviver.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "ubOXTSri"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
