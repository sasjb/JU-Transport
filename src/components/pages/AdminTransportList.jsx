import React from 'react';
import '../css/AdminTransportList.css';
const AdminTransportList = () => {
  const vehicles = [
    {
      index: 1,
      vehicleID: 'VH001',
      type: 'Car',
      model: 'Sedan',
      regNumber: 'ABC123',
      seats: 5,
      rentPerHour: 100,
      availabilityStatus: 'Available',
      driver: 'John Doe',
    },
    {
      index: 2,
      vehicleID: 'VH002',
      type: 'Van',
      model: 'Minivan',
      regNumber: 'XYZ456',
      seats: 7,
      rentPerHour: 300,
      availabilityStatus: 'Not Available',
      driver: 'Jane Smith',
    },
  ];

  return (
    <div className="table-container">
      <h2>Transport Information</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Transport ID</th>
            <th>Type</th>
            <th>Model</th>
            <th>Registration Number</th>
            <th>Number of Seats</th>
            <th>Rent Per Hour</th>
            <th>Availability Status</th>
            <th>Driver</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.index}</td>
              <td>{vehicle.vehicleID}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.regNumber}</td>
              <td>{vehicle.seats}</td>
              <td>{vehicle.rentPerHour} Taka</td>
              <td>{vehicle.availabilityStatus}</td>
              <td>{vehicle.driver}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransportList;
