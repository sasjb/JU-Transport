import React, { useState } from 'react';
import '../css/AddTransport.css';
import { useNavigate } from 'react-router-dom';

const AddTransport = () => {
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
    alert("Successfully Added ...");

  }

  const handleShowTransportList = () => {
    navigate('./AdminTransportList');
  }

  return (
    <div className='addTransportParent'>
    <div className="form-container-add-transport">
     
      <h2>Add Transport</h2>
      <div className="a1">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="index" className="fr"><b>Index:</b></label>
          <input
            type="text"
            id="index"
            name="index"
            className='ab'
            value={formData.index}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleID" className="fr"><b>Vehicle ID:</b></label>
          <input
            type="text"
            id="vehicleID"
            name="vehicleID"
            className='ab'
            value={formData.vehicleID}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type" className="fr"><b>Type:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Select</option>
              <option value="bus">Bus</option>
              <option value="minibus">Mini Bus</option>
               <option value="microbus">Micro Bus</option>
              <option value="ambulance">Ambulance</option>
  </select>
        </div>

        <div className="form-group">
          <label htmlFor="model" className="fr"><b>Model:</b></label>
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
          <label htmlFor="regNumber" className="fr"> <b>Registration Number:</b></label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            className='ab'
            value={formData.regNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="seats" className="fr"> <b>Number of Seats:</b></label>
          <input
            type="text"
            id="seats"
            name="seats"
            className='ab'
            value={formData.seats}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rentPerHour" className="fr"><b>Rent Per Hour:</b></label>
          <input
            type="text"
            id="rentPerHour"
            name="rentPerHour"
            className='ab'
            value={formData.rentPerHour}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="availabilityStatus" className="fr"><b>Availability Status:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Select</option>
              <option value="bus">Available</option>
              <option value="minibus">Unavailable</option>
               
  </select>
        </div>

        <div className="form-group">
          <label htmlFor="driver" className="fr"><b>Driver:</b></label>
          <input
            type="text"
            id="driver"
            name="driver"
            className='ab'
            value={formData.driver}
            onChange={handleChange}
          />
        </div>

        <button className= "btn btn-success button-larg" onClick={handleAddButton}>
          Add
        </button>

      </form>
      
      </div>
    </div>
    <div className='bt'>
    <button type="button" class="btn btn-primary button-large" onClick={handleShowTransportList}>
          Show Transport List  
        </button>
    </div>

    </div>
  );
};

export default AddTransport;
