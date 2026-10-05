import { useNavigation, Form, useActionData } from "react-router"


export default function NewLogin(){
    const error = useActionData()
    const status = useNavigation()?.state
    return (
        <section className="container">
       <div className="login-layout">
        <div className="login-instructions">
             <h1 className="login-heading">Welcome back</h1>
             <p className="sub-heading">
            Log in to see your list
            and pick up where you left off
            </p>
        </div>
        <Form method="POST" replace>
        <div className="login-form">
             <h2 className='mobile-header'>Welcome back</h2>
        <p className='mobile-header'>Login to see your list</p>
            <label className="username">Username</label>
        <input name="username"
         placeholder="Choose your username" required/>

          <label>Password</label>
        <input type="password"
        name="password"
         placeholder="Enter your password" required/>
         {error &&
            <div className="error-container">
                <p>{error.error}</p>
            </div>}
         
         <div className="new-login-button">
            <button disabled={status !== 'idle'}>{status !== 'idle' ? 'Loggin in....' : 'Login'}</button>
        </div>

        </div>
        </Form>
       </div>
        </section>
    )
}