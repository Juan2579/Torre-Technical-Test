"use client";
import { PeopleContext } from "@/context/PeopleContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Dialog, Slide, Tooltip } from "@mui/material";
import { forwardRef, useContext, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Person = ({ person }) => {
  const {
    handleAddToFavorites,
    handleRemoveFromFavorites,
    peopleList,
    favoriteList,
  } = useContext(PeopleContext);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleSavePerson = (e) => {
    e.stopPropagation();
    handleAddToFavorites(person);
    openModal();
  };

  const handleRemovePerson = () => {
    handleRemoveFromFavorites(person);
  };

  return (
    <li className="w-full relative max-w-[550px] min-h-[350px] flex flex-col items-center justify-center gap-5 bg-white p-7 rounded-lg shadow-xl md:flex-row">
      <img
        className="w-[100px] h-[100px] rounded-lg"
        src={person.picture || person.imageUrl}
        alt={`${person.name} Photo`}
      />
      <div className="w-full flex flex-col gap-5">
        <p className="font-bold capitalize">{person.name}</p>
        <p>{person.professionalHeadline}</p>
        {(person.openTo && person.openTo.length) > 0 && (
          <ul className="flex flex-col gap-2">
            <p>Open to:</p>
            {person.openTo.map((item) => (
              <li className="capitalize" key={item}>
                - {item}
              </li>
            ))}
          </ul>
        )}
        <div className="w-full flex justify-end">
          <a
            href={`https://torre.ai/${person.username}`}
            target="_blank"
            className="bg-primary-blue text-white text-xs font-bold rounded-md py-3 px-4 cursor-pointer transition-all hover:opacity-50"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>

      {favoriteList.some((item) => item.ggId === person.ggId) ? (
        <Tooltip title="Remove From Favorites">
          <button
            onClick={handleRemovePerson}
            className="w-10 absolute top-2 right-2 h-10 rounded-full z-50"
          >
            <FavoriteIcon className="text-red-600" fontSize="medium" />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Add to Favorites">
          <button
            onClick={handleSavePerson}
            className="w-10 absolute top-2 right-2 h-10 rounded-full z-50"
          >
            <FavoriteBorderIcon className="text-red-600" fontSize="medium" />
          </button>
        </Tooltip>
      )}
      <Dialog
        open={modal}
        onClose={closeModal}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex flex-col gap-3 py-10 px-14 bg-white rounded-lg">
          <h2 className="text-lg font-semibold text-primary-purple">
            User added to favorites list
          </h2>
          <p>
            The user was successfully added, click on the <b>Favorites</b>{" "}
            button in the header to review your list
          </p>

          <div className="w-full flex gap-4 pt-5 justify-end">
            <button
              onClick={closeModal}
              className="py-4 px-6 bg-primary-blue text-white font-bold rounded-md transition-all uppercase duration-500  hover:opacity-50"
            >
              Accept
            </button>
          </div>
        </div>
      </Dialog>
    </li>
  );
};
