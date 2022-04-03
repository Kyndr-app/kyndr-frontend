import {
  FormControlLabel,
  LinearProgress,
  linearProgressClasses,
  Select,
  styled,
  Tab,
  Tabs,
  TextField,
  useRadioGroup,
} from "@mui/material";

export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: theme.typography.fontWeightSemiBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.text.main,
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
  })
);

const StyledFormControlLabel = styled(FormControlLabel)(({ checked }) => ({
  backgroundColor: checked && "#1660CF1a",
  border: `1px solid ${checked ? "#1660CF" : "#999"}`,
  marginRight: 0,
  marginLeft: 0,
  paddingRight: `10px`,
  alignItems: "start",
}));

export function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <StyledFormControlLabel
      style={{
        width: "100%",
      }}
      checked={checked}
      {...props}
      label={<props.label checked={checked} />}
      className={`${props.className} py-3 last:mb-0 mb-3 rounded-md`}
      classes={{ label: "w-full" }}
    />
  );
}

export const StyledInput = styled(TextField)({
  "& input": {
    fontSize: 14,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  "& input:disabled + fieldset": {
    opacity: 0.2,
  },
  "& label": {
    fontSize: 16,
    color: "#828282 !important",
  },
  "& fieldset": {
    borderRadius: 10,
  },
});
export const StyledSelect = styled(Select)({
  "& input": {
    fontSize: 14,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  "& label": {
    fontSize: 14,
    color: "#828282 !important",
  },
  "& fieldset": {
    borderRadius: 10,
  },
});

export const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, extraColor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: extraColor ? "#C4C4C4" : theme.palette.secondary.light,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: extraColor || theme.palette.secondary.main,
    },
  })
);
