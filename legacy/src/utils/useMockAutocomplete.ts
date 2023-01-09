import { score } from "fuzzaldrin";
import { sortBy } from "lodash";
import { useEffect, useMemo, useState } from "react";

const pageSize = 10;

export function useMockAutocomplete(
  choices: Array<Record<"label" | "value", string>>
) {
  const [query, setQuery] = useState("");
  const [slice, setSlice] = useState(pageSize);
  const results = useMemo(
    () =>
      sortBy(
        choices.map((choice) => ({
          ...choice,
          score: -score(choice.label, query),
        })),
        "score"
      ).slice(0, slice),
    [query]
  );

  useEffect(() => {
    setSlice(pageSize);
  }, [query]);

  const search = (query: string) => setTimeout(() => setQuery(query), 300);

  const more = () => setSlice((s) => s + pageSize);

  return {
    search,
    results,
    more,
  };
}
