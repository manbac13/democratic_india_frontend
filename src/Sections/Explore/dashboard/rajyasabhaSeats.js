import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RajyasabhaChart = ({ data }) => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.default,
            py: 1,
            px: 2,
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>
            {payload[0].payload.state}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 600 }}
          >{`${payload[0].value} seats`}</Typography>
        </Stack>
      );
    }
    return null;
  };
  return (
    <>
      <Card>
        <CardHeader
          title={
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              Statewise Rajyasabha seats
            </Typography>
          }
        />
        <Divider />
        <CardContent sx={{height: '340px'}}>
          <ResponsiveContainer width='100%' height="100%">
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{ bottom: 30 }}
            >
              <Bar
                dataKey="rajya_sabha_seats"
                fill={theme.palette.error.dark}
              />
              <Tooltip content={<CustomTooltip />} />
              <XAxis
                dataKey="state"
                angle={-45}
                style={{ fontSize: "10px" }}
                height={50}
                tickLine={false}
                axisLine={false}
                interval={0}
                textAnchor="end"
                dx={-10}
              />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default RajyasabhaChart;
