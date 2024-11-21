import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LoksabhaChart = ({ data }) => {
  const theme = useTheme();

  const [fontSize, setFontSize] = useState("10px");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 500) {
      setFontSize("6px");
    } else if (width < 600) {
      setFontSize("8px");
    } else if (width < 960) {
      setFontSize("10px");
    } else {
      setFontSize("12px");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              Statewise Loksabha seats
            </Typography>
          }
        />
        <Divider />
        <CardContent sx={{ height: "340px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{ bottom: 30 }}
            >
              <Bar dataKey="loksabha_seats" fill={theme.palette.success.dark} />
              <Tooltip content={<CustomTooltip />} />
              <XAxis
                dataKey="state"
                angle={-45}
                style={{ fontSize: fontSize }}
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

export default LoksabhaChart;
