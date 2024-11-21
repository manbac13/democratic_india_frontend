import { useDispatch, useSelector } from "react-redux";
import { getDshboardData } from "../../Store/dashboard";

function useDashboard() {
  const dispatch = useDispatch();

  const stateWiseData = useSelector((state) => state?.dashboard?.data?.data);

  //action
  const getDshboardDataAction = () => dispatch(getDshboardData());
  return {
    getDshboardDataAction,
    stateWiseData,
  };
}

export default useDashboard;
