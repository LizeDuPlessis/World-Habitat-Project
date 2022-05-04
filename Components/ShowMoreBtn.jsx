import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function ShowMoreBtn({ country }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <button
        onClick={handleShowMore}
        className="h-8 my-3 mx-1 shadow appearance-none rounded-lg border-solid border-1 border-stone-300 hover:shadow"
      >
        Show More
      </button>

      <div className="text-center">
        {showMore && (
          <>
            <img
              src={country[0].coatOfArms.png}
              width={120}
              height={120}
              alt="coat_of_arms"
            />
            <div>
              <h3>Coat of Arms</h3>
            </div>
            <p>
              <span className="text-lg font-bold">Population: </span>
              {country[0].population.toLocaleString()}
            </p>
            <Link href={country[0].maps.googleMaps}>
              <a className={styles.btn}>
                {" "}
                See {country[0].name.common} in Maps
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ShowMoreBtn;
