import { Grid2 } from "@mui/material";
import LoksabhaChart from "./loksabhaSeats";
import useDashboard from "../../../Hooks/dashboard/useDashboard";
import { useEffect } from "react";
import RajyasabhaChart from "./rajyasabhaSeats";

const Dashboard = () => {
  const { getDshboardDataAction, stateWiseData } = useDashboard();

  useEffect(() => {
    getDshboardDataAction();
  }, []);
  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{
          paddingInline: { xs: "12px", sm: "12px", md: "50px", lg: "100px" },
        }}
      >
        <Grid2 size={{ lg: 6, md: 12, sm: 12, xs: 12 }} >
          <LoksabhaChart data={stateWiseData} />
        </Grid2>
        <Grid2 size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
          <RajyasabhaChart data={stateWiseData} />
        </Grid2>
      </Grid2>
    </>
  );
};
export default Dashboard;
