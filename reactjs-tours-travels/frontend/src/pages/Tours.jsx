
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
import ootyImage from '../assets/images/ooty.jpg';
import yoga from '../assets/images/Isha.jpg';
import bhavani from '../assets/images/dam.jpg';
import siruvani from '../assets/images/siruvani.jpg';
import valparai from '../assets/images/valparai.jpg';
import noyyal from '../assets/images/noyyal.jpeg';
import monkey from '../assets/images/monkey.jpg';
import coimbatore from '../assets/images/city.jpg';
import perur from '../assets/images/temple.jpg';
import anamalai from '../assets/images/tiger.jpeg';
import kovai from '../assets/images/kovai.jpg';


import { useNavigate } from 'react-router-dom'
const Tours = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)
   const navigate = useNavigate();
   // const { data: tours, loading, error } = useFetch(`http:localhost:8000/api/v1/tours?page=${page}`)
   const { data: tourCount } = useFetch("http:localhost:8000/api/v1/tours/search/getTourCount")


   const tours = [
      {
          "name": "Ooty Hill Station Escape",
          "description": "Escape to the serene hill station of Ooty with lush greenery, cool climate, and beautiful lakes.",
          "price": 1599,
          "rating": 4.7,
          "image": ootyImage
        },
        {
          "name": "Isha Yoga Center & Adiyogi Statue",
          "description": "Visit the world-renowned Isha Yoga Center and marvel at the majestic Adiyogi statue.",
          "price": 999,
          "rating": 4.8,
          "image": yoga
        },
        {
          "name": "Bhavani Sagar Dam & River",
          "description": "Explore the beautiful Bhavani Sagar Dam and enjoy boating along the tranquil river.",
          "price": 1299,
          "rating": 4.6,
          "image": bhavani
        },
        {
          "name": "Siruvani Waterfalls & Dam",
          "description": "Discover the scenic beauty of Siruvani waterfalls, known for their serene surroundings and fresh waters.",
          "price": 1399,
          "rating": 4.7,
          "image": siruvani
        },
        {
          "name": "Valparai Tea Gardens Tour",
          "description": "Take a walk through the lush tea gardens of Valparai and experience the tranquility of this hill station.",
          "price": 1499,
          "rating": 4.6,
          "image": valparai
        },
        {
          "name": "Noyyal River Safari",
          "description": "Take a boat safari along the Noyyal River, exploring wildlife and the beautiful surroundings.",
          "price": 999,
          "rating": 4.5,
          "image": noyyal
        },
        {
          "name": "Monkey Falls Trekking",
          "description": "Enjoy a fun-filled trek through the Western Ghats to reach the famous Monkey Falls, known for its cool waters and lush greenery.",
          "price": 1199,
          "rating": 4.8,
          "image": monkey
        },
        {
          "name": "Coimbatore City Tour",
          "description": "Explore the historical and cultural landmarks of Coimbatore, including temples, museums, and vibrant local markets.",
          "price": 799,
          "rating": 4.7,
          "image": coimbatore
        },
        {
          "name": "Perur Pateeswarar Temple",
          "description": "Visit the iconic Perur Pateeswarar Temple, a fine example of Dravidian architecture, dedicated to Lord Shiva.",
          "price": 699,
          "rating": 4.9,
          "image": perur
         },
        {
          "name": "Anamalai Tiger Reserve Safari",
          "description": "Embark on an exciting wildlife safari at the Anamalai Tiger Reserve, home to tigers, elephants, and a variety of other animals.",
          "price": 1999,
          "rating": 4.8,
          "image": anamalai
        },
        {
          "name": "Kovai Kutralam Waterfalls",
          "description": "Visit the Kovai Kutralam Waterfalls, a peaceful and scenic spot perfect for a refreshing dip and relaxation.",
          "price": 1099,
          "rating": 4.7,
          "image":   kovai
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
