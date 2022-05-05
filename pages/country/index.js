import CountryList from "../../Components/CountryList";

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { country: data },
  };
};

const Country = ({ country }) => {
  return (
    <div>
      <CountryList country={country} />
    </div>
  );
};

export default Country;
