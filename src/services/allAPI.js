
import commonAPI from "./commonAPI";
import url from "./serverURL";

// get all classes
export const getAllclasses=async()=>{
    return await commonAPI(`${url}/classes`, "GET", "");
}