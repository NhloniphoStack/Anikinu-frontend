import { useState } from "react"
import { Link, Form } from "react-router"
import {useClickOutside} from '../hooks/useClickOutside.jsx'
export default function ReportBox(){
    const [showForm, setShowForm] = useState(false)
    function toggleForm(){
        setShowForm(prev => !prev)
    }

    function handleSubmit(formData){
       const issue = formData.get("report")
      
       if(!issue){
        
        return;
       }
       setShowForm(false)
    }

    const formRef = useClickOutside(() => {
        setShowForm(false)
    })
    return (
        
        <div className="summary-container">
                           <p>
                            Having any issues?
                           </p>
                           <div className="report-button-container">
                             <button 
                             onClick={toggleForm}
                            className="report-button">Report</button>
                           </div>

                           {showForm && <div ref={formRef} className="report-box">
                                  <p>Report an issue?</p>
                                  <p>What went wrong</p>
                                  <form action={handleSubmit}>
                                  <div className="report-form">
                                   
                                    <label>
                                         <input 
                                         value={`Something is not working`}
                                         name="report" type="radio" />
                                        Something is not working
                                    </label>

                                    
                                    <label>
                                        <input value={`incorrect information`} 
                                        name="report" type="radio" />
                                        I found incorrect information
                                    </label>

                                   
                                    <label>
                                         <input
                                         value={`virtual problem`} 
                                          name="report" type="radio" />
                                        Something looks wrong
                                    </label>

                                    
                                    <label>
                                        <input 
                                        value={`Perfomance issue`} 
                                        name="report" type="radio" />
                                        Performance / loading issue
                                    </label>

                                   
                                    <label>
                                         <input 
                                         value={`Unspecified issue`} 
                                         name="report" type="radio" />
                                        Other
                                    </label>
                                    <p>Tell us more</p>
                                    <textarea name="report"/>
                                    <div className="report-buttons">
                                        <button onClick={toggleForm}>Cancel</button>
                                        <button>Submit</button>
                                    </div>
                                  </div>
                                  </form>
                           </div>}
                            
        </div>
    )
}