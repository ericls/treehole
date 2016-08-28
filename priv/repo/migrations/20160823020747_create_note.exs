defmodule Treehole.Repo.Migrations.CreateNote do
  use Ecto.Migration

  def change do
    create table(:notes, primary_key: false) do
      add :slug, :string, primary_key: true
      add :content, :text

      timestamps
    end

  end
end
