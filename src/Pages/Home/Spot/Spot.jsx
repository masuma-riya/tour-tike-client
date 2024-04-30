import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { PiMoneyLight } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

const Spot = ({spot}) => {
    const {country, _id, img, description, spotName, location, cost, season} = spot
    return (
     <Fade>
       <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-64" src={img} alt="" />
      </a>
      <div className="p-5">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country}</h5>
          <h5 className="mb-2 text-xl mt-3 font-semibold tracking-tight text-gray-700 dark:text-white">Spot Name: {spotName}</h5>
       
 <div className="flex gap-1 mt-4 mb-2">
  <SlLocationPin className="text-2xl text-red-600"></SlLocationPin>
  <p className="text-xl">{location}</p>
 </div>

 <div className="flex gap-2 mt-4 mb-2">
  <PiMoneyLight className="text-2xl text-green-600"></PiMoneyLight>
  <p className="text-xl">{cost} Thousands</p>
 </div>

 <p className="text-xl font-bold mb-6 mt-3">Season: {season}</p>


        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Link to={`/spot-details/${_id}`}>  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         View Details
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button> </Link>
      </div>
    </div>
     </Fade>
    );
};

export default Spot;