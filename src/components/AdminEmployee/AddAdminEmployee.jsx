import React, { useState } from 'react';
import './AddAdminEmployee.css';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShowEmployee from '../AdminEmployee/ShowEmployee'

const AddAdminEmployee = () => {
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
    navigate('/AdminTransportList');
  }

  return (
    <div className='main'>
      {/* <h1 className="text-3xl font-bold underline mt-4"></h1> */}
    <div className="form-container-employee">
     
      <h2>Add Client/Driver</h2>
      <div className="a1">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="index" className="fr"><b>Employee ID:</b></label>
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
          <label htmlFor="vehicleID" className="fr"><b>Name:</b></label>
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
          <label htmlFor="model" className="fr"><b>Phone:</b></label>
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
          <label htmlFor="model" className="fr"><b>Email:</b></label>
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
          <label htmlFor="regNumber" className="fr"> <b>Designation:</b></label>
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
          <label htmlFor="seats" className="fr"> <b>Office:</b></label>
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
          <label htmlFor="availabilityStatus" className="fr"><b>Account Type:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Client</option>
              <option value="bus">Driver</option>
              {/* <option value="minibus">Unavailable</option> */}
               
  </select>
        </div>

        <div className="form-group">
          <label htmlFor="driver" className="fr"><b>Address:</b></label>
          <input
            type="text"
            id="driver"
            name="driver"
            className='ab'
            value={formData.driver}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type" className="fr"><b>Gender:</b></label>
          <select id="vehicle-type" className="abc">
           <option value="all">Male</option>
              <option value="bus">Female</option>
              {/* <option value="minibus">Mini Bus</option> */}
               {/* <option value="microbus">Micro Bus</option> */}
              {/* <option value="ambulance">Ambulance</option> */}
  </select>
        </div>
        <div className="form-group">
          <label htmlFor="rentPerHour" className="fr"><b>Blood Group:</b></label>
          <input
            type="text"
            id="rentPerHour"
            name="rentPerHour"
            className='ab'
            value={formData.rentPerHour}
            onChange={handleChange}
          />
        </div>

        <button className= "btn btn-success button-large" onClick={handleAddButton}>
          Add
        </button>

      </form>
      
      </div>
    </div>
    {/* <div className='bt'>
    <button type="button" class="btn btn-primary button-large" onClick={handleShowTransportList}>
          Show Transport List
        </button>
    </div> */}

<SearchBar/>
<ShowEmployee/>

    </div>
  );
};

export default AddAdminEmployee;
