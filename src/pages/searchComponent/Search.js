import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ called, error, loading, data });

  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Character Location"
          className="block w-[170px] md:w-[250px] rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
        <button
          className="ml-2 bg-white px-2 py-1 rounded-md"
          onClick={() => getLocations()}
        >
          Search
        </button>
      </div>
      {loading && <div>Spinner...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li key={character.id}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
