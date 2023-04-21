import React, {useState} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Button from "@mui/material/Button";
import DialogCard from "../views/Dialog";
import MobileStepper from '@mui/material/MobileStepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableStepper({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [dialog, setDialog] = useState(false);
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  return (
    <>
      <Box sx={{ maxWidth: 500, flexGrow: 1, justifyContent:'center', alignItems:'center' }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ border: "none" }}
                  onDoubleClick={() => setDialog(true)}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      display: "block",
                      maxWidth: '100%',
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                  />
                  <DialogCard open={dialog} setOpen={setDialog} img={Object.values(images[activeStep])}></DialogCard>
                </Button>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
        steps={images.length}
        position="static"
        activeStep={activeStep}
        sx={{alignItems:"center", justifyContent:"center"}}
      />
      </Box>
    </>
  );
}

export default SwipeableStepper;
