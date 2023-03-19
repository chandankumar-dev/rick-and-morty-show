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
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => getLocations()}>Search</button>
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
