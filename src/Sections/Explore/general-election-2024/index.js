import { Box, Grid2, Tab, useTheme } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FilterRow from "./filterRow";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import { useEffect, useState } from "react";
import Candidates from "./candidates";

const General2024 = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    getAllStatesAction,
    statesList,
    getAllPCNamesAction,
    pcList,
    filterLoading,
    getAllCandidatessAction,
    setCandidatesAction,
    setFiltersAction,
  } = useGeneral2024();

  useEffect(() => {
    if (statesList?.length <= 0) {
      console.log("reached useffect");
      getAllStatesAction({ state: "state" });
    }
  }, []);

  return (
    <>
      <Grid2
        container
        sx={{
          paddingInline: { xs: "12px", sm: "12px", md: "50px", lg: "100px" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid2
          size={10}
          sx={{
            mt: 1,
          }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  position: "sticky",
                  top: "95px",
                  backgroundColor: theme.palette.background.default,
                  zIndex: 1,
                  transition: "0.5s ease-in-out",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  // scrollButtons="auto"
                  sx={{ maxWidth: { xs: 300, sm: 480, md: '100%' } }}
                >
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label="Result"
                    value="1"
                  />
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label="Party Wise Result"
                    value="2"
                  />
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label="Constituency Wise Result"
                    value="3"
                  />
                </TabList>
              </Box>
              <TabPanel value="1"></TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">
                <Grid2
                  size={12}
                  sx={{
                    mt: 1,
                  }}
                >
                  <FilterRow
                    states={statesList}
                    pcList={pcList}
                    getAllPCNamesAction={getAllPCNamesAction}
                    loading={filterLoading}
                    getAllCandidatesAction={getAllCandidatessAction}
                    setCandidatesAction={setCandidatesAction}
                    setFiltersAction={setFiltersAction}
                  />
                </Grid2>

                <Grid2
                  size={12}
                  sx={{
                    mt: 1,
                  }}
                >
                  <Candidates />
                </Grid2>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid2>

        {/* Pages */}
      </Grid2>
    </>
  );
};

export default General2024;
