import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    office: "",
    accountType: "",
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

  const handleShowTransportList = () => {
    navigate("/AdminTransportList");
  };

  return (
    <div className="search" >
      {/* <div className="form-searchBar"> */}
          <form onSubmit={handleSubmit} className="searchForm">
            <div className="form-group">
             
              <input
                type="text"
                placeholder="Name/Email"
                id="name"
                name="name"
                className="ab1"
                value={formData.index}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
            
              <input
                className="department"
                type="text"
                id="office"
                name="office"
                placeholder="Office/Department"
                value={formData.vehicleID}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
                Account Type
              <select id="account" className="abc">
                <option value="client">Client</option>
                <option value="driver">Driver</option>
               
              </select>
            </div>
      

            <button type="button" class="btn btn-primary" className="button" onClick={handleSubmit}>Search</button>

            {/* <button
              class="btn btn-primary "
             
            >
              Search
            </button> */}
          </form>
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
