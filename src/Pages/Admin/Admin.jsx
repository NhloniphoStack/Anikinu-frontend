import { Form } from "react-router";
import Markdown from "react-markdown";
import { useState } from "react";

export default function Admin(){
    const [content, setContent] = useState('')

    function handleContent(e){
      const { value } = e.target;
      setContent(value)
    }
    return(
        <section className="container">
            
            <Form method="POST" replace>
                 <div className="admin-grid">
               
                <div className="changelog-form">
                     <div>
                       <h4>✨New ChangeLog Entry</h4>
                       <p>
                        Share what's new, whats fixed and what's cooking in
                        Anikinu.
                       </p>
                    </div>
                    <label htmlFor="title">Title</label>
                    <input 
                    placeholder="e.g Improved dashboard performance"
                     name="title" 
                     id="title" required/>


                      <label htmlFor="version">Version</label>
                    <input 
                    placeholder="e.g 1.2.3"
                     name="version" 
                     id="version" required/>
                     
                      <label htmlFor="content">{`Body (markdown)`}</label>
                    <textarea 
                    onInput={handleContent}
                    placeholder="## Whats new"
                     name="content" 
                     id="content" required/>
                     <button className="publish-button">Publish</button>
                </div>
                 <div className="preview-container">
                <h4>Preview</h4>
                <p>
                    This shows how your
                    changelog entry will look
                    on the public page
                </p>
                <div className="preview-markdown">
                     
                     <Markdown>{content}</Markdown>

                </div>
            </div>
                 </div>
            </Form>
           
            
        </section>
    )
}