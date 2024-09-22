import React from 'react'


const AdminTransportShowButton = () => {
  return (
    <div className='transport-type' style= {{margin: 80 }}>
      <div className="show">
      <label for="vehicle-type"><b>Select Transport Type:</b></label>
  <select id="vehicle-type">
    <option value="all">Show All</option>
    <option value="bus">Bus</option>
    <option value="minibus">Mini Bus</option>
    <option value="microbus">Micro Bus</option>
    <option value="ambulance">Ambulance</option>
  </select>
      </div>
    </div>
  )
}

export default AdminTransportShowButton

