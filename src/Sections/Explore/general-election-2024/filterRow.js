import {
  Autocomplete,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import { useAsyncDebounce } from "react-table";
import * as Yup from "yup";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import { Grid8, Personalcard } from "iconsax-react";

const FilterRow = ({
  states,
  getAllPCNamesAction,
  pcList,
  loading,
  getAllCandidatesAction,
  setFiltersAction,
}) => {
  const { stateFilter, pcnameFilter, seActiveButtonAction, activeTab } =
    useGeneral2024();
  const theme = useTheme();
  const smallSS = useMediaQuery(theme.breakpoints.down("md"));

  const initialValues = {
    state: stateFilter || "",
    pcname: pcnameFilter || "",
  };

  const validationSchema = Yup.object().shape({
    state: Yup.string().required(),
    pcname: Yup.string().required(),
  });

  const getPcNames = useAsyncDebounce((values) => {
    getAllPCNamesAction({ state: values });
  }, 1000);

  const getCandidates = useAsyncDebounce((state, pcname) => {
    getAllCandidatesAction({ state: state, pcname: pcname });
  }, 2000);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("formik values", values)}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Stack
              direction={smallSS ? "column" : "row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={1}
            >
              <Stack sx={{ maxWidth: { sm: "100%", md: "50%" } }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.grey[500],
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {values.state && values.pcname
                    ? `Constituency Name: ${values.pcname} (${values.state})`
                    : "Select state and constituency"}
                </Typography>
              </Stack>
              <Stack direction={smallSS ? "column" : "row"} spacing={2}>
                <Autocomplete
                  size="small"
                  disablePortal
                  options={states}
                  sx={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select State" />
                  )}
                  onChange={(event, newValue) => {
                    console.log(newValue);
                    setFieldValue("state", newValue);
                    setFieldValue("pcname", "");
                    getPcNames(newValue);
                    setFiltersAction({
                      statename: newValue,
                      pcname: values.pcname,
                    });
                  }}
                  value={values.state}
                  name="state"
                />

                <Autocomplete
                  size="small"
                  disablePortal
                  options={pcList}
                  sx={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={
                        loading ? "Please Wait..." : "Select Constituency"
                      }
                    />
                  )}
                  onChange={(event, newValue) => {
                    setFieldValue("pcname", newValue);
                    getCandidates(values.state, newValue);
                    setFiltersAction({
                      pcname: newValue,
                      statename: values.state,
                    });
                  }}
                  value={values.pcname}
                  name="pcname"
                  disabled={loading}
                />

                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  <IconButton onClick={() => seActiveButtonAction("cards")}>
                    <Personalcard
                      size="24"
                      color={
                        activeTab === "cards"
                          ? theme.palette.primary.dark
                          : theme.palette.grey[300]
                      }
                    />
                  </IconButton>
                  <IconButton onClick={() => seActiveButtonAction("table")}>
                    <Grid8
                      size="24"
                      color={
                        activeTab === "table"
                          ? theme.palette.primary.dark
                          : theme.palette.grey[300]
                      }
                    />
                  </IconButton>
                </ButtonGroup>
              </Stack>
            </Stack>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FilterRow;
