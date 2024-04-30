import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { PiMoneyLight } from "react-icons/pi";


const AllSpots = () => {

  const [touristSpot, setTouristSpot] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [ filter, setFilter] = useState('desc');

  
  useEffect(() => {
    const fetchData = async() => {
        setLoading(true);
        try {
const response = await fetch(`http://localhost:5000/allSpot/?cost=${filter}`) 
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
}, [filter]);

if(loading){
  return <h1>Loading...</h1>
}

    return (
       <>
       <details className="dropdown">
  <summary className="m-1 btn">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <button onClick={() => setFilter('asc')} className="btn">Ascending</button>
    <button onClick={() => setFilter('desc')} className="btn">Decending</button>
  </ul>
</details>

<div className="grid lg:grid-cols-3 md:grid-cols-2 mx-8 gap-5">
  {
     touristSpot?.map(spot => (
      <div key={spot._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={spot.img} alt="" />
      </a>
      <div className="p-5">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{spot.country}</h5>
          <h5 className="mb-2 text-xl mt-3 font-semibold tracking-tight text-gray-700 dark:text-white">Spot Name: {spot.spotName}</h5>
       
 <div className="flex gap-1 mt-4 mb-2">
  <SlLocationPin className="text-2xl text-red-600"></SlLocationPin>
  <p className="text-xl">{spot.location}</p>
 </div>

 <div className="flex gap-2 mt-4 mb-2">
  <PiMoneyLight className="text-2xl text-green-600"></PiMoneyLight>
  <p className="text-xl">{spot.cost} Thousands</p>
 </div>

 <p className="text-xl font-bold mb-6 mt-3">Season: {spot.season}</p>


        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{spot.description}</p>
        <Link to={`/spot-details/${spot._id}`}> <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                        View Details
                      </button></Link>
      </div>
    </div>
     ))
  }
</div>
      
       </>
    );
};

export default AllSpots;

