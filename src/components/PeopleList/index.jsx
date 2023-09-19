"use client";
import { PeopleContext } from "@/context/PeopleContext";
import { useContext } from "react";
import { Person } from "../Person";
import LoopIcon from "@mui/icons-material/Loop";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Tooltip } from "@mui/material";

export const PeopleList = () => {
  const { handleNextPage, handlePreviousPage, pagination, peopleList, loading, individualSearch } = useContext(PeopleContext);

  return (
    <section className="w-full bg-[#fcfcfd]">
      <div className="w-[90%] h-full mx-auto flex flex-col gap-10 py-10 items-center justify-center lg:py-14 xl:w-[85%] min-[1800px]:w-[75%] min-[2000px]:w-[65%]">
        <ul id="#people" className="w-full flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          {peopleList.length > 0 && !loading ? (
            peopleList.map((person) => {
              return <Person key={person.ggId} person={person} />;
            })
          ) : (
            <div className="flex flex-col gap-4">
              <LoopIcon
                className="text-primary-blue animate-spin"
                fontSize="large"
              />
            </div>
          )}
        </ul>
        {!individualSearch && (
          <div className="w-full flex gap-4 justify-center">
            <Tooltip>
              <button
                className="bg-primary-blue text-white font-bold rounded-md py-4 px-6 cursor-pointer transition-all hover:opacity-50 disabled:opacity-50 disabled:cursor-default"
                onClick={handlePreviousPage}
                disabled={!pagination.previous}

              >
                <ArrowBackIosIcon className="text-white" />
              </button>
            </Tooltip>
            <Tooltip>
              <button
                className="bg-primary-blue text-white font-bold rounded-md py-4 px-6 cursor-pointer transition-all hover:opacity-50 disabled:opacity-50 disabled:cursor-default"
                onClick={handleNextPage}
                disabled={!pagination.next}
              >
                <ArrowForwardIosIcon className="text-white" />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </section>
  );
};
