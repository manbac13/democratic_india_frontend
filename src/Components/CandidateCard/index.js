import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const CandidateCard = ({ data }) => {
  console.log("candidate data", data);
  const theme = useTheme();
  return (
    <>
      <Card>
        <CardHeader
          sx={{ backgroundColor: theme.palette.grey[900] }}
          title={
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color:
                    data.sl_no === 1
                      ? theme.palette.success.light
                      : theme.palette.error.light,
                }}
              >
                {data.sl_no === 1 ? "Won" : "Lost"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color:
                    data.sl_no === 1
                      ? theme.palette.success.light
                      : theme.palette.error.light,
                }}
              >
                {`${data.total_votes} (${data?.vote_share}%)`}
              </Typography>
            </Stack>
          }
        />
        <Divider />
        <CardContent>
          <Typography>{data?.candidate}</Typography>
          <Typography
            sx={{ color: theme.palette.primary.dark, fontWeight: "bold" }}
          >
            {data?.party}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CandidateCard;
