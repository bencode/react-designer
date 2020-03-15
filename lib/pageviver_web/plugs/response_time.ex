defmodule PageviverWeb.Plugs.ResponseTime do
  @moduledoc """
  输出响应时间
  """

  import Plug.Conn

  def init(opts) do
    opts
  end

  def call(conn, _opts) do
    last = :erlang.system_time(:microsecond)

    Plug.Conn.register_before_send(conn, fn conn ->
      now = :erlang.system_time(:microsecond)
      ms = (now - last) / 1000.0

      conn
      |> put_resp_header("x-response-time", "#{ms}ms")
    end)
  end
end
