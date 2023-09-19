"use client";

import { httpRequest } from "@/services/httpRequest";
import { createContext, useEffect, useState } from "react";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const searchPeopleUrl = "https://search.torre.co";
  const searchPersonUrl = "https://torre.ai/api";

  const [peopleList, setPeopleList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);

  const getPeople = async (query) => {
    const { data } = await httpRequest.post({
      apiUrl: searchPeopleUrl,
      endpoint: `people/_search?size=10${query ? query : ""}`,
    });

    setPeopleList(data.results);
    setPagination(data.pagination);
    return data.results;
  };

  const handleNextPage = async () => {
    const data = await getPeople(`&after=${pagination.next}`);
    setPeopleList(data);
  };

  const handlePreviousPage = async () => {
    const data = await getPeople(`&before=${pagination.before}`);
    setPeopleList(data);
  };

  const handleSearchPerson = async (query) => {
    console.log(query);
    const data = await httpRequest.post({
      apiUrl: searchPersonUrl,
      endpoint: `entities/_searchStream`,
      values: {
        query: query,
        limit: 10,
        identityType: "person",
        meta: false,
        torreGgId: 1464321,
      },
    });

    console.log(data);
  };

  const handleAddToFavorites = (person) => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(person);
    setFavoriteList(newFavoriteList);
  };

  const handleRemoveFromFavorites = (person) => {
    const personIndex = favoriteList.findIndex(
      (item) => item.ggId == person.ggId
    );

    const newFavoriteList = [...favoriteList];
    newFavoriteList.splice(personIndex, 1);

    setFavoriteList(newFavoriteList);
  };

  console.log(peopleList);

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        peopleList,
        getPeople,
        handleNextPage,
        handlePreviousPage,
        handleSearchPerson,

        favoriteList,
        handleAddToFavorites,
        handleRemoveFromFavorites
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
