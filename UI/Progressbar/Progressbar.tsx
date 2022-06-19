import {
  Stack,
  Stepper,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  styled,
  StepIconProps,
} from "@mui/material"

interface ProgressbarProps {
  steps: number[]
  currentStep: number
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#8100ef",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#8100ef",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#f5f5f5",
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#f5f5f5",
  zIndex: 1,
  color: "#8122ef",
  fontSize: 17,
  fontWeight: 700,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #f5f5f5",
  background: "#fff",
  ...(ownerState.active && {
    border: "4px solid #8122ef",
  }),
  ...(ownerState.completed && {
    border: "4px solid #8122ef",
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <span>01</span>,
    2: <span>02</span>,
    3: <span>03</span>,
    4: <span>04</span>,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const Progressbar: React.FC<ProgressbarProps> = (props) => {
  const { currentStep, steps } = props

  return (
    <Stack sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={currentStep}
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
