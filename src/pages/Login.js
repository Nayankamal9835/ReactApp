import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [password, setPassword] = useState(localStorage.getItem('password'))
  
  // const emailStored = localStorage.getItem('email')
  //   const passwordStored = localStorage.getItem('password')

  const {setIsLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    if(email==='' || password===''){
      toast.error("All fields are required")
      return
    } 

    // if(email !== emailStored || password !== passwordStored){
    //   toast.error("Invalid Email or password")
    //   return
    // }

    setIsLoggedIn(true)

    toast.success("Login successfully !")
    setTimeout(()=>{
      navigate('/')
    },3000)

    setEmail("")
    setPassword("")

  }

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>

          <form className='mt-4' onSubmit={login}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <button type="submit" className='button '>Login</button>
            <div className='mt-4'>
              <p>
                Don’t have an account?
                <span onClick={() => navigate("/register")}
                  style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>Register</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login