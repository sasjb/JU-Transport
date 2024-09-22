import React, { useState } from 'react';

function ClientTrips() {
    const [tableData, setTableData] = useState([
        {
          index: 1,
          tripID: 'T001',
          tripType: 'Personal',
          date: '2023-11-15',
          time: '10:00 AM',
          destination: 'Airport',
          transport: 'Micro',
          regNo: 'ABC-1234',
          driverName: 'Kamal',
          phone: '123-456-7890',
          rent: 500,
        },
        {
          index: 2,
          tripID: 'T002',
          tripType: 'Personal',
          date: '2023-11-16',
          time: '02:30 PM',
          destination: 'Hotel',
          transport: 'Micro',
          regNo: 'XYZ-5678',
          driverName: 'Jamal',
          phone: '987-654-3210',
          rent: 700,
        },
      ]);
    
      const handleDelete = (index) => {
        const updatedTableData = tableData.filter((data) => data.index !== index);
        setTableData(updatedTableData);
      };
    
      return (
        <div style={{ marginTop: '70px' }}> {/* Add a top margin */}
          <div> <h3 style={{ justifyContent: 'center' , marginBottom: '50px' }}>My Trip Details</h3> </div>
          <div style={{marginLeft: '20px', marginRight: '20px'}}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="table-primary">
                  <th>Index</th>
                  <th>Trip ID</th>
                  <th>Trip Type</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Destination</th>
                  <th>Transport</th>
                  <th>Reg. No.</th>
                  <th>Driver Name</th>
                  <th>Driver Phone</th>
                  <th>Rent (Taka)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'table-success' : 'table-info'}>
                    <td>{data.index}</td>
                    <td>{data.tripID}</td>
                    <td>{data.tripType}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.destination}</td>
                    <td>{data.transport}</td>
                    <td>{data.regNo}</td>
                    <td>{data.driverName}</td>
                    <td>{data.phone}</td>
                    <td>{data.rent}</td>
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
        </div>
      );
}

export default ClientTrips
