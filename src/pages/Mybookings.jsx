import React, { useEffect, useState } from "react";
import { getBookingById, getAllBookings, updateBooking, deleteBooking } from "../services/allAPI";
import { Modal, Box, TextField, Button } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const loadBookings = async () => {
    const res = await getAllBookings();
    setBookings(res.data);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // open modal and load selected booking
  const handleUpdateClick = async (id) => {
    const res = await getBookingById(id);
    setSelectedBooking(res.data);
    setOpen(true);
  };

  // send updated data to server
  const handleUpdateSubmit = async () => {
    await updateBooking(selectedBooking.id, selectedBooking);
    setOpen(false);
    loadBookings(); // refresh list
  };
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
  if (confirmDelete) {
    await deleteBooking(id);
    loadBookings(); // refresh after delete
  }
};

  return (
    <div className="container mt-5">
      <h2>My Bookings</h2>

      {bookings.map((item) => (
        <div key={item.id} className="border p-3 my-2">
          <h4>{item.personal.name}</h4>
          <h5>{item.classInfo.className}</h5>
          <p>Date: {item.schedule.date}</p>
          <p>Time: {item.schedule.time}</p>

          <button
            className="btn btn-warning"
            onClick={() => handleUpdateClick(item.id)}
          >
            Update
          </button>
          
          <button
  className="btn btn-danger ms-2"
  onClick={() => handleDelete(item.id)}
>
  Delete
</button>
        </div>
      ))}

      {/* Update Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 400,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h4>Update Booking</h4>
          
          {selectedBooking && (
            <>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={selectedBooking.personal.name}
                onChange={(e) =>
                  setSelectedBooking({
                    ...selectedBooking,
                    personal: {
                      ...selectedBooking.personal,
                      name: e.target.value,
                    },
                  })
                }
              />

              <TextField
                label="Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={selectedBooking.schedule.date}
                onChange={(e) =>
                  setSelectedBooking({
                    ...selectedBooking,
                    schedule: {
                      ...selectedBooking.schedule,
                      date: e.target.value,
                    },
                  })
                }
              />

              <TextField
                label="Time"
                type="time"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={selectedBooking.schedule.time}
                onChange={(e) =>
                  setSelectedBooking({
                    ...selectedBooking,
                    schedule: {
                      ...selectedBooking.schedule,
                      time: e.target.value,
                    },
                  })
                }
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleUpdateSubmit}
              >
                Update
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default MyBookings;
