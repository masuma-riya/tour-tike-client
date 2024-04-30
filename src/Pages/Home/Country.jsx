import { Link } from "react-router-dom";

const Country = ({country}) => {
    const { name, image, description } = country || {}
    return (
        <Link to={`/countries/${name}`}><div className="card h-full bg-base-100 shadow-xl">
        <figure><img className="h-72" src={image} alt="Shoes" /></figure>
        <div className="card-body">

 <button class="relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
  from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white 
  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          
<span class="relative w-full text-xl font-bold hover:font-semibold text-gray-800 px-5 py-2.5 transition-all ease-in duration-75 bg-white hover:text-white rounded-md group-hover:bg-opacity-0">{name}</span>

</button>
<p className="italic text-lg mt-2 text-slate-600">{description}</p>

        </div>
      </div></Link>
    );
};

export default Country;