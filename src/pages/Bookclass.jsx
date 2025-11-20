import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const steps = ['Personal Information', 'Class Information', 'Schedule Information'];
const options = [
  '',
  '',
  '',
  '',
];


function Bookclass() {
 
     
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
   const renderSteps=(stepCount)=>{
   switch(stepCount)
   {
    case 0: return(
    <div>
        <h3>Personal Details</h3>
        <div className=" row p-3">
          <TextField  id="standard-fname" label="Full Name" variant="standard" />
          <TextField  id="standard-age" label="Age" variant="standard" />
          <TextField  id="standard-gender" label="Gender" variant="standard" />
          <TextField  id="standard-email" label="Email Address" variant="standard" />
          <TextField  id="standard-ph" label="Phone Number" variant="standard" />
          <TextField  id="standard-emergencyph" label="Emergency Phone Number" variant="standard" />
        </div>
    </div>
    )
    
    case 1: return(
    <div>
        <h3>Class Information</h3>
        <div className=" row p-3">
           
        </div>
    </div>
    )
    case 2: return(
    <div>
        <h3>Schedule Information</h3>
         <div className=" row p-3">
            <TextField value={resumeDetails.jobType} onChange={e=>setresumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-job" label="Job or Internship" variant="standard" />
            <TextField value={resumeDetails.company} onChange={e=>setresumeDetails({...resumeDetails,company:e.target.value})} id="standard-cmp" label="Company Name" variant="standard" />
            <TextField value={resumeDetails.cLocation} onChange={e=>setresumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-cmploc" label="Company Location" variant="standard" />
            <TextField value={resumeDetails.duration} onChange={e=>setresumeDetails({...resumeDetails,duration:e.target.value})} id="standard-dur" label="Duration" variant="standard" />
            
        </div>
    </div>
    )
   
    default: return null
   }
  }

  return (
     <Box sx={{ width: '50%' , marginTop:"100px",marginBottom:"80px" ,marginLeft:"80px"}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to steps */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Bookclass