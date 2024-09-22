import React from 'react'
import AddTransport from './AddTransport'
import TransportCard from '../Layout/TransportCard'
import  '../css/Transport.css'
import img from '../Assets/bus_Picture/Ju_Micro1.jpg'
import img1 from '../Assets/bus_Picture/Ju_micro.jpg'
import img2 from '../Assets/bus_Picture/images (1).jpeg'
import img3 from '../Assets/bus_Picture/ju.jpeg'
import img4 from '../Assets/bus_Picture/Ju2.jpg'
import img5 from '../Assets/bus_Picture/ju3.jpg'
import img6 from '../Assets/bus_Picture/Ju_Ambulance.jpg'
import img7 from '../Assets/bus_Picture/Ju_Red.jpg'
import img8 from '../Assets/bus_Picture/Ju_teacherBus.jpg'
import img9 from '../Assets/bus_Picture/Ju_teacher1.jpg'
import img10 from '../Assets/bus_Picture/Ju_Teacher2.jpg'
import img11 from '../Assets/bus_Picture/Ju_Picup.jpg'
const Transport = () => {
  return (
    <>
      <h1>Transport Details : </h1> 
    <div className='transportHome'>
      {/* <h3>Transport</h3>
      <div>
        This is the Transport page.
      </div> */}
      <TransportCard img={img} header={'Micro Type-A'} content={'8' } category={' Ac/NonAc'} totalSeat={' 12'} available={' 7'}/>
      <TransportCard img={img6} header={'Ambulance'} content={'3' } category={' Ac/NonAc'} totalSeat={' 2'} available={' 2'}/>
      <TransportCard img={img1} header={'Micro Type-B'} content={'6' } category={' Ac/NonAc'} totalSeat={' 10'} available={' 5'}/>
      <TransportCard img={img7} header={'Double Dacker'} content={'8' } category={' NonAc'} totalSeat={' 100'} available={' 7'}/>
      <TransportCard img={img8} header={'Minibus Type-A'} content={'12' } category={' Ac/NonAc'} totalSeat={' 20'} available={' 12'}/>
      <TransportCard img={img9} header={'Minibus Type-B'} content={'8' } category={' Ac/NonAc'} totalSeat={' 16'} available={' 8'}/>
      <TransportCard img={img10} header={'Minibus Type-C'} content={'8' } category={' Ac/NonAc'} totalSeat={' 14'} available={' 7'}/>
      <TransportCard img={img11} header={'PickUp'} content={'4' } category={'NonAc'} totalSeat={' 10'} available={' 4'}/>
      <TransportCard img={img4} header={'Bus Type-C'} content={'10' } category={' Ac/NonAc'} totalSeat={' 35'} available={' 8'}/>
      <TransportCard img={img5} header={'Bus Type-D'} content={'8' } category={' NonAc'} totalSeat={' 30'} available={' 7'}/>
      <TransportCard img={img2} header={'Bus Type-A'} content={'9' } category={' Ac/NonAc'} totalSeat={' 45'} available={' 9'}/>
      <TransportCard img={img3} header={'Bus Type-B'} content={'8' } category={' Ac/NonAc'} totalSeat={' 50'} available={' 7'}/>
    </div>
    
    </>
  )
}

export default Transport
