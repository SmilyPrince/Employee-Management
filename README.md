# Employee-Management
A responsive and user-friendly admin dashboard built with ReactJS for managing employee records. This frontend consumes static JSON data to simulate real-time employee operations like viewing profiles, managing departments, and editing details. Ideal for prototyping and frontend logic showcase.

## Features
- Routing with `react-router-dom`
- Organized components structure with `Header`, `Hero`, and `Sidebar`
- Example routes:
  ```jsx
  <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='AddEmployee' element={<AddEmployee/>}/>
    <Route path='EditEmployee' element={<EditEmployee/>}/>
    <Route path='ViewEmployee' element={<ViewEmployee/>}/>
    <Route path='ViewEmployeeByID' element={<ViewEmployeeByID/>}/>
  </Routes>
  ```
