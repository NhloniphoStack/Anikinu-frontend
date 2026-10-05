import { use } from "react";
import { NavLink, Outlet } from "react-router";
import { useOutletContext } from "react-router";

export default function AnimeLayout(){
   const [anime, recommendations] = useOutletContext()
   
    const activeStyles = {
        textDecoration: 'none',
        color: 'cornflowerblue',
        borderBottom: '2px solid cornflowerblue',
        paddingBottom: '10px'
    }
    return(
        <>
        <section className="animeLayout">
        <NavLink to="synopsis" 
        style={({isActive}) => isActive ? activeStyles : null} end>
            Synposis
        </NavLink>
        {recommendations && 
        <NavLink
        style={({isActive}) => isActive ? activeStyles : null}
         to="details">Recommendations</NavLink>}
        </section>
        <div className="children-layout">
        <Outlet context={[anime, recommendations]}/>
        </div>
        </>
    )
}