import { Grid2, LinearProgress } from "@mui/material";
import FilterRow from "./filterRow";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import { useEffect } from "react";
import Candidates from "./candidates";

const General2024 = () => {
  const {
    getAllStatesAction,
    statesList,
    getAllPCNamesAction,
    pcList,
    filterLoading,
    getAllCandidatessAction,
    setCandidatesAction,
    setFiltersAction
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
        sx={{ paddingInline: "100px" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid2
          size={10}
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
          size={10}
          sx={{
            mt: 1,
          }}
        >
          <Candidates />
        </Grid2>
      </Grid2>
    </>
  );
};

export default General2024;
