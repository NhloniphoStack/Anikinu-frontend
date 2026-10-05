import { NavLink, Outlet } from "react-router"

export default function AdminLayout(){
    const activeStyles = {
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#373273',
        paddingBottom: '10px',
        borderRadius: '10px',
        maxWidth: "100%"
    }
    return(
        <div className="admin-grid-layout">

        <div className="admin-panel">
            <h5>ADMIN PANEL</h5>
            <div className="admin-options">
            <NavLink to="add"  style={({isActive}) => isActive ? activeStyles : null}>Changelog</NavLink>
            <NavLink to="entries"  style={({isActive}) => isActive ? activeStyles : null}>Manage Entries</NavLink>
          
            </div>
        </div>
        <div className="admin-children-container">
           <Outlet />
        </div>
        </div>
    )
}