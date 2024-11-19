import { Typography } from "@mui/material";
import EmptyPlaceHolder from "../../Assets/website-maintenance.svg";

const EmptyPlaceholder = ({ msg }) => {
  return (
    <>
      <img
        src={EmptyPlaceHolder}
        alt="empty"
        width={"300px"}
        height={"300px"}
      />
      <Typography>{msg}</Typography>
    </>
  );
};

export default EmptyPlaceholder;
