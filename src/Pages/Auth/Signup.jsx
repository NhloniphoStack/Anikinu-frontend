import { Form, useActionData, useNavigation } from 'react-router'
import tick from '../../assets/pink-tink.svg'

export default function SignUp(){
   const error = useActionData()
   const state = useNavigation().state
    return(
        <section className="container">
        <div className="signup-layout">
        <div className="signup-instructions">
          <h1>Create your account</h1>
           <p className="sub-heading">
            Save anime to your list and
            track what you want to watch
            </p>

            <ul className='site-functions'>
                <li>
                    <img src={tick} />
                    <span>Build your personal list</span>
                </li>
                <li>
                    <img src={tick} />
                    <span>Set a status for every title</span>
                </li>

                <li>
                    <img src={tick} />
                    <span>Rate and organize your favourites</span>
                </li>
            </ul>
        </div>
        <Form method='POST' replace>
        <div className="signup-form">
            <h2 className='mobile-header'>Create your account</h2>
        <p className='mobile-header'>Save anime and track your status</p>
        
        <label className="username">Username</label>
        <input name="username"
         placeholder="Choose a username" />

        <label>Email</label>
        <input type="email"
        name="email"
         placeholder="your@example.com" />

          <label>Password</label>
        <input type="password"
        name="password"
         placeholder="Create a password"/>
         <div className="terms-accept">
         
         <label >
            <input type='checkbox' />
            I accept the terms and conditions
         </label>

         </div >
         
         {error &&
            <div className="error-container">
                <p>{error.error}</p>
            </div>}
        <div className="create-button">
            <button>{state !== 'idle' ? 'Creating...':'Create account'}</button>
        </div>
        </div>
        </Form>
        </div>
        
        
        </section>

        
    )

}