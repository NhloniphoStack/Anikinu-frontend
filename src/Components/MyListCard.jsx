import { useState } from "react"
import CustomSelect from "./CustomSelect.jsx"
import { editList } from "../api/auth/editList.js"
import LoadingBox from "./LoadingBox.jsx"
import { useRevalidator, useSearchParams, Link } from "react-router"
import { removeListItem } from "../api/auth/removeListItem.js"
export default function MyListCard({anime, color}){
    console.log(anime)
   const [edit, setEdit] = useState(false)
   const [deleted, setDeleted] = useState(false)
  const [selected, setSelected] = useState("")
  const [loading, setLoading] = useState(false)
  const revalidator = useRevalidator()
  const [searchParams, setSearchParams] = useSearchParams()
async function handleStatus(){
    
    console.log(selected)
      try{
        setEdit(false)
        setLoading(true)
        
        
        const attempt = await editList({
            status: selected,
            animeid: anime?.anime_id
        })
        
      
        
       if(attempt?.message){
        setTimeout(() => {
             setLoading(prev => !prev)
        }, 2000)
                
       }
        
        revalidator.revalidate()
      }catch(error){
        console.log(error)
      }
}

    function handleEdit(){
        setEdit(prev => !prev)
    }

   async function handleRemove(){

    try{
         setDeleted(true)
      const attempt = await removeListItem(anime?.anime_id)
       
       setTimeout(() => {
        setDeleted(false)
       }, 2200)

       revalidator.revalidate()
    }catch(error){
      console.log(error)
    }
      
    }
       return(
        
        <div className="mylist-card">
          <Link to={`/${anime.anime_id}/synopsis`}>
         <img className="mylist-card-img" src={anime?.cover_image} />
         </Link>
         <div className="mylist-card-content">
         <p className="mylist-card-title">
            {anime.title_english ?? anime?.title_romaji}
        </p>
        

       {loading && <LoadingBox state={!loading}/>}

       {deleted && 
       <div className="deleted-loader-container">
        <div className="loader"></div>
        </div>}

       {edit && <div className="mylist-select">
           <CustomSelect onSelect={(v) => setSelected(v)}/>
        </div>}

        {!edit && 
        
        <div className="card-crud">
           <button onClick={handleEdit} className="edit-card-button">Edit</button>
            <button onClick={handleRemove} className="remove-card-button">Remove</button>
         </div>
         
         }

         

         {edit && <div className="card-crud">
           <button onClick={handleEdit} className="cancel-card-button">Cancel</button>
            <button onClick={handleStatus} className="save-card-button">Save</button>
         </div>}
         </div> 
         <div className="card-stat">
             <p style={{color: color}} className="card-status">
               {anime?.status}
             </p>
         </div>
        </div>
       )
}