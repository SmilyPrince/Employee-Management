import React from 'react'
import Header from './Main/Header'
import Footer from './Main/Footer'
import './Css/Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home">

    <section id="benefits">
        <h2 className='btn-outline-success'>Benefits of an Employee Management Portal</h2>
        <ul>
            <li><strong>Centralized Data Management:</strong> Reduce redundancy by maintaining a single source of truth for all employee data.</li>
            <li><strong>Increased Efficiency:</strong> Automate routine tasks to save time and reduce manual errors.</li>
            <li><strong>Improved Decision-Making:</strong> Access real-time insights and reports to make informed decisions.</li>
            <li><strong>Enhanced Employee Experience:</strong> Provide employees with self-service options to view, update details, or delete.</li>
            <li><strong>Scalability:</strong> Adaptable to the growing needs of the organization.</li>
        </ul>
    </section>

    <section id="crud">
        <h2 className='btn-outline-success'>Development of an Employee Management Portal: A CRUD Approach</h2>
        <ol>
            <li><h3>Create</h3></li>
        <p>Build forms for adding new employee records, uploading documents, and assigning roles. Use validation to ensure data accuracy and consistency.</p>
            <li><h3>Read</h3></li>
        <p>Design dashboards and reports for viewing employee data.</p>
            <li><h3>Update</h3></li>
        <p>Allow admins and managers to modify employee information, update roles, or change payroll details.</p>
            <li><h3>Delete</h3></li>
        <p>Provide options for removing outdated records while maintaining compliance with data retention policies.</p>
        </ol>



    </section>

    <section id="stack">
        <h2 className='btn-outline-success'>Technology Stack</h2>
        <ul>
            <li><strong>HTML</strong></li>
            <li><strong>CSS</strong></li>
            <li><strong>Bootstrap</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>ReactJs</strong></li>
        </ul>
    </section>

    <section id="conclusion">
        <h2 className='btn-outline-success'>Conclusion</h2>
        <p>An Employee Management Portal is more than just a software tool—it’s a transformative solution that fosters productivity, efficiency, and employee satisfaction. By adopting a robust CRUD web application for employee management, organizations can stay ahead in the competitive business landscape while ensuring a seamless experience for their workforce.</p>
    </section>
    </div>

    <Footer />
    </>
  )
}

export default Home