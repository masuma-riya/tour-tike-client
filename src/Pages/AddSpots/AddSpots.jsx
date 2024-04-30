import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddSpots = () => {

    const {user} = useContext(AuthContext);
    console.log("User:", user);

    if (!user) {
        // Handle null user, such as redirecting to login or displaying a message
        return <div>Loading...</div>;
    }

    const { email, displayName, photoURL } = user;


const handleAddProduct = event => {
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

    const newSpot = {country, img, spotName, location, email,  
        username: displayName, image: photoURL, cost, description, travelTime, visitors, season}
        console.log("New Spot:", newSpot);

    // send data to server
    fetch('http://localhost:5000/addSpot', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newSpot)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'A new spot added Successfully',
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
  <form onSubmit={handleAddProduct}>
    <div className="flex gap-8 ">
      <div className="flex-1">

<label className="block mb-2 dark:text-white" htmlFor="country">Country Name</label>

    <select name="country" id="country"
    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
    type="text" placeholder="Select Country">

        <option value="Bangladesh">Bangladesh</option>
        <option value="Thailand">Thailand</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Cambodia">Cambodia</option>
</select>

<label className="block mt-5 mb-2 dark:text-white" htmlFor="location">Location
        </label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            placeholder="Enter Location"
            id="location"
            name="location"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="cost">Average Cost</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="number"
            placeholder="Enter Cost"
            id="cost"
            name="cost"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="describe">Short Description</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            placeholder="Write Description"
            id="describe"
            name="describe"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="visitors">Total Visitors</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="number"
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
            placeholder="Spot Name"
            id="spot"
            name="spot"/>

<label className="block mb-2 mt-4 dark:text-white" htmlFor="email">User Email
        </label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="email"
            readOnly
            defaultValue={user.email}
            id="email"
            name="email"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="name">User Name
    </label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                readOnly
                defaultValue={user.displayName}
                id="name"
                name="name"/>
<label className="block mt-4 mb-2 dark:text-white" htmlFor="travel">Travel Time</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Time of Travel"
                id="travel"
                name="travel"/>

<label className="block mt-4 mb-2 dark:text-white" htmlFor="season">Seasonality</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Season"
                id="season"
                name="season"/>
<label className="block mt-4 mb-2 dark:text-white" htmlFor="img">Photo</label>

    <input className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Photo URL"
                id="img"
                name="img"/>
            </div>
          </div>

          <div className="text-center">
          <label className="block mt-4 mb-2 dark:text-white" htmlFor="image">Image</label>

<input className="w-7/12 p-2 border rounded-md focus:outline-[#FF497C]"
            type="text"
            readOnly
            defaultValue={user.photoURL}
            id="image"
            name="image"/>
          </div>

    <input className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  
    bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Spot"
          />
        </form>
      </div>
    </div>
    );
};

export default AddSpots;