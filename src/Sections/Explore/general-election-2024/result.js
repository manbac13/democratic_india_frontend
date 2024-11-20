import { Cell, Legend, Pie, PieChart, Text, Tooltip } from "recharts";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import { useEffect } from "react";
import { Stack, Typography, useTheme } from "@mui/material";

const ResultsForChart = () => {
  const theme = useTheme();
  const { resultForChart, getResultsForChartAction } = useGeneral2024();

  useEffect(() => {
    getResultsForChartAction();
  }, []);
  const COLORS = [
    "#ff944d",
    "#19aaed",
    "#ff0000",
    "#aebedf",
    "#05f86e",
    "#39ac57",
    "#204795",
    "#4fb825",
    "#d781f9",
    "#d2691e",
    "#b3b3b3",
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{
            backgroundColor: theme.palette.background.default,
            p: 0.5,
            borderRadius: 1,
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>
            {payload[0].payload.party}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>{payload[0].value}</Typography>
        </Stack>
      );
    }

    return null;
  };
  return (
    <>
      <PieChart width={600} height={600}>
        <Pie
          dataKey="seats"
          startAngle={180}
          endAngle={0}
          data={resultForChart}
          cx="50%"
          cy="50%"
          innerRadius={110}
          outerRadius={250}
          fill="#8884d8"
        >
          {resultForChart?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      <Typography
        sx={{
          position: "absolute",
          top: { xs: "70%", sm: "68%", md: "67%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "15px", sm: "20px", md: "26px" },
          fontWeight: "bold",
          color: theme.palette.grey[200],
        }}
      >
        543/543
      </Typography>
    </>
  );
};

export default ResultsForChart;
