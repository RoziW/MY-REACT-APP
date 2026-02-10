import { useState } from 'react';
import './App.css';

function App() {
  // State for the list of employees
  const [employees, setEmployees] = useState([]);

  // State for the individual form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'DevOps', // Default value
    role: ''
  });

  // Update state whenever an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add new employee to the list and clear the form
    setEmployees([...employees, { ...formData, id: Date.now() }]);
    setFormData({ name: '', email: '', department: 'DevOps', role: '' });
  }; 

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="employee-form">
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} required 
        />
        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleChange} required 
        />
        <select name="department" value={formData.department} onChange={handleChange}>
          <option value="DevOps">DevOps</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
        </select>
        <input 
          type="text" name="role" placeholder="Job Role" 
          value={formData.role} onChange={handleChange} required 
        />
        <button type="submit">Add Employee</button>
      </form>

      <hr />

      {/* Table Section */}
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;