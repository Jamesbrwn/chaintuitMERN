import React from 'react'

function Login() {
  return (
    <div className="formContainer">
         <div>
            <h1> Sign Up</h1>
            </div>
            <div className="body">
                <p> Enter your email to sign up.</p>
                <input type="email" placeholder="Email..."/>
                <button> Login </button>
            </div>
        </div>
  )
}

export default Login