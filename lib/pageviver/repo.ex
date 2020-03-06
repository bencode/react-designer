defmodule Pageviver.Repo do
  use Ecto.Repo,
    otp_app: :pageviver,
    adapter: Ecto.Adapters.Postgres
end
