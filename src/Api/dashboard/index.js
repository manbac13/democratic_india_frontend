import instance from "..";

export const getDshboardData = () => {
  return instance.get("/statewise");
};
