defmodule Treehole.NoteView do
  use Treehole.Web, :view

  def render("index.json", %{notes: notes}) do
    %{data: render_many(notes, Treehole.NoteView, "note.json")}
  end

  def render("show.json", %{note: note}) do
    %{data: render_one(note, Treehole.NoteView, "note.json")}
  end

  def render("note.json", %{note: note}) do
    %{slug: note.slug,
      content: note.content}
  end
end
