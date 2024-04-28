import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdatMyList = () => {

    const myLists = useLoaderData();
    const { _id, spotName, location, cost, description, travelTime, visitors, season, img} = myLists;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const country = form.country.value;
        const spotName = form.spot.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const description = form.describe.value;
        const travelTime = form.travel.value;
        const visitors = form.visitors.value;
        const season = form.season.value;
        const img = form.img.value;
    
        const updateSpot = {country, spotName, location, cost, description, travelTime, visitors, season, img }
            console.log("New Spot:", updateSpot);
    
        // send data to server
        fetch(`http://localhost:5000/allSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if( data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'A spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
        .catch(error => {
            console.error(error);
        });
      
    }    

    return (
        <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">

        {/* Heading */}
    <div className="mt-5 mb-8">
       <p className="text-center text-3xl font-semibold">
          <span className="mr-3 text-[#FF497C]">
            <i className="bx bxs-alarm-add"></i></span>

    <span className="dark:text-white">
        <span className="text-[#FF497C]">
            {/* {update ? "Update " : "Add "} */}</span>
               Add Your Spot</span></p> </div>

        {/* form */}
  <form onSubmit={handleUpdateProduct}>
    <div className="flex gap-8 ">
      <div className="flex-1">

<label className="block mb-2 dark:text-white" htmlFor="country">Country Name</label>

    <select name="country" id="country"
    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
    type="text" placeholder="Select Country">

        <option value="Bangladesh">Bangladesh</option>
        <option value="Thailand">Thailand</option>
        <option value=" Indonesia">Indonesia</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Cambodia">Cambodia</option>
</select>

<label className="block mt-5 mb-2 dark:text-white" htmlFor="location">Location
        </label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            defaultValue={location}
            placeholder="Enter Location"
            id="location"
            name="location"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="cost">Average Cost</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="number"
            placeholder="Enter Cost"
            defaultValue={cost}
            id="cost"
            name="cost"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="describe">Short Description</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            defaultValue={ description}
            placeholder="Write Description"
            id="describe"
            name="describe"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="visitors">Total Visitors</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="number"
            defaultValue={visitors}
            placeholder="Total Visitors"
            id="visitors"
            name="visitors"/>
            </div>

  {/* Right side */}
    <div className="flex-1">
    <label className="block mb-2 dark:text-white" htmlFor="spot">Tourists Spot Name
       </label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            defaultValue={spotName}
            placeholder="Spot Name"
            id="spot"
            name="spot"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="travel">Travel Time</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                defaultValue={ travelTime}
                placeholder="Time of Travel"
                id="travel"
                name="travel"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="season">Seasonality</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                defaultValue={season}
                placeholder="Enter Season"
                id="season"
                name="season"/>
            </div>
          </div>

          <div className="text-center">
          <label className="block mt-4 mb-2 dark:text-white" htmlFor="img">Photo</label>

<input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            defaultValue={img}
            placeholder="Photo URL"
            id="img"
            name="img"/>
          </div>

    <input className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  
    bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Spot"
          />
        </form>
      </div>
    </div>
    );
};

export default UpdatMyList;