import { Form, useActionData, useNavigation } from "react-router";
import dragon from '../../assets/dragon.gif'

export default function Login(){
    const error = useActionData()
    const status = useNavigation()?.state
    return (
        <section className="container">
        <div className="form-layout">
        <div className="art-image-container">
         <img className="gif-image" src={dragon} />
        </div>
        <Form method="POST" replace>
            <div className="form-container">
                <h2>Welcome back</h2>
                <p className="reminder">Please enter your details</p>
             <label htmlFor="username">Username</label>
             <input 
             name="username" 
             placeholder="username" 
             id="username"/>

             <label htmlFor="password">Password</label>
             <input 
             type="password"
             name="password" 
             placeholder="password" 
             id="password"/>
            </div> 
            {error &&
            <div className="error-container">
                <p>{error.error}</p>
            </div>}
            <div className="login-button-container">
                <button disabled={status !== 'idle'}  className="login-button">{status !== 'idle' ? 'Loggin in....' : 'Login'}</button>
            </div>
        </Form>
         </div>
        </section>
    )
}