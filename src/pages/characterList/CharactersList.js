import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import Loading from "../../common/Loading";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <Loading />;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {data.characters.results.map((character) => {
        return (
          <div>
            <Link to={`/${character.id}`}>
              <div className="flex flex-col items-center">
                <img
                  className="h-[250px] w-[250px] rounded-lg"
                  src={character.image}
                  alt={character.name}
                />
                <div className="flex flex-col justify-center items-center mt-2">
                  <h2>{character.name}</h2>
                  <button className="bg-white rounded-md px-2 pb-1 ml-2 mt-1">
                    Read More...
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
