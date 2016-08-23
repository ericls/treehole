ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Treehole.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Treehole.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Treehole.Repo)

