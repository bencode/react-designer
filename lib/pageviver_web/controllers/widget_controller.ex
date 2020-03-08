defmodule PageviverWeb.WidgetController do
  use PageviverWeb, :controller

  def new(conn, _param) do
    render(conn, "edit.html", assets: "widgetEdit")
  end
end
