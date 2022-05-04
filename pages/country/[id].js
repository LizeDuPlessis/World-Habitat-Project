import CapitalCityWeather from "../../Components/CapitalCityWeather";
import CountryDetails from "../../Components/CountryDetails";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const paths = data.map((country) => {
    return {
      params: { id: country?.name?.common },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();
  return {
    props: { country: data },
  };
};

const Details = ({ country }) => {
  const [capitalCityWeather, setCapitalCityWeather] = useState(null);

  useEffect(() => {
    const getCapitalCityWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&units=metric&appid=c00ada06a603c24db5737b2c99743430`
        );
        const data = await res.json();
        setCapitalCityWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getCapitalCityWeather();
  }, []);
  return (
    <div>
      <CountryDetails country={country} />

      <CapitalCityWeather
        capitalCityWeather={capitalCityWeather}
        country={country}
      />
    </div>
  );
};

export default Details;
