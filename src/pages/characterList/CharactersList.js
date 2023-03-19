import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import Loading from "../../common/Loading";

import "./CharacterList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <Loading />;

  return (
    <>
      <div className="CharacterList container text-center">
        <div className="row row-cols-4">
          {data.characters.results.map((character) => {
            return (
              <div className="col">
                <Link to={`/${character.id}`}>
                  <img src={character.image} />
                  <h2>{character.name}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
