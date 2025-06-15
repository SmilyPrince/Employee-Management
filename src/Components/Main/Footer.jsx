import React from 'react'
import '../Css/Footer.css'

const Footer = () => {

  const year = new Date().getFullYear()

  return (

    <footer>
      <div className="footer-content">
        <h3>Employee Management Portal</h3>
        <p>Copyright &copy; {year} Employee Management Portal. All rights reserved.</p>
      </div>
      <div className="footer-bottom">
        <p>Designed by SathishKumar S</p>
      </div>
    </footer>
  )
}

export default Footer