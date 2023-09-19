"use client";
import { PeopleContext } from '@/context/PeopleContext';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';

export const PeopleSearch = () => {

  const { handleSearchPerson } = useContext(PeopleContext);
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section className="w-full bg-[#fcfcfd]">
      <div className="w-[90%] h-full mx-auto flex flex-col gap-10 pt-10 items-center justify-center lg:pt-20 xl:w-[85%] min-[1800px]:w-[75%] min-[2000px]:w-[65%]">
        <h2 className="text-center text-primary-purple text-xl lg:text-2xl font-bold">
          Find the best candidates!
        </h2>
        {/* <div className="w-full flex  justify-center">
          <input
            className="w-full max-w-[400px] h-14 rounded-l-[30px] z-10 bg-white text-sm py-4 px-6 outline-none shadow-xl"
            type="text"
            placeholder="Barry Allen"
            autoComplete="off"
            onChange={handleChange}
            value={name}
          />
          <button onClick={() => handleSearchPerson(name)} className="flex gap-2 items-center justify-center bg-primary-blue py-2 pl-2 pr-3 text-white rounded-r-[30px] shadow-xl transition-all hover:opacity-50">
            <SearchIcon size="large" />
            <span>Search</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};
