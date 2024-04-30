import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const [lists, setLists] = useState([]);
    useEffect(() => {
    fetch(`https://spots-server.vercel.app/myList/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setLists(data);
    });
    },[user]);

    const handleDelete = (id) => {
  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
        
            fetch(`https://spots-server.vercel.app/allSpot/${id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              setLists(lists.filter(spot => spot._id !== id));
              if(data.deletedCount>0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
               
              }
            })
          }
        });
  
      }  

    return (
      
      <table className="table-auto w-full">
                <thead>
                    <tr className="text-xl">
                        <th className="px-4 py-2"></th> 
                        <th className="px-4 py-2">Country Name</th> 
                        <th className="px-4 py-2">Spot Name</th> 
                        <th className="px-4 py-2">Location</th> 
                        <th className="px-4 py-2">Description</th> 
                        <th className="px-4 py-2">Season</th> 
                        <th className="px-4 py-2">Update</th> 
                        <th className="px-4 py-2">Delete</th> 
                         {/* Add this column for the button */}
                    </tr>
                </thead> 
                <tbody className="text-xl">
                    {lists.map((list, index) => (
    <tr key={list._id}>
        <td className="border px-4 py-4">{index + 1}</td>
        <td className="border px-4 py-2">{list.country}</td>
        <td className="border px-4 py-2">{list.spotName}</td>
        <td className="border px-4 py-2">{list.location}</td>
        <td className="border px-4 py-2">{list.description}</td>
        <td className="border px-4 py-2">{list.season}</td>
                            
        <td className="border px-4 py-2">
      <NavLink className="btn btn-primary" to={`/updateSpot/${list._id}`}>Update</NavLink>
      </td>
    
    <td className="border px-4 py-2">
      <button onClick={() => handleDelete(list._id)} className="btn btn-ghost bg-slate-500 hover:bg-slate-500 text-black text-xl">Delete</button>
    </td>
                        </tr>
                    ))}
                </tbody>
            </table>

   
      
    );
};

export default MyList;