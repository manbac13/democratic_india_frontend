import { useEffect } from "react";
import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import CommonReactTable from "../../../Components/React-Table";

const PartyWiseResult = () => {
  const { resultForTable, getResultsForTableAction } = useGeneral2024();

  useEffect(() => {
    getResultsForTableAction();
  }, []);

  const columns = [
    {
      Header: "Party",
      accessor: "party", // accessor is the key in the data
    },
    {
      Header: "Seats",
      accessor: "seats", // accessor is the key in the data
    },
  ];
  return (
    <>
      <CommonReactTable data={resultForTable} columns={columns} />
    </>
  );
};

export default PartyWiseResult;
