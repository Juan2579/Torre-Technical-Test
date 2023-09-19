"use client";
import { PeopleContext } from "@/context/PeopleContext";
import { useContext } from "react";
import { Person } from "../Person";
import LoopIcon from '@mui/icons-material/Loop';

export const PeopleList = () => {
  const { handleNextPage, peopleList } = useContext(PeopleContext);

  return (
    <section className="w-full bg-[#fcfcfd]">
      <div className="w-[90%] h-full mx-auto flex flex-col gap-10 py-10 items-center justify-center lg:py-14 xl:w-[85%] min-[1800px]:w-[75%] min-[2000px]:w-[65%]">
        <ul className="w-full flex flex-wrap items-center justify-center gap-5">
          {peopleList.length > 0 ? peopleList.map((person) => {
            return (
              <Person key={person.ggId} person={person} />
            );
          }) : (
            <div className="flex flex-col gap-4">
              <LoopIcon className="text-primary-blue animate-spin" fontSize="large" />
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};
