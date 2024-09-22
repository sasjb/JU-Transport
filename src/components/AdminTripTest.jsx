import React, { useState } from 'react';
import '../App.css';

function AdminTripTest() {
  const [tableData, setTableData] = useState([
    {
      index: 1,
      reqID: 'REQ001',
      destination: 'Airport',
      transportType: 'Micro',
      reqType: 'Personal',
      clientName: 'John Doe',
      reason: 'Vacation',
      date: '2023-11-15',
      fromTime: '10:00 AM',
      toTime: '12:00 PM',
      status: 'Pending',
    },
    {
      index: 2,
      reqID: 'REQ002',
      destination: 'Office',
      transportType: 'Minibus',
      reqType: 'Official',
      clientName: 'Jane Smith',
      reason: 'Meeting',
      date: '2023-11-16',
      fromTime: '02:30 PM',
      toTime: '04:30 PM',
      status: 'Pending',
    },

    {
        index: 3,
        reqID: 'REQ003',
        destination: 'Hospital',
        transportType: 'Ambulance',
        reqType: 'Official',
        clientName: 'David Johnson',
        reason: 'Medical appointment',
        date: '2023-11-17',
        fromTime: '09:00 AM',
        toTime: '10:30 AM',
        status: 'Pending',
      },
      {
        index: 4,
        reqID: 'REQ004',
        destination: 'Hotel',
        transportType: 'Bus',
        reqType: 'Personal',
        clientName: 'Emily Brown',
        reason: 'Vacation',
        date: '2023-11-18',
        fromTime: '11:00 AM',
        toTime: '01:00 PM',
        status: 'Pending',
      },
      {
        index: 5,
        reqID: 'REQ005',
        destination: 'Warehouse',
        transportType: 'Micro',
        reqType: 'Official',
        clientName: 'Michael Wilson',
        reason: 'Inventory check',
        date: '2023-11-19',
        fromTime: '08:30 AM',
        toTime: '11:30 AM',
        status: 'Pending',
      },
    // Add more table data as needed
]);

  const handleConfirm = (reqID) => {
    // Find the record to confirm
    const recordToConfirm = tableData.find((data) => data.reqID === reqID);

    // Update the status to 'Confirmed'
    recordToConfirm.status = 'Confirmed';

    // Remove the record from its current position
    const updatedTableData = tableData.filter((data) => data.reqID !== reqID);

    // Push the confirmed record to the end of the table
    setTableData([...updatedTableData, recordToConfirm]);
  };

  const handleDiscard = (reqID) => {
    // Find the record to discard
    const recordToDiscard = tableData.find((data) => data.reqID === reqID);

    // Update the status to 'Discarded'
    recordToDiscard.status = 'Discarded';

    // Remove the record from its current position
    const updatedTableData = tableData.filter((data) => data.reqID !== reqID);

    // Push the discarded record to the end of the table
    setTableData([...updatedTableData, recordToDiscard]);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        {/* Sidebar content goes here */}
        {/* You can add buttons or links to navigate to different components */}
      </div>
      <div className="table-container">
        <table className="table table-striped table-bordered table-responsive" style={{ marginTop: '100px', marginLeft: '10px', marginRight: '10px'} }>
          <thead className="table-primary">
            <tr>
              <th>Index</th>
              <th>Requisition ID</th>
              <th>Destination</th>
              <th>Transport Type</th>
              <th>Requisition Type</th>
              <th>Client Name</th>
              <th>Reason</th>
              <th>Date</th>
              <th>From Time</th>
              <th>To Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={data.status === 'Confirmed' ? 'table-success' : data.status === 'Discarded' ? 'table-danger' : index % 2 === 0 ? 'table-success' : 'table-info'}
              >
                <td>{data.index}</td>
                <td>{data.reqID}</td>
                <td>{data.destination}</td>
                <td>{data.transportType}</td>
                <td>{data.reqType}</td>
                <td>{data.clientName}</td>
                <td>{data.reason}</td>
                <td>{data.date}</td>
                <td>{data.fromTime}</td>
                <td>{data.toTime}</td>
                <td>{data.status}</td>
                <td>
                  {data.status === 'Pending' && (
                    <button
                      className="btn btn-success"
                      onClick={() => handleConfirm(data.reqID)}
                    >
                      Confirm
                    </button>
                  )}
                  {data.status === 'Pending' && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDiscard(data.reqID)}
                    >
                      Discard
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTripTest;
