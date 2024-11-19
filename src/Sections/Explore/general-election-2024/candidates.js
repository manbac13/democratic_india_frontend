import { Grid2, Skeleton, Stack } from "@mui/material";
import EmptyPlaceholder from "../../../Components/EmptyPlaceholder";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import CandidateCard from "../../../Components/CandidateCard";

const Candidates = () => {
  const { candidates, dataloading } = useGeneral2024();
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
          {candidates.map((item, index) => (
            <Grid2 key={index} size={4}>
              <CandidateCard data={item} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
};

export default Candidates;
