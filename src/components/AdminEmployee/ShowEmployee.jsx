import React, { useState } from 'react';
import './ShowEmployee.css';

function ShowEmployee() {
  const [tableData, setTableData] = useState([
    {
      index: 145,
      vehicleID: 'Abdur Rahim',
      type: '01614587965',
      model: 'rahim@juniv.edu',
      regNumber: 'CSE',
      seats: 'Client',
      rentPerHour: 'Islam Nagar, SAvar, Dhaka',
      availabilityStatus: 'Male',
      driver: 'O+',
    },
    {
      index: 150,
      vehicleID: 'Motiur Rahman',
      type: '01815835497',
      model: 'motiur@juniv.edu',
      regNumber: 'JU Transport',
      seats: 'Driver',
      rentPerHour: 'Ambagan, Savar, Dhaka',
      availabilityStatus: 'Male',
      driver: 'B+',
    },
  ]);

  const handleDelete = (index) => {
    const updatedTableData = tableData.filter((data) => data.index !== index);
    setTableData(updatedTableData);
  };

  return (
    <div className='table-container-show'  > {/* Add a top margin */}
      <table >
        <thead>
          <tr >
          <th>Employee ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Office/Department</th>
            <th>Account Type</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className={index % 2 === 0 ? 'table-success' : 'table-info'}>
              <td>{data.index}</td>
              <td>{data.vehicleID}</td>
              <td>{data.type}</td>
              <td>{data.model}</td>
              <td>{data.regNumber}</td>
              <td>{data.seats}</td>
              <td>{data.rentPerHour} </td>
              <td>{data.availabilityStatus}</td>
              <td>{data.driver}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(data.index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowEmployee;