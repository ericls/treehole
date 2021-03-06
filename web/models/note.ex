defmodule Treehole.Note do
  use Treehole.Web, :model

  alias Treehole.Utils

  @primary_key {:slug, :string, []}
  @derive {Phoenix.Param, key: :slug}
  schema "notes" do
    field :content, :string

    timestamps
  end

  @required_fields ~w(content)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
