import { useState } from "react"
import { addListItem } from "../api/auth/addListItem.js"
import tick from '../assets/tick.svg'
import {removeListItem} from '../api/auth/removeListItem.js'

import { Link, useOutletContext } from "react-router"


export default function ListButton({anime, listEntries, mylist}){
    const [showList, setShowList] = useState(false)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)
    const [remove, setRemove] = useState(false)
    console.log(remove)
    const [myList, setMyList] = useState(mylist || [])
     const user = useOutletContext()
   

    function handleVisibility(){
        setShowList(prev => !prev)
    }

    async function handleAdd(status){
     console.log(status)
    if(!user.user?.username){
        console.log('not authorized')
        setSuccess(false)
        return;
    }
     try{
        setLoading(true)
         const attempt = await addListItem({
        animeID: anime?.id,
        status: status?.value
     })
       setLoading(false)
       setSuccess(attempt)
     
      setTimeout(() => {
        setShowList(false)
        setSuccess(null)
         setMyList(["item"])
      }, 2400)

     }catch(error){
        setSuccess(null)
        console.log(error)
     }
    
     
    }

    async function handleRemove(){
        //remove logic
        try{
            setLoading(true)
            const attempt = await removeListItem(anime?.id)
            setLoading(false)
            setMyList([])
            setRemove(false)
        }catch(error){
            console.log(error)

        }
        
    }

    function toggleRemove(){
        setRemove(prev => !prev)
        
    }

   
    return (
        <div className="list-container">

           {myList.length === 0 && <button 
            onClick={handleVisibility}
             className="add-to-list">
                +Add to List
            </button>}
           {myList.length > 0 && <button 
              onClick={toggleRemove}
             className="in-list">
                <img src={tick} />
                in your list
            </button>}

            {showList && 
            <div className="list-menu-container">
               {!success && user?.user?.username &&
               <ul className="list-menu-list">
                 {listEntries.map((list, i) => 
                    <li key={i}>
                        <button onClick={() => handleAdd(list)}>{list.type}</button>
                    </li>
                 )}
                </ul>}
                {success &&
                <div className="successful-container">
                  <img src={tick} />
                  <p>Anime added to List</p>
                </div>}

                

                {!user?.user?.username &&
                <div className="warning-message">
                    <h4>Please login to use feature</h4>
                    <Link to="/login">login</Link>
                </div>}
                
            </div>}


            {remove && 
                <div className="remove-container">
                    {loading && 
                    <div className="remove-loader">
                        <div className="loader"></div>
                    </div>}
                    <button
                    onClick={handleRemove}
                     className="item-remove-button">
                        Remove
                    </button>
                </div>}
        </div>
        
    )
}