import React, { useState, useEffect } from 'react';

import './Sidebar.css'; // Import your custom CSS for the sidebar
import Sidebar from './Sidebar';
function App() {
    const [pendingTableData, setPendingTableData] = useState([
        {
            reqID: 'REQ001',
            destination: 'Airport',
            transportType: 'Micro',
            reqType: 'Personal',
            clientName: 'Mr. Zaman',
            reason: 'Vacation',
            date: '2023-11-15',
            fromTime: '10:00 AM',
            toTime: '12:00 PM',
            status: 'Pending',
            bill: '300',
        },
        {
            reqID: 'REQ002',
            destination: 'Dhaka University',
            transportType: 'Minibus',
            reqType: 'Official',
            clientName: 'Mr. Sojib',
            reason: 'Meeting',
            date: '2023-11-16',
            fromTime: '02:30 PM',
            toTime: '04:30 PM',
            status: 'Pending',
            bill: '300',
        },

        {
            index: 3,
            reqID: 'REQ003',
            destination: 'BIRDEM Hospital',
            transportType: 'Ambulance',
            reqType: 'Personal',
            clientName: 'Mr. Salam',
            reason: 'Medical appointment',
            date: '2023-11-17',
            fromTime: '09:00 AM',
            toTime: '10:30 AM',
            status: 'Pending',
            bill: '600',
          },
          {
            index: 4,
            reqID: 'REQ004',
            destination: 'Badda',
            transportType: 'Bus',
            reqType: 'Personal',
            clientName: 'Kamal Chowdhury',
            reason: 'Vacation',
            date: '2023-11-18',
            fromTime: '11:00 AM',
            toTime: '01:00 PM',
            status: 'Pending',
            bill: '200',
          },
          {
            index: 5,
            reqID: 'REQ005',
            destination: 'Gazipur',
            transportType: 'Micro',
            reqType: 'Official',
            clientName: 'Mrs. Kanchon',
            reason: 'Inventory check',
            date: '2023-11-19',
            fromTime: '08:30 AM',
            toTime: '11:30 AM',
            status: 'Pending',
            bill: '400',
          },
    
        // Add more table data as needed
    ]);

    const [confirmedTableData, setConfirmedTableData] = useState([]);
    const [discardedTableData, setDiscardedTableData] = useState([]);

    const handleConfirm = (reqID) => {
        // Find the record to confirm
        const recordToConfirm = pendingTableData.find((data) => data.reqID === reqID);

        // Update the status to 'Confirmed'
        recordToConfirm.status = 'Confirmed';

        // Remove the record from the pending table
        const updatedPendingTableData = pendingTableData.filter((data) => data.reqID !== reqID);

        // Update the index for confirmed record
        recordToConfirm.index = confirmedTableData.length + 1;

        // Add the confirmed record to the confirmed records table
        setConfirmedTableData([...confirmedTableData, recordToConfirm]);

        // Update the state of the pending table
        setPendingTableData(updatedPendingTableData);
    };

    const handleDiscard = (reqID) => {
        // Find the record to discard
        const recordToDiscard = pendingTableData.find((data) => data.reqID === reqID);

        // Update the status to 'Discarded'
        recordToDiscard.status = 'Discarded';

        // Remove the record from the pending table
        const updatedPendingTableData = pendingTableData.filter((data) => data.reqID !== reqID);

        // Update the index for discarded record
        recordToDiscard.index = discardedTableData.length + 1;

        // Add the discarded record to the discarded records table
        setDiscardedTableData([...discardedTableData, recordToDiscard]);

        // Update the state of the pending table
        setPendingTableData(updatedPendingTableData);
    };
    return (
        <div className="app-container">
            <Sidebar />
            <div id="section1" className="table-container">
                <h2>Trip Applications</h2>
                <table className="table table-striped table-bordered table-responsive" style={{ marginTop: '20px', marginLeft: '10px', marginRight: '30px' }}>
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
                            <th width="200px">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingTableData.map((data, index) => (
                            <tr
                                key={data.reqID}
                                className="table-info"
                            >
                                <td>{index + 1}</td>
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
            <div id="section2" className="table-container">
                <h2>Confirmed Trips</h2>
                <table className="table table-striped table-bordered table-responsive" style={{ margin: '10px' }}>
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
                            <th>Bill(Taka)</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {confirmedTableData.map((data) => (
                            <tr key={data.reqID} className="table-success">
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
                                <td>{data.bill}</td>
                                <td>{data.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>   <button id="colorButton" style={{marginLeft: '900px'}}>Download Bill Statement</button> </div>
            <div id="section3" className="table-container">
                <h2>Discarded Trips</h2>
                <table className="table table-striped table-bordered table-responsive" style={{ margin: '10px' }}>
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
                        </tr>
                    </thead>
                    <tbody>
                        {discardedTableData.map((data) => (
                            <tr key={data.reqID} className="table-danger">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default App;
