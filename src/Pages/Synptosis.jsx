import { useOutletContext } from "react-router"

import sanitizeHtml from "sanitize-html";

export default function Synopsis(){
    
    const [ anime, recommendations ] = useOutletContext()
  
 
    
    return (
        <p className="detailed-synptosis">{sanitizeHtml(anime?.description, {
            allowedAttributes: [],
            allowedTags: []
        })}</p>
       
    )
}