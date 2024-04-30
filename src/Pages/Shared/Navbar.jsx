import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

  const handletoggle = (e) => {
    if(e.target.checked){
      setTheme("dark");
    }
      else{
        setTheme("light")
      }
    }


  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);

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
            showMenu ? "" : ""
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
            to="/myList"
          >
            My List
          </NavLink>

          <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handletoggle} type="checkbox" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

          {
    user ? ( <div className="relative"  onMouseEnter={() => setShowUsername(true)}
    onMouseLeave={() => setShowUsername(false)}>
    <img className="btn w-16 h-16 border-2 rounded-full border-blue-600 p-1" 
    src={user?.photoURL || "https://i.ibb.co/FBZQVTZ/defalt.jpg"} />

    <div  className={`absolute right-2 top-16 bg-yellow-100 text-black shadow-xl text-base font-bold italic rounded-3xl p-4 ${showUsername ? 'block' : 'hidden'}`}>
      
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