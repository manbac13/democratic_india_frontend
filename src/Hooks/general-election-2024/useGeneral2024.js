import { useDispatch, useSelector } from "react-redux";
import {
  getAllCandidates,
  getAllPcnames,
  getAllStates,
  setActiveButton,
  setCandidates,
  setFilters,
} from "../../Store/general-election-2024";

function useGeneral2024() {
  const dispatch = useDispatch();

  const filterLoading = useSelector(
    (state) => state?.generalElection2024?.ui?.filterLoading
  );
  const dataloading = useSelector(
    (state) => state?.generalElection2024?.ui?.loading
  );

  const statesList =
    useSelector((state) => state?.generalElection2024?.statesList?.data) || [];
  const pcList =
    useSelector((state) => state?.generalElection2024?.pcList?.data) || [];
  const candidates =
    useSelector((state) => state?.generalElection2024?.candidates?.data) || [];

  const stateFilter = useSelector(
    (state) => state?.generalElection2024?.filters?.state
  );
  const pcnameFilter = useSelector(
    (state) => state?.generalElection2024?.filters?.pcname
  );
  const activeTab = useSelector(
    (state) => state?.generalElection2024?.activeTab
  );

  //actions
  const getAllStatesAction = (params) => dispatch(getAllStates(params));
  const getAllPCNamesAction = (params) => dispatch(getAllPcnames(params));
  const getAllCandidatessAction = (params) =>
    dispatch(getAllCandidates(params));
  const setCandidatesAction = (params) => dispatch(setCandidates(params));
  const setFiltersAction = (params) => dispatch(setFilters(params));
  const seActiveButtonAction = (params) => dispatch(setActiveButton(params));

  return {
    filterLoading,
    statesList,
    pcList,
    candidates,
    dataloading,
    stateFilter,
    pcnameFilter,
    activeTab,

    getAllStatesAction,
    getAllPCNamesAction,
    getAllCandidatessAction,
    setCandidatesAction,
    setFiltersAction,
    seActiveButtonAction,
  };
}

export default useGeneral2024;
