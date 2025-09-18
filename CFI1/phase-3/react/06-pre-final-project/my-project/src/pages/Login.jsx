import "../styles/Login.css"
import { Link } from "react-router-dom";

function Login(){
    return <div className="container">
        <center>
            <h1>Login Page</h1>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="Email"> Email Address</label>
                    <input type="Email" name="Email" className="form-group" placeholder="Enter Your Email Here" />
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" className="form-group" placeholder="Enter Your Password" />
                    <label htmlFor="Name">Full Name</label>
                    <input type="Name" name="Name" className="form-group" placeholder="Enter Your Name" />
                </div>
                <input type='submit' className='btn btn-dark' value="Login"/>
            </form>
        </center>
    </div>
    
}

        

export default Login;