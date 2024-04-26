import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {

  const [showUsername, setShowUsername] = useState(false); 
  const [showMenu, setShowMenu] = useState(false);
  const {user, logOut} = useContext(AuthContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
   logOut()
   .then()
   .catch()
  }

  return (
   
    <>
    {/* component */}
    <div className="flex">
      {/* Nav */}
      <div className="flex flex-wrap justify-between w-screen h-20 text-white bg-gray-600 md:flex-nowrap">
        {/* LOGO */}
        <div className="z-30 flex items-center h-full pl-3 space-x-3 bg-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <p className="text-2xl text-">KAKI HOME</p>
        </div>
        {/* MenuButton */}
        <button
          className="z-30 flex items-center justify-end flex-grow pr-3 bg-gray-600 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Menu */}
        <div
          className={`${
            showMenu ? "" : "hidden"
          } flex flex-col items-stretch w-screen text-xl text-center transform bg-gray-600 md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end  md:mx-4 md:gap-10 md:pr-3`}
        >
          <NavLink
            className={({isActive}) => isActive? 'lg:h-10 text-xl font-extrabold text-yellow-400 leading-10' : 'lg:h-10 text-white font-extrabold leading-10 text-xl'} 
           
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) => isActive? 'lg:h-10 text-xl font-extrabold text-yellow-400 leading-10' : 'lg:h-10 text-white font-extrabold leading-10 text-xl'} 
           
            to="/update-user"
          >
            Update Profile
          </NavLink>

          <NavLink
        className={({isActive}) => isActive? 'lg:h-10 text-xl font-extrabold text-yellow-400 leading-10' : 'lg:h-10 text-white font-extrabold leading-10 text-xl'} 
            to="/all-tourists-spot"
          >
            All Spots
          </NavLink>

          <NavLink
             className={({isActive}) => isActive? 'lg:h-10 text-xl font-extrabold text-yellow-400 leading-10' : 'lg:h-10 text-white font-extrabold leading-10'} 
            to="/add-tourists-spot"
          >
            Add Spots
          </NavLink>

          <NavLink
            className={({isActive}) => isActive? 'lg:h-10 text-xl font-extrabold text-yellow-400 leading-10' : 'lg:h-10 text-white font-extrabold leading-10'} 
            to="/my-list"
          >
            My List
          </NavLink>

          {
    user ? ( <div className="relative"  onMouseEnter={() => setShowUsername(true)}
    onMouseLeave={() => setShowUsername(false)}>
    <img className="btn border-2 rounded-full border-blue-600 p-1" 
    src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"} />

    <div  className={`absolute right-2 top-10 bg-yellow-100 text-black shadow-xl text-base font-bold italic rounded-3xl p-4 ${showUsername ? 'block' : 'hidden'}`}>
      
      {user.displayName} 
      <button
                className="mt-2 px-4 py-2 font-bold text-base rounded-xl  bg-blue-700 ml-2 text-white"
                onClick={handleSignOut}
              >
                Logout
              </button>

      </div>
</div> ) : ( <>
  <div className="flex justify-around gap-6 md:mb-0 mb-4">
              <NavLink className={({isActive}) => isActive ? 'h-10 leading-10 bg-red-600 font-bold rounded-full w-24' : 'h-10 leading-10 bg-slate-100 text-black font-extrabold rounded-full w-24'} to='/login'>Login</NavLink>
              <NavLink className={({isActive}) => isActive ? 'h-10 leading-10 bg-red-600 font-bold rounded-full w-24' : 'h-10 leading-10 bg-slate-100 text-black font-extrabold rounded-full w-24'} to='/sign-up'>Sign Up</NavLink>
              
            </div>
</>
  )}

            
          
        </div>
      </div>
    </div>
  </>

  );
};

export default Navbar;