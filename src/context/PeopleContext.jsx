"use client";

import { httpRequest } from "@/services/httpRequest";
import { createContext, useEffect, useState } from "react";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const searchPeopleUrl = "https://search.torre.co";
  const searchPersonUrl = "https://torre.ai/api";

  const [peopleList, setPeopleList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const [individualSearch, setIndividualSearch] = useState(false);

  const getPeople = async (query) => {
    try {
      setIndividualSearch(false)
      setLoading(true);

      const { data } = await httpRequest.post({
        apiUrl: searchPeopleUrl,
        endpoint: `people/_search?size=10${query ? query : ""}`,
      });

      setLoading(false);
      setPeopleList(data.results);
      setPagination(data.pagination);
      return data.results;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleNextPage = async () => {
    try {
      const data = await getPeople(`&after=${pagination.next}`);
      setPeopleList(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handlePreviousPage = async () => {
    try {
      const data = await getPeople(`&before=${pagination.previous}`);
      setPeopleList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchPerson = async (query) => {
    try {
      setIndividualSearch(true)
      setLoading(true);
      const response = await fetch(
        `${searchPersonUrl}/entities/_searchStream`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: query,
            identityType: "person",
            limit: 10,
          }),
        }
      );
      const data = await response.text();

      const lines = data.split("\n");

      const jsonObjects = [];

      for (const line of lines) {
        if (line.trim() !== "") {
          const jsonObject = JSON.parse(line);
          jsonObjects.push(jsonObject);
        }
      }
      setPeopleList(jsonObjects);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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

  const handleRemoveFilter = async() => {
    const data = await getPeople()
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        loading,
        pagination,
        peopleList,
        getPeople,
        handleNextPage,
        handlePreviousPage,
        handleSearchPerson,
        individualSearch,

        favoriteList,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        handleRemoveFilter
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
