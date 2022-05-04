import React from "react";
import Link from "next/link";

function CountryList({ country }) {
  return (
    <div>
      {country.map((country) => (
        <Link
          href={`/country/${country?.name?.common}`}
          key={country?.name?.common}
        >
          <a>
            <ul>{country?.name.common}</ul>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
