import { Await, useLoaderData, useOutletContext } from "react-router"

export default function UserProfile(){
    const data = useLoaderData()?.data
    
     function cleanDate(date){
        if(!date){
            return null
        }
      const instance = new Date(date)

      return instance.toLocaleDateString("en-US", {day:"numeric", month: "short", year: "numeric",})
    }
    return(
        <section className="container">
      
        <Await resolve={data}>
            {(user) => {
               

                return(
                    <div className="profile">
                    <div className="profile-layout">
                    <div className="profile-icon-container">
                    <img className="user-profile" src={user?.profile_images} />

                    <div>
                        <p className="user-name">{user?.username}</p>
                        <p className="joined-date">Joined {cleanDate(user?.created_at)}</p>
                    </div>
                    </div>
                    <div>
                        <button className="edit-profile-button">
                            Edit profile
                        </button>
                    </div>
                    </div>

                    <div>
                        <p>
                           
                        </p>
                    </div>
                    </div>
                )
            }}
        </Await>
        </section>
    )
}