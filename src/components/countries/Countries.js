import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      // handle success
      setData(response.data);
    }); // wehen this comp charget call that api ones
    
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </ul>
    </div>
  );
};
export default Countries;
