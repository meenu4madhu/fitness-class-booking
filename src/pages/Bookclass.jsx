import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { getAllclasses, saveBooking } from "../services/allAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { green } from "@mui/material/colors";




// 3 Steps
const steps = [
  "Personal Information",
  "Class Information",
  "Schedule Information",
];

function Bookclass() {
  const { classId } = useParams(); 
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  // Personal Information
  const [personal, setPersonal] = React.useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    emergencyPhone: "",
  });

  // Class Information
  const [classInfo, setClassInfo] = React.useState({
    className: "",
    level: "",
  });

  // Schedule Information
  const [schedule, setSchedule] = React.useState({
    date: "",
    time: "",
  });
useEffect(() => {
    if (classId) {
      getAllclasses().then(res => {
        const selectedClass = res.data.find(c => c.id === classId);
        if (selectedClass) {
          setClassInfo({
            className: selectedClass.name,
            level: ""  // user can select level
          });
        }
      });
    }
  }, [classId]);

  // Step Navigation
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  // Render UI for each step
  const renderSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 style={{ marginBottom: "15px" }}>Personal Details</h3>
            <div className="row p-3">

              <TextField
                label="Full Name"
                variant="standard"
                value={personal.name}
                onChange={(e) =>
                  setPersonal({ ...personal, name: e.target.value })
                }
                className="col-md-6"
              />

              <TextField
                label="Age"
                variant="standard"
                value={personal.age}
                onChange={(e) =>
                  setPersonal({ ...personal, age: e.target.value })
                }
                className="col-md-4"
              />

              <TextField
                label="Gender"
                variant="standard"
                value={personal.gender}
                onChange={(e) =>
                  setPersonal({ ...personal, gender: e.target.value })
                }
                className="col-md-4"
              />

              <TextField
                label="Email"
                variant="standard"
                value={personal.email}
                onChange={(e) =>
                  setPersonal({ ...personal, email: e.target.value })
                }
                className="col-md-6"
              />

              <TextField
                label="Phone Number"
                variant="standard"
                value={personal.phone}
                onChange={(e) =>
                  setPersonal({ ...personal, phone: e.target.value })
                }
                className="col-md-6"
              />

              <TextField
                label="Emergency Phone Number"
                variant="standard"
                value={personal.emergencyPhone}
                onChange={(e) =>
                  setPersonal({ ...personal, emergencyPhone: e.target.value })
                }
                className="col-md-6"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 style={{ marginBottom: "15px" }}>Class Information</h3>
            <div className="row p-3">

              <TextField
                label="Class Name"
                select
                variant="standard"
                value={classInfo.className}
                onChange={(e) =>
                  setClassInfo({ ...classInfo, className: e.target.value })
                }
                className="col-md-6"
              >
                <MenuItem value="Yoga">Yoga</MenuItem>
                <MenuItem value="Zumba">Zumba</MenuItem>
                <MenuItem value="Strength Training">Meditation</MenuItem>
                <MenuItem value="Meditation">Pilates</MenuItem>
                 <MenuItem value="Yoga">Strength Training</MenuItem>
                <MenuItem value="Zumba">Cardio</MenuItem>
                <MenuItem value="Strength Training">Crossfit</MenuItem>
                <MenuItem value="Meditation">Aerobics</MenuItem>
                 <MenuItem value="Meditation">Nutrition Coaching</MenuItem>
              </TextField>

             

              <TextField
                label="Level"
                select
                variant="standard"
                value={classInfo.level}
                onChange={(e) =>
                  setClassInfo({ ...classInfo, level: e.target.value })
                }
                className="col-md-6"
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </TextField>

            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 style={{ marginBottom: "15px" }}>Schedule Information</h3>
            <div className="row p-3">

              <TextField
                label="Preferred Date"
                type="date"
                variant="standard"
                value={schedule.date}
                onChange={(e) =>
                  setSchedule({ ...schedule, date: e.target.value })
                }
                className="col-md-6"
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Preferred Time"
                type="time"
                variant="standard"
                value={schedule.time}
                onChange={(e) =>
                  setSchedule({ ...schedule, time: e.target.value })
                }
                className="col-md-6"
                InputLabelProps={{ shrink: true }}
              />

            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "60%", margin: "100px auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 3, mb: 1 }}>
            ✔ Booking Completed Successfully!
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 3, mb: 1 }}>Step {activeStep + 1}</Typography>

          <Box>{renderSteps(activeStep)}</Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>

           <Button 
  onClick={async () => {
    if (activeStep === steps.length - 1) {
      // Combine all data
      const bookingData = {
        customId:classId,
        personal,
        classInfo,
        schedule,
        createdAt: new Date().toISOString()
      };

      // Save to JSON Server
      try {
    const response = await saveBooking(bookingData);
    
  } catch (error) {
    console.log(error);
  }

      // Move to success page
      handleNext();
    } else {
      handleNext();
    }
  }}
>
  {activeStep === steps.length - 1 ? "Finish" : "Next"}
</Button>

          </Box>
        </>
      )}
    </Box>
  );
}

export default Bookclass;
