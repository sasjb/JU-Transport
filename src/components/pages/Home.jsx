import React from 'react'
import "../css/Home.css";
import imag_icon from './../Assets/bus_Picture/_68b433e7-7d85-468e-b722-c0c5013ac373.jpeg'
import image1 from './../Assets/bus_Picture/ju.jpeg'
import ContactForm from './ContactForm';
const Home = () => {
  return (
    <div className='home'>
      <header className='home-header'>
        <div className='home-description'>
          <b><h2 className='head'>Welcome to our transport requisition system homepage!</h2> </b>
          <div className='write-home'>
            This is system allows you to request and manage
            transportation for various purposes. Whether you need a ride to work,
            a delivery service, or any other transportation needs, we've got you covered.
          </div>
        </div>
        <div className='image'>
          <img
            src={imag_icon}
            alt="Transport"
            width="400"
          />
        </div>
      </header>
      <div className='home-about'>
        <div className='image'>
          <img
            src={image1}
            alt="Transport"
            width="400"
          />
        </div>
        <div className='write-about' id="contact">
          <h1>About Us</h1>
          <p>
            The Jahangirnagar University Transport Requisition Website is a sophisticated and robust platform that has revolutionized the way transportation services are managed and utilized by the Transport office of JU. This comprehensive system offers a wide array of options for reserving vehicles, catering to various transportation needs within the university. Employees can seamlessly reserve buses for group outings, microbuses for smaller gatherings, ambulances for medical emergencies, and pickups for specific tasks, all from the comfort of their computers or mobile devices.
          </p></div>

      </div>
      <div className='contactForm'>
        <div>
          <h1>Contact Us</h1>
          <p> You can contact with us - </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home
