import { Outlet, useLoaderData, useSearchParams } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect, useState, createContext } from "react";
import { getUser } from "../api/auth/getUser.js";



export default function Layout(){
   const [scrollValue, setScrollValue] = useState(0)
 
  const user = useLoaderData()
 
   
   
   
    function handleScroll(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTo({top: 0, behavior: "smooth"})
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setScrollValue(Math?.ceil(window.scrollY))
            
        })

        return () => removeEventListener("scroll", () => {
            setScrollValue(Math?.ceil(window.scrollY))
            
        })
    })

   
    return (
        <>
       
        <Header user={user}/>
        <Outlet context={user}/>
        
       { scrollValue > 20 &&
        <button className="scroll-top-button" onClick={handleScroll}>Top</button>}
        <Footer />
        </>
    )
}