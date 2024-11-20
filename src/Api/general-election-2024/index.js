import instance from "..";

export const getStateList = (params) => {
  return instance.get(`/filters/getAllStates/${params.state}`);
};

export const getPcNames = (params) => {
  return instance.get(`/filters/getAllPCNames/${params.state}`);
};

export const getAllCandidates = (params) => {
  return instance.get(
    `/filters/getAllCandidates/?state=${params.state}&pcname=${params.pcname}`
  );
};

export const getResultsForChart = () => {
  return instance.get("/results/forchart");
};

export const getResultsForTable = () => {
  return instance.get("/results");
};
