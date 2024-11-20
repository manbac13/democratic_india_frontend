import { Grid2, Skeleton, Stack } from "@mui/material";
import EmptyPlaceholder from "../../../Components/EmptyPlaceholder";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import CandidateCard from "../../../Components/CandidateCard";
import CandidatesTable from "./candidatesTable";

const Candidates = () => {
  const { candidates, dataloading, activeTab } = useGeneral2024();
  return (
    <>
      {candidates?.length <= 0 ? (
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={7}
        >
          <EmptyPlaceholder />
        </Stack>
      ) : dataloading ? (
        <Grid2 container mt={4} mb={3} spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Grid2 key={index} size={4}>
              <Skeleton variant="rectangular" height={"100px"} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Grid2 container mt={4} mb={3} spacing={3}>
          {activeTab === "cards" &&
            candidates.map((item, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                <CandidateCard data={item} />
              </Grid2>
            ))}
          {activeTab === "table" && (
            <Grid2 size={12}>
              <CandidatesTable />
            </Grid2>
          )}
        </Grid2>
      )}
    </>
  );
};

export default Candidates;
