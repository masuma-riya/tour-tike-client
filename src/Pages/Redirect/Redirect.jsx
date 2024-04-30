import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spot from "../Home/Spot/Spot";

const Redirect = () => {

    const {country} = useParams();
   
    const [touristSpot, setTouristSpot] = useState([]);
    const [ loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
               const response = await fetch(`https://spots-server.vercel.app/allSpot/countries/${country}`) 
               const data = await response.json();
               console.log(data);
               setTouristSpot(data)
               setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [country]);

    if(loading){
      return <h1>Loading...</h1>
    }
   
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full md:gap-8 space-y-8 md:space-y-0 p-6">
            {
                touristSpot.map(spot => <Spot key={spot._id} spot={spot}></Spot> )
            }
        </div>
    );
};

export default Redirect;