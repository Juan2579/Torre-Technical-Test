import { PeopleContext } from "@/context/PeopleContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import { useContext } from "react";

export const Person = ({ person }) => {
  const { handleAddToFavorites, handleRemoveFromFavorites, peopleList, favoriteList } =
    useContext(PeopleContext);

  const handleSavePerson = () => {
    handleAddToFavorites(person);
  };

  const handleRemovePerson = () => {
    handleRemoveFromFavorites(person)
  }

  return (
    <li className="w-full relative max-w-[500px] min-h-[200px] flex flex-col items-center gap-5 bg-white p-7 rounded-lg shadow-xl md:flex-row">
      <img
        className="w-[100px] h-[100px] rounded-lg"
        src={person.picture}
        alt={`${person.name} Photo`}
      />
      <div className="flex flex-col gap-5">
        <p className="font-bold capitalize">{person.name}</p>
        <p>{person.professionalHeadline}</p>
      </div>

      {favoriteList.some((item) => item.ggId === person.ggId) ? (
        <Tooltip title="Remove From Favorites">
          <button
            onClick={handleRemovePerson}
            className="w-10 absolute top-2 right-2 h-10 rounded-full"
          >
            <FavoriteIcon className="text-red-600" fontSize="medium" />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Add to Favorites">
          <button
            onClick={handleSavePerson}
            className="w-10 absolute top-2 right-2 h-10 rounded-full"
          >
            <FavoriteBorderIcon className="text-red-600" fontSize="medium" />
          </button>
        </Tooltip>
      )}
    </li>
  );
};
