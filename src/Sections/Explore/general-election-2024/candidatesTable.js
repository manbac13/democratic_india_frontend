import useGeneral2024 from "../../../Hooks/general-election-2024/useGeneral2024";
import CommonTable from "../../../Components/React-Table/index";

const CandidatesTable = () => {
  const { candidates } = useGeneral2024();

  const columns = [
    {
      Header: "Candidate",
      accessor: "candidate", // accessor is the key in the data
    },
    {
      Header: "Party",
      accessor: "party",
    },
    {
      Header: "EVM Votes",
      accessor: "evm_votes",
    },
    {
      Header: "Postal Votes",
      accessor: "postal_votes",
    },
    {
      Header: "Total Votes",
      accessor: "total_votes",
    },
    {
      Header: "VoteShare",
      accessor: "vote_share",
    },
  ];
  return (
    <>
      <CommonTable data={candidates} columns={columns} />
    </>
  );
};

export default CandidatesTable;
