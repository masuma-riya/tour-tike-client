import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-3 mt-8 gap-3 text-center px-2 mx-auto">
            {
                touristSpot?.map(spot => (
                    <div key={spot._id} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                      <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />
                    </div>
                    <div className="p-6">
                      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {spot.country}
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                      </p>
                      <h1 className="text-5xl">{spot.cost}</h1>
                    </div>
                    <div className="p-6 pt-0">
                    <Link to={`/spot-details/${spot._id}`}> <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                        View Dwtails
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