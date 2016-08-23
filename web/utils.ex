defmodule Treehole.Utils do

    alias Treehole.Note
    alias Treehole.Repo

    @words File.stream!("#{__DIR__}/../lib/words.txt")
    |> Enum.map(fn (line) ->
        line |> String.trim
    end)

    def get_word do
        @words |> Enum.at(:rand.uniform(9998))
    end

    def generate_slug(len \\ 2) do
        1 .. len
        |> Enum.map(fn _ -> get_word end)
        |> Enum.join("-")
    end

    def generate_valid_slug(len \\ 2, count \\ 0)

    def generate_valid_slug(len, count) when count >= 10 do
        generate_valid_slug(len + 1)
    end

    def generate_valid_slug(len, count) when count < 10 do
        slug = generate_slug(len)
        case valid_slug? slug do
            true -> slug
            false -> generate_valid_slug(len, count + 1)
        end
    end

    def valid_slug?(slug) do
        case Repo.get_by(Note, slug: slug) do
            nil -> true
            _ -> false
        end
        # occ = slug |> String.graphemes |> Enum.reduce(0, fn(i, acc) -> if i == "-" do acc+1 else acc end end)
        # if occ < 3 do
        #     false
        # else
        #     true
        # end
    end

end
