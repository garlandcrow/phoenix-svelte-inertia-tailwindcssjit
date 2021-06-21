defmodule HelixWeb.PageController do
  use HelixWeb, :controller

  def index(conn, _params) do
    render_inertia(conn, "Home", props: %{msg: "it works!"})
  end
end
