import React from 'react'

const User = ({handleLogout,user}) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100 w-100'>
        <div className="card" style={{width: "500px"}}>
            <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{width: "185px"}} alt="logo" />
                <h4 className="mt-1 mb-2 pb-1">Welcome {user.firstName} {user.lastName} </h4>            
            </div>

            <div className="text-center bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={user.image}  style={{width: "200px", height:"200px"}} className="img-fluid rounded-circle" alt="profile" />
                <h6 className="card-title mt-3">{user.firstName} {user.lastName} </h6>
                <p className="card-text"> <strong>Email:</strong> {user.email}</p>
                <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
            </div>

            <div className="card-body text-center">
                <p className="card-text"><strong>Department:</strong> Management</p>
                <hr />
                <button onClick={handleLogout} className="btn btn-primary ">Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default User