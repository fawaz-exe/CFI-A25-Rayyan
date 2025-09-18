import '../styles/Register.css'
import { Link } from "react-router-dom";

function Register(){
    return <div className="container">
        <center>
            <h1>REGISTER FORM</h1>
            <form onSubmit={onsubmit}>
                <div className="register-form">
                    <label htmlFor="Fullname">Full Name</label>
                    <input type="name" name="name" className="register-form" placeholder="Enter Your Full Name" />
                    <label htmlFor="Email">Email Address</label>
                    <input type="Email" name="Email" className="register-form" placeholder="Enter Your Email Address" />
                    <label htmlFor="Password">Password</label>
                    <input type="Password" id="pwd" name="password" className="register-form" placeholder="Enter Your Password" />
                    <label htmlFor="Password">Confirm Password</label>
                    <input type="password" id="pwd" name="password" className="register-form" placeholder="Confirm Your Password"/>
                </div>
                <input type="Register" className='btn btn-dark' value='Register' />
            </form>
        </center>
    </div>
}

export default Register;