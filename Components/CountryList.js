import Image from "next/image";
import React from "react";
import Link from "next/link";
import CountryCard from "./CountryCard";
import { useState } from "react";

export default function CountryList({ country }) {
  const [userInput, setUserInput] = useState("");

  const [userSearched, setUserSearched] = useState(false);

  const [error, setError] = useState(null);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  const handleUserSearched = (e) => {
    e.preventDefault();
    setUserSearched(!userSearched);
    if (filteredCountry.length === 0) {
      setError(
        <div className="text-center mt-5 ">
          <Image
            src="/try_again.jpg"
            width={350}
            height={350}
            alt="try_again"
          />

          <h1>Uhhh..Try again!</h1>
        </div>
      );
    }
  };

  const filteredCountry = country.filter((country) =>
    country?.name.common.toLowerCase().includes(userInput.toLowerCase())
  );
  return (
    <>
      <form role="search" className="text-center">
        <label htmlFor="search" className="sr-only">
          Search:
        </label>
        <input
          className="w-4/5 h-9 text-lg shadow appearance-none rounded-lg border-solid border-1 border-stone-300 focus:shadow-outline"
          type="search"
          id="search"
          name="search"
          placeholder="Type to search..."
          title="search for a country"
          onChange={handleUserInput}
          value={userInput}
          required
        />
        <button
          className=" h-9 ml-3 shadow appearance-none rounded-lg border-solid border-1 border-stone-300 hover:shadow "
          onClick={handleUserSearched}
          type="submit"
        >
          Search
        </button>
      </form>
      <span className="errMsg" role="status">
        {error}
      </span>
      <CountryCard>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 text-lg ">
          {filteredCountry &&
            filteredCountry.map((country) => (
              <Link
                href={`/country/${country?.name.common}`}
                key={country?.name.common}
              >
                <a className="w-100 h-fit md:h-full border-solid border-black border-2 hover:box-content rounded-lg mt-5 text-center hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  <img
                    className="mt-5"
                    src={country?.flags.png}
                    alt="country-flag"
                  />

                  <h2>{country?.name.common}</h2>
                </a>
              </Link>
            ))}
        </div>
      </CountryCard>
    </>
  );
}
