import React, { useState } from 'react';
import '../css/TransportReservationForm.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TransportReservationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    index: '',
    vehicleID: '',
    type: '',
    model: '',
    regNumber: '',
    seats: '',
    rentPerHour: '',
    availabilityStatus: '',
    driver: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAddButton = (e) =>{
    alert("Successfully Applied. We will confirm your trip within office time..");

  }
  
  const [reservationData, setReservationData] = useState({
    resrevationDate: "",
    fromTime: "",
    toTime: "",
    destination: "",
    reason: "",
    transportType: "micro",
    reservationType: "one-way",
  });

  const handleShowTransportList = () => {
    navigate('/AdminTransportList');
  }
  

  return (
    <div className='main'>
      
    <div className="form-container-reserve">  
      <h2>Reserve Transport</h2>
      <div className="a1">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="index" className="fr"><b>Reservation Date:</b></label>
          <input          
            className='ab'
            type="date"
            name="reservationDate"
            value={reservationData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleID" className="fr"><b>From Time:</b></label>
          <input
            
            className='ab'
            type="time"
            name="fromTime"
            value={reservationData.fromTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type" className="fr"><b>To Time:</b></label>
          <input
          className='ab'
            type="time"
            name="toTime"
            value={reservationData.toTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="model" className="fr"><b>Destinition:</b></label>
          <input
            type="text"
            id="model"
            name="model"
            className='ab'
            value={formData.model}
            onChange={handleChange}
          />
        </div>      
<div className="form-group">
          <label htmlFor="availabilityStatus" className="fr"><b>Reservation Type:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Official</option>           
              <option value="minibus">Unofficial</option>
               
  </select>
        </div>

        <div className="form-group">
          <label htmlFor="availabilityStatus" className="fr"><b>Transport Type:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Micro</option>
              <option value="bus">Bus</option>
              <option value="minibus">Mini Bus</option>
              <option value="minibus">Truck</option>
              <option value="minibus">Ambulance</option>
               
  </select>
        </div>
        <button className= "btn btn-success button-larg" onClick={handleAddButton}>
          Apply For Reserve
        </button>

      </form>
      </div>
      </div>
    </div>
);
};
export default TransportReservationForm;