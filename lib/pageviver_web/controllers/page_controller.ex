defmodule PageviverWeb.PageController do
  use PageviverWeb, :controller

  def index(conn, _params) do
    redirect(conn, to: "/widgets/new")
  end
end
