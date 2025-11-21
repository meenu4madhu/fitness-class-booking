
import commonAPI from "./commonAPI";
import url from "./serverURL";

// get all classes
export const getAllclasses=async()=>{
    return await commonAPI(`${url}/classes`, "GET", "");
}
// get all trainers
export const getAlltrainers=async()=>{
    return await commonAPI(`${url}/trainers`, "GET", "");
}
// save booking
export const saveBooking = async (bookingData) => {
  return await commonAPI(`${url}/bookings`, "POST", bookingData);
}

// get single booking by ID
export const getBookingById = async(id) => {
  return await commonAPI(`${url}/bookings/${id}`, "GET", "");
}
// update booking
export const updateBooking = async (id, updatedData) => {
  return await commonAPI(`${url}/bookings/${id}`, "PUT", updatedData);
};
export const getAllBookings = async () => {
  return await commonAPI(`${url}/bookings`, "GET", "");
};
export const deleteBooking = async (id) => {
  return await commonAPI(`${url}/bookings/${id}`, "DELETE");
};
