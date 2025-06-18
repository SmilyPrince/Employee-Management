import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from "../../assets/NavLogo.png"
import '../Css/Header.css'

const Header = () => {
  const username = sessionStorage.getItem('username')
  const password = sessionStorage.getItem('password')
  const navigate = useNavigate()
  
  const logout = () => {
    sessionStorage.removeItem('username')  
    sessionStorage.removeItem('password')
    navigate('/')
  }
  return (
    <>
      <div className="header" id='header'>
        <nav style={{ height: '50px', width: '100%' }} className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <Link to={"/"}>
              <img style={{ height: '60px', width: '150px', alignItems: "center", mixBlendMode: 'multiply' }} src={logo} alt="Portal logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            {username && password && (
              <>
            <li className="nav-item">
              <Link to={"/ViewEmployee"} className="nav-link">View All Employees</Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">Add Employee</Link>
            </li>
            <li className="nav-item">
              <a to='logout' className="nav-link" onClick={logout}>Log out</a>
            </li>
            </>
            )}
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">Login</Link>
            </li>
          </ul>
              <form className="d-flex p-1" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              <button className="btn btn-outline-info" type="submit">Search</button>
        </div>
      </div>
        </nav>  
      </div>
    </>
  )
}

export default Header


// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../Css/Header.css';

// const Header = () => {
//   const username = sessionStorage.getItem('username');
//   const password = sessionStorage.getItem('password');
//   const navigate = useNavigate();
  
//   const logout = () => {
//     sessionStorage.removeItem('username');
//     sessionStorage.removeItem('password');
//     navigate('/');
//   };

//   return (
//     <div className="header" id='header'>
//       <nav style={{height: '50px', width: '100%'}} className="navbar navbar-expand-lg bg-body-primary">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             <img 
//               style={{
//                 height: '60px', 
//                 width: '150px', 
//                 alignItems: 'center', 
//                 mixBlendMode: 'multiply'
//               }} 
//               src="src/assets/NavLogo.png" 
//               alt="Logo" 
//             />
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Home</Link>
//               </li>
//               {username && password && (
//                 <>
//                   <li className="nav-item">
//                     <Link to="ViewEmployee" className="nav-link">View All Employees</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="register" className="nav-link">Add Employee</Link>
//                   </li>
//                   <li className="nav-item">
//                     <button className="nav-link btn btn-link" onClick={logout}>Log out</button>
//                   </li>
//                 </>
//               )}
//               <li className="nav-item">
//                 <Link to="login" className="nav-link">Login</Link>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;