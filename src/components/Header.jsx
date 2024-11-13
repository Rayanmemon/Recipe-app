import React from 'react'
import './Header.css'
import logo from '../assets/logo2.png'
import search from '../assets/search.svg'
import { NavLink } from 'react-router-dom'
import menu from '../assets/menu.svg'
import { auth,db } from '../Backend/firebaseConfig'
import { getAuth,signOut } from 'firebase/auth'
import { useState,useEffect } from 'react'
import { doc,getDoc } from 'firebase/firestore'

const Header = () => {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const showSidebar=()=> {
    const sidebar=document.querySelector('.sidebar');
    if (sidebar){
      sidebar.style.display='flex';
    }
  }
  const hideSidebar=()=> {
    const sidebar=document.querySelector('.sidebar');
    if (sidebar){
      sidebar.style.display='none';
    }
  }



  return (

    <div className='navbar'>
      <div className="logo-box"><img src={logo} alt='logo' className='logo'/></div>
      {/* <div className="search-box">
            <input type='text' placeholder='Search..'></input> 
            <img src={search} alt='search icon'/>   
      </div>  */}
      <ul className='main-nav'>
        <NavLink to={"/Home"} /* className={({isActive, isPending})=> isPending?"pending" : isActive?"active":""} */> <li className="hideonmobile">Home</li></NavLink> 
        <NavLink to={"/Recipe"}><li className="hideonmobile">Recipes</li></NavLink>
        <NavLink to={"/Add"}><li className="hideonmobile">Add recipe</li></NavLink>
        <li className="hideonmobile">Feedback</li>
        <li onClick={handleLogout} className="hideonmobile">Logout</li>
        <li onClick={showSidebar} className="menu-button"><img src={menu}></img></li>

      </ul>
      <ul className='sidebar'>
        <li onClick={hideSidebar}>hide</li>
        <NavLink to={"/Home"}><li>Home</li></NavLink>
        <NavLink to={"/Recipe"}><li>Recipes</li></NavLink>
        <li>Feedback</li>
        <NavLink to={"/Add"}><li>Add Recipe</li></NavLink>
        <NavLink to={"/"}><li>Logout</li></NavLink> 
      </ul>
    </div>



  )
}

export default Header
