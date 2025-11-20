import React from 'react'
import "../App.css";
import Review from '../components/Review';
import Classcard from '../components/Classcard';
import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <div className='bg-dark'>
     <div style={{width:'100%',height:'100vh',backgroundImage:"url('https://cdn.prod.website-files.com/6361dc271a3e49d685fe418b/669fa8eef3a749957251ca9d_Untitled%20design%20-%202024-07-23T085818.147.png')",backgroundPosition:'top',backgroundSize:'cover'}} 
      className='container-fluid row align-items-start justify-content-start pl-5'>
          <div className='col-md-4'>
            <h1  style={{color:'orange',fontSize:'140px'}} className='head p-5  mt-5'>Fitness Pro</h1>
            <button onClick={() => {
            setTimeout(() => {
            document.getElementById("fitnessclass")?.scrollIntoView({
            behavior: "smooth"
           })
    }, 100);
  }}  className='bg-dark text-warning border rounded border-warning  p-3 ms-5 '>Available Classes</button>
            </div>
           
      </div>
       <div id='aboutus' style={{backgroundColor:'orange'}} className="text-center mb-5 d-flex justify-content-center align-items-center flex-column ">
              <h1 className='mt-3'>About Us</h1>
              <em className='fw-bold '>" Our Fitness Class Booking Website helps users discover fitness classes, learn  <br /> about experienced trainers, and manage bookings easily. "</em>
        <div  style={{
        position: "absolute",
        bottom: "-500px",
        left: "40%",
        transform: "translateX(-40%)",
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "15px",
        width: "50%",
        color: "#ffc107",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)", zIndex: 1
      }}  className='bg-light text-warning border shadow-lg w-25 my-5 p-5'>
        <p>Our platform is designed to help users find the right fitness sessions, learn about trainers, explore gym facilities, and manage bookings effortlessly. We focus on providing a smooth and interactive experience where users can stay informed, motivated, and connected with their fitness choices.
        </p>
        </div>
        <img
  style={{
    width: "30%",
    borderRadius: "15px",
    marginTop: "40px",
    position: "relative",
   
  }}
  src="https://img.freepik.com/premium-photo/yoga-class-stretching-legs-people-with-coach-gym-exercise-healthy-body-wellness-fitness-happy-group-instructor-practice-flexibility-back-balance-pilates-club-together_590464-262204.jpg?semt=ais_hybrid&w=740&q=80"
  alt="img"
  className='mb-5'
/>

      </div>
      <Classcard/>
      <div  style={{width:'100%',height:'70vh',backgroundImage:"url('https://www.franchiseinfo.co.uk/wp-content/uploads/2024/06/20230707_OrangetheoryFitness_Shot_08_2998.jpg')",backgroundPosition:'top',backgroundSize:'cover'}} >
      <div id='trsection' className=' d-flex justify-content-start  align-items-center'>
        <Link  style={{
    padding: "12px 35px",
    backgroundColor: "black",
    color: "#ff6e00ff",
    border: "2px solid #ff6e00ff",
    borderRadius: "150px",   
    fontSize: "16px",
    cursor: "pointer",
    outline: "none",
    marginLeft:'300px',
    marginTop:'230px'
  }} className='text-decoration-none fw-bold ' to={'/trainers'}>Our Trainers</Link>
      </div>
      </div>
      <div className="container my-5">
  <h1 className="text-center text-warning mb-4" 
      style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 1)" }}>
    Explore Your Gym Environment
  </h1>

  <div id="gymExploreCarousel" className="carousel slide shadow-lg rounded overflow-hidden" data-bs-ride="carousel">

    <div className="carousel-indicators">
      <button type="button" data-bs-target="#gymExploreCarousel" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#gymExploreCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#gymExploreCarousel" data-bs-slide-to="2"></button>
    </div>

    <div className="carousel-inner">

      <div className="carousel-item active">
        <img 
          src="https://i.pinimg.com/736x/31/f5/11/31f511dceb3015e042bc4feee2d8d719.jpg"
          className="d-block w-100"
          style={{ height: "550px", objectFit: "cover" }}
          alt="Gym Equipment"
        />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>Modern Workout Space</h5>
          <p>Well-equipped area with high-quality fitness machines.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img 
          src="https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
          className="d-block w-100"
          style={{ height: "550px", objectFit: "cover" }}
          alt="Training Area"
        />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>Spacious Training Zone</h5>
          <p>Perfect for stretching, yoga, and functional workouts.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img 
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-willpicturethis-1954524.jpg&fm=jpg"
          className="d-block w-100"
          style={{ height: "550px", objectFit: "cover" }}
          alt="Group Workout"
        />
        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>Group Classes Area</h5>
          <p>Energetic environment for Zumba, HIIT, and aerobics.</p>
        </div>
      </div>

    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#gymExploreCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#gymExploreCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>
<Review/>
<div>
<h1 className='text-center text-warning mt-4'>Contact us</h1>
<div className='mt-3  row'>
  <div className="col-md-1"></div>
  <div className="col-md-4 bg-warning shadow border d-flex justify-content-center align-items-center flex-column p-3" style={{ width:'600',height:'450'}}>
    <h1>Fit Pro Fitness Studio</h1>
    <p>Phone: +91 9876543210 <br />Address: 123 Health Street, Kochi, Kerala, India <br />Timings: <br />
   - Monday to Friday: 6:00 AM – 9:00 PM <br />
   - Saturday: 7:00 AM – 5:00 PM <br />
   - Sunday: Closed <br />Email : fitpro12@gmail.com</p>
  </div>
  <div className="col-md-2"></div>
  <div className="col-md-4 shadow border text-center"  style={{ width:'600',height:'450'}}> <iframe className='p-4'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.06046221024!2d76.34659218715818!3d10.0156097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b1964e2b85f%3A0x76414cfb68542bd0!2sFIT%20ZONE%20FITNESS%20STUDIO!5e0!3m2!1sen!2sin!4v1763361647208!5m2!1sen!2sin"
  width="450"
  height="450"
  
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Fit Zone Fitness Studio Map"
/>
</div>
<div className="col-md-1"></div>
</div>
</div>

    </div> 
        
  )
}

export default Home