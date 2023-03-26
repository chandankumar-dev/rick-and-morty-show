import React from "react";
import { useParams } from "react-router";
import Loading from "../../common/Loading";
import { useCharacter } from "../../hooks/useCharacter";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something went wrong....</div>;

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center">
      <img
        className="h-[250px] w-[250px] rounded-lg"
        src={data.character.image}
        alt={data.character.name}
      />
      <div className="flex flex-col items-center">
        <p className="text-xl mt-2 font-semibold">{data.character.name}</p>
        <p className="text-lg mb-2">{data.character.gender}</p>
        <dl>
          {data.character.episode.map((episode) => {
            return (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {episode.name}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {episode.episode}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
