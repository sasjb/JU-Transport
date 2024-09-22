import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>  <a href="#section1">Trip Applications</a></li>
        <li> <a href="#section2">Confirmed Trips</a></li>
        <li>  <a href="#section3">Discarded Trips</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
