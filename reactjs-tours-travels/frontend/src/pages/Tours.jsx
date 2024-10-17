import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
// import tourData from '../assets/data/tours'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

import { useNavigate } from 'react-router-dom'
const Tours = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)
   const navigate = useNavigate();
   // const { data: tours, loading, error } = useFetch(`http:localhost:8000/api/v1/tours?page=${page}`)
   const { data: tourCount } = useFetch("http:localhost:8000/api/v1/tours/search/getTourCount")


   const tours = [
      {
        "name": "Tropical Paradise",
        "description": "Experience the ultimate tropical getaway with pristine beaches and crystal-clear waters.",
        "price": 1999,
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
      },
      {
        "name": "Mountain Adventure",
        "description": "Enjoy a thrilling mountain adventure with hiking, climbing, and breathtaking views.",
        "price": 1599,
        "rating": 4.6,
        "image": "https://media.istockphoto.com/id/1652166108/photo/aerial-view-of-woman-standing-on-top-of-the-mountain-ridge-augstmatthorn.webp?a=1&b=1&s=612x612&w=0&k=20&c=3TTjPVQq8o2TXwUMEgJ1FqYSW0pWUCv0ETrx4Sja1tw="
      },
      {
        "name": "City Explorer",
        "description": "Discover the culture and history of the world's greatest cities with guided tours and more.",
        "price": 999,
        "rating": 4.7,
        "image": "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "name": "Desert Safari",
        "description": "Take an adventurous desert safari with camel rides, sandboarding, and traditional cuisine.",
        "price": 1299,
        "rating": 4.5,
        "image": "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "name": "Rainforest Expedition",
        "description": "Explore the heart of the rainforest and witness exotic wildlife and lush greenery.",
        "price": 1799,
        "rating": 4.9,
        "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGZvcmVzdHxlbnwwfHx8fDE2MzY3MzI1NzY&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        "name": "Island Hopping Adventure",
        "description": "Visit multiple breathtaking islands and enjoy snorkeling, sunbathing, and tropical vibes.",
        "price": 1499,
        "rating": 4.7,
        "image": "https://media.istockphoto.com/id/1284527176/photo/woman-swims-around-coral-reef.webp?a=1&b=1&s=612x612&w=0&k=20&c=N1uTZkgC4lU9445TT-tWAEvIh5nu6y2qJZ2L2tSSECE="
      },
      {
        "name": "Skiing in the Alps",
        "description": "Hit the slopes of the beautiful Alps and enjoy world-class skiing and après-ski activities.",
        "price": 2599,
        "rating": 4.8,
        "image": "https://media.istockphoto.com/id/598215726/photo/skier-skiing-downhill-against-matterhorn-peak-in-switzerland.webp?a=1&b=1&s=612x612&w=0&k=20&c=FkdC8eAT5O0L_saMSU3V5vnIn5U5l5hwZKs0KDZQ4mE="
      },
      {
        "name": "Safari in Kenya",
        "description": "Embark on a thrilling wildlife safari in Kenya's famous national parks and reserves.",
        "price": 2999,
        "rating": 4.9,
        "image": "https://media.istockphoto.com/id/2111967560/photo/masai-giraffe-in-front-of-kilimanjaro-mountain-in-amboseli-national-park-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=8eNpVCWqfus9_Gv8otkUk1yRqDoyUBnwocauJ3JJ6OE="
      },
      {
        "name": "Northern Lights Adventure",
        "description": "Witness the magical Northern Lights in the Arctic Circle with cozy cabins and snow activities.",
        "price": 2299,
        "rating": 5.0,
        "image": "https://media.istockphoto.com/id/525381711/photo/hamnoy-nothern-lights.webp?a=1&b=1&s=612x612&w=0&k=20&c=7chOgmz3poB1c_r9zaeCdJifN07yHfO_DZz9W1vP-xU="
      },
      {
        "name": "Wine Tasting Tour",
        "description": "Enjoy a relaxing tour of renowned vineyards and taste exquisite wines in scenic settings.",
        "price": 1199,
        "rating": 4.6,
        "image": "https://media.istockphoto.com/id/1041495484/photo/glass-of-red-wine-and-vineyards.webp?a=1&b=1&s=612x612&w=0&k=20&c=iDDCv8_kr9D52RQh_Ay2E9RBZjKTmOJvmPynkrrKGUI="
      }
    ];
    
    
    

   useEffect(() => {
      const pages = Math.ceil(tourCount / 8)
      setPageCount(pages)
      window.scrollTo(0,0)
   }, [page, tourCount, tours])

   return (
      <>
         <CommonSection title={"All Tours"} />
         <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Container>
               {/* {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        tours?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}> <TourCard tour={tour} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               } */}


<div className = "body-tour">
 {tours.map((tour,index)=>(<div className="tour-card" key = {index} >
      <img src={tour.image} alt={tour.name} className="tour-card-image" />
      <div className="tour-card-content">
        <h2 className="tour-card-title">{tour.name}</h2>
        <p className="tour-card-description">{tour.description}</p>
        <div className="tour-card-info">
          <p className="tour-card-price">Price: Rs.{tour.price}</p>
          <p className="tour-card-rating">Rating: {tour.rating} / 5</p>
        </div>
        <button className="tour-card-button" onClick={()=>navigate("/booking-confirmation")}>Book Now</button>
      </div>
    </div>))}
    </div>
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default Tours