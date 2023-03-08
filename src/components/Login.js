import React, { useState } from 'react'

const Login = ({handleLogin,message}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    
    <section className="h-100 w-100 gradient-form" style={{backgroundColor: "#eee"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">

                  <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{width: "185px"}} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                        <form>
                          <div className="form-outline mb-4">
                            <input onChange={(e) => setUsername(e.target.value)} value={username} className="form-control"
                              placeholder="Username" />                  
                          </div>

                          <div className="form-outline mb-4">
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="form-control" />                   
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button onClick={() => handleLogin(username,password)} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                              in</button>
                          </div>

                          <p className='text-danger text-center text-bold'>{message}</p>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Welcome to AdressBook</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login