import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const nav = useNavigate()
  const navigate = useNavigate()

  const store = (e) => {
    e.preventDefault()
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("contact", contact)
    localStorage.setItem("password", password)

    if (name === '' || email === '' || contact === '' || password === '' || cpassword === '') {
      toast.error("All fields are required")
      return
    }
    if (password !== cpassword) {
      toast.error("Password should be same")
      return
    }
    toast.success("Registered Successfully !")

    setName("")
    setEmail("")
    setContact("")
    setPassword("")
    setCpassword("")

    setTimeout(() => {
      nav("/login");
    }, 3000);
  }

  return (
    <>
      <div className="container-fluid  register-container">
        <div className=" col-md-4">

          <div className="card p-4 shadow-lg text-center register-card">
            <h2 className="mb-2 ">Create Account</h2>
            <p className="mb-4 text-muted">Register to get started</p>

            <form onSubmit={store}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3 p-2 register-input" placeholder="Full Name" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3 p-2 register-input" placeholder="Email" />
              <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control mb-3 p-2 register-input" placeholder="Mobile" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3 p-2 register-input" placeholder="Password" />
              <input type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} className="form-control mb-3 p-2 register-input" placeholder="Confirm Password" />

              <button className="btn  w-100 register-button">Register</button>
              <div className="text-center mt-4">
                <p>
                  Already have an account?
                  <span onClick={() => navigate('/login')} style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>Login</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register