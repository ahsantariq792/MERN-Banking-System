// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import {NavLink} from "react-router-dom"

// const Navbar = () => {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link active" aria-current="page" to="/userlist">User List</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link active" aria-current="page" to="/transferlist">Transaction</NavLink>
//             </li>
            
            
//           </ul>
          
//         </div>
//       </div>
//     </nav>
//     )
// }

// export default Navbar;


import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom"
<link rel="stylesheet" href="index.css" />


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbarcustom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" id="aa" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" id="bb" aria-current="page" to="/userlist">User List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" id="cc" aria-current="page" to="/transferlist">Transaction</NavLink>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
    )
}

export default Navbar;