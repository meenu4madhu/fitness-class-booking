import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useParams } from 'react-router-dom';




function Header() {
const {id}=useParams()
  return (
<Box sx={{ flexGrow: 1 }}>
<AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent !important",
          boxShadow: "none !important",
          backdropFilter: "none !important",
        }}
      >
  <Toolbar>
    <Box sx={{ display: "flex", gap: 5 }}>
      <Link to="/" className="head text-warning text-decoration-none fw-bold fs-2" >Home</Link>
      <Link to="/" onClick={() => {
      setTimeout(() => {
      const section = document.getElementById("aboutus");
      section?.scrollIntoView({ behavior: "smooth" });
      }, 100)
      }} className="head text-warning text-decoration-none fw-bold fs-2">About Us</Link>
      <Link to="/"  onClick={() => {
      setTimeout(() => {
      const trainers = document.getElementById("trsection");
      trainers?.scrollIntoView({ behavior: "smooth" });
      }, 100)}} className="head text-warning text-decoration-none fw-bold fs-2">Trainers</Link>
      <Link to="/" onClick={() => {
      setTimeout(() => {
      const rating = document.getElementById("reviews");
      rating?.scrollIntoView({ behavior: "smooth" });
      }, 100)}}
      className="head text-warning text-decoration-none fw-bold fs-2">Reviews</Link>
   </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Link to={`/mybookings/${id}`} className="head text-warning text-decoration-none fw-bold fs-2">My Bookings</Link>
  </Toolbar>
</AppBar>
</Box>
  );
}

export default Header;