import React from 'react'
import { Link } from 'react-router-dom'
const TransportCard = (props) => {
  return (
    <div class="card" style={{width: '18rem'}}>
    <img
        src={props.img}
        className="card-img-top"
        alt="Card Image"
      />
    <div class="card-body">
      <h5 class="card-title">{props.header}</h5>
      <p class="card-text"><b>Category = </b>{props.category}</p>
      <p class="card-text"><b>Total Seat = </b>{props.totalSeat}</p>
      <p class="card-text"><b>Total Transport = </b>{props.content}</p>
      <p class="card-text"><b>Available Transport = </b>{props.available}</p>
      <Link to='/reserve'>
      <a href="#" class="btn btn-primary">Reserve Now</a>
      </Link>
    </div>
  </div>
  )
}

export default TransportCard
