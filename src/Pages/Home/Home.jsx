import { useLoaderData } from "react-router-dom";
import Spot from "./Spot/Spot";
import { useEffect, useState } from "react";
import Country from "./Country";
import Banner from "../Banner/Banner";
import ExtraSection from "../../ExtraSection/ExtraSection";
import Extra from "../../ExtraSection/Extra";

const Home = () => {

    const [countries, setCountries] = useState([]);

    const spots = useLoaderData();
    const sixSpots = spots.slice(0, 6);

    useEffect(() => {
      fetch('https://spots-server.vercel.app/countries')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
    },[])

      console.log(countries)
    return (
       <>

<div className="p-2 mt-12 mb-24 rounded-3xl shadow-2xl w-full">
      <Banner></Banner>
       </div>

    <div className="grid lg:grid-cols-3 h-full md:grid-cols-2 w-full md:gap-8 space-y-8 md:space-y-0 p-6">
        {
            countries.map(country => <Country key={country._id} country={country} ></Country> )
        }
    </div>

    <ExtraSection></ExtraSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full md:gap-8 space-y-8 md:space-y-0 p-6">
            {
            sixSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot> )
            }
        </div>
      <Extra></Extra>
       </>
    );
};

export default Home;