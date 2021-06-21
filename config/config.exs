# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :helix,
  ecto_repos: [Helix.Repo]

# Configures the endpoint
config :helix, HelixWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "HMrAawzMiRaFCFoqrRyLjuRXx0kXTIH0iBlR/pufPlbjRS4n0gDXYfARZpx1e9Nl",
  render_errors: [view: HelixWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Helix.PubSub,
  live_view: [signing_salt: "gLHAM5+Z"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :inertia_phoenix,
  assets_version: 1, # default 1
  inertia_layout: "app.html"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
