import { Box, Drawer, IconButton } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from 'react';
import { PeopleContext } from '@/context/PeopleContext';
import { Person } from '../Person';

export const FavoriteList = ({open, onClose}) => {

  const { favoriteList } = useContext(PeopleContext);

  return (
    <Drawer
      transitionDuration={500}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        className="bg-white w-full max-w-[600px] h-screen flex flex-col items-start p-6 gap-10"
        onKeyDown={onClose}
      >
        <div className="w-full flex justify-between items-center">
        <h2 className="text-center text-primary-purple text-xl lg:text-2xl font-bold">
          Favorite List
        </h2>
          <IconButton onClick={onClose}>
            <CloseIcon className="text-primary-purple" fontSize="large" />
          </IconButton>
        </div>
        <ul className="flex flex-col gap-5">
        {favoriteList.length > 0 ? favoriteList.map((person) => {
            return (
              <Person key={person.ggId} person={person} />
            );
          }) : (
            <div className="flex flex-col gap-4">
              <p>You do not have favorite users, start adding one!</p>
            </div>
          )}
        </ul>
      </Box>
    </Drawer>
  )
}
