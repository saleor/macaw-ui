import { score } from "fuzzaldrin";
import { sortBy } from "lodash";
import { useMemo, useState } from "react";

export function useMockAutocomplete(
  choices: Array<Record<"label" | "value", string>>
) {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      sortBy(
        choices.map((choice) => ({
          ...choice,
          score: -score(choice.label, query),
        })),
        "score"
      ).slice(0, 5),
    [query]
  );

  const search = (query: string) => setTimeout(() => setQuery(query), 300);

  return {
    search,
    results,
  };
}
