import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../../Store/menu";

function useMenu() {
  const dispatch = useDispatch();

  const selectedItem = useSelector((state) => state?.menu?.activeItem);

  //action
  const setActiveItemAction = (params) => dispatch(setActiveItem(params));
  return {
    selectedItem,
    setActiveItemAction,
  };
}

export default useMenu;
