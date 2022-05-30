import React, { FC } from "react"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector"
import { StepIconProps } from "@mui/material/StepIcon"

import styles from "./progressbar.module.scss"


const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 1,
    backgroundColor: "#7429e6",
  },
}))

const ColorlibStepIconRoot = styled("div")<{
}>(() => ({
  backgroundColor: "#fff",
  border: "3px solid #7429e6",
  zIndex: 1,
  color: "#7429e6",
  fontSize: 17,
  fontWeight: 700,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <span>01</span>,
    2: <span>02</span>,
    3: <span>03</span>,
  }

  return (
    <ColorlibStepIconRoot
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}
const steps = ["Select campaign settings", "Create an ad group", "Create an ad"]

const Progressbar: FC = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}

export default Progressbar
