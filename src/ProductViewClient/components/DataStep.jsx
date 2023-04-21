import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StarIcon from "@mui/icons-material/Star";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { FichaTecnica, Informacion, Mas } from "./Data/index";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";

const AutoPlaySwipeableViews = SwipeableViews;

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(136, 217, 255) 0%, rgb(126, 117, 255) 50%, rgb(19, 18, 105) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(136, 217, 255) 0%, rgb(126, 117, 255) 50%, rgb(19, 18, 105) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(136, 217, 255) 0%, rgb(126, 117, 255) 50%, rgb(19, 18, 105) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(136, 217, 255) 0%, rgb(126, 117, 255) 50%, rgb(19, 18, 105) 100%)",
  }),
}));

const steps = ["Informacion ", "Ficha Tecnica", "Reseñas"];

let count = 0;
export default function CustomizedSteppers({ datos }) {
  console.log(datos.ficha_tecnica);
  const views = [
    <Informacion datos={datos} />,
    <FichaTecnica
      valGrilla={{
        datos: Object.values(datos.ficha_tecnica),
        titulo: ["Pantalla", "Energia y Bateria"],
      }}
    />,
    <Mas />,
  ];
  const [frame, setFrame] = React.useState(0);

  const handleStepChange = (step) => {
    setFrame(step);
  };

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <InfoIcon />,
      2: <AnalyticsIcon />,
      3: <StarIcon />,
    };

    return (
      <Button
        sx={{ margin: "0", padding: "0" }}
        onClick={() => {
          setFrame(String(props.icon) - 1);
          console.log(count);
        }}
      >
        <ColorlibStepIconRoot
          ownerState={{ completed, active }}
          className={className}
        >
          {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
      </Button>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ width: "100%", height: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={frame}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ width: "100%", height: "100%" }}>
            <AutoPlaySwipeableViews
              index={frame}
              enableMouseEvents
              onChangeIndex={handleStepChange}
            >
              {views.map((view, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      height: "80%",
                    }}
                  >
                    {view}
                  </div>
                );
              })}
            </AutoPlaySwipeableViews>{" "}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
