import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as GeneralElectionApi from "../../Api/general-election-2024/index";
import { toast } from "react-toastify";

const initialState = {
  statesList: [],
  pcList: [],
  candidates: [],
  activeTab: "cards",
  resultForChart: [],
  resultForTable: [],
  filters: {
    state: null,
    pcname: null,
  },
  ui: {
    filterLoading: false,
    loading: false,
  },
};

const getAllStates = createAsyncThunk(
  "GeneralElections2024/getAllStates",
  async (params, { rejectWithValue }) => {
    try {
      const res = await GeneralElectionApi.getStateList(params);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      toast.error(
        "Something went wrong! Please remove the filters and try again!",
        { position: "bottom-right" }
      );
    }
  }
);

const getAllPcnames = createAsyncThunk(
  "GeneralElections2024/getAllPcnames",
  async (params, { rejectWithValue }) => {
    try {
      const res = await GeneralElectionApi.getPcNames(params);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      toast.error(
        "Something went wrong! Please remove the filters and try again!",
        { position: "bottom-right" }
      );
    }
  }
);

const getAllCandidates = createAsyncThunk(
  "GeneralElections2024/getAllCandidates",
  async (params, { rejectWithValue }) => {
    try {
      const res = await GeneralElectionApi.getAllCandidates(params);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      toast.error("Something went wrong!", { position: "bottom-right" });
    }
  }
);

const getResultsForChart = createAsyncThunk(
  "GeneralElections2024/getResultsForChart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await GeneralElectionApi.getResultsForChart();
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      toast.error("Something went wrong!", { position: "bottom-right" });
    }
  }
);

const getResultsForTable = createAsyncThunk(
  "GeneralElections2024/getResultsForTable",
  async (_, { rejectWithValue }) => {
    try {
      const res = await GeneralElectionApi.getResultsForTable();
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      toast.error("Something went wrong!", { position: "bottom-right" });
    }
  }
);

const generalElectionSlice = createSlice({
  name: "GeneralElections2024",
  initialState: initialState,
  reducers: {
    setCandidates: (state) => {
      state.candidates = [];
    },
    setFilters: (state, action) => {
      const { statename, pcname } = action.payload;
      state.filters.state = statename;
      state.filters.pcname = pcname;
    },
    setActiveButton: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStates.pending, (state) => {
        state.ui.filterLoading = true;
      })
      .addCase(getAllStates.fulfilled, (state, action) => {
        state.statesList = action.payload;
        state.ui.filterLoading = false;
      })
      .addCase(getAllStates.rejected, (state) => {
        state.ui.filterLoading = false;
        state.pcList = [];
        state.candidates = [];
      })
      .addCase(getAllPcnames.pending, (state) => {
        state.ui.filterLoading = true;
        state.candidates = [];
      })
      .addCase(getAllPcnames.fulfilled, (state, action) => {
        state.pcList = action.payload;
        state.ui.filterLoading = false;
      })
      .addCase(getAllPcnames.rejected, (state) => {
        state.ui.filterLoading = false;
        state.pcList = [];
        state.candidates = [];
      })
      .addCase(getAllCandidates.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getAllCandidates.fulfilled, (state, action) => {
        state.candidates = action.payload;
        state.ui.loading = false;
      })
      .addCase(getAllCandidates.rejected, (state) => {
        state.ui.loading = false;
      })
      .addCase(getResultsForChart.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getResultsForChart.fulfilled, (state, action) => {
        state.resultForChart = action.payload;
        state.ui.loading = false;
      })
      .addCase(getResultsForChart.rejected, (state) => {
        state.ui.loading = false;
      })
      .addCase(getResultsForTable.pending, (state) => {
        state.ui.loading = true;
      })
      .addCase(getResultsForTable.fulfilled, (state, action) => {
        state.resultForTable = action.payload;
        state.ui.loading = false;
      })
      .addCase(getResultsForTable.rejected, (state) => {
        state.ui.loading = false;
      });
  },
});

const { setCandidates, setFilters, setActiveButton } =
  generalElectionSlice.actions;

export default generalElectionSlice.reducer;

export {
  getAllStates,
  getAllPcnames,
  getAllCandidates,
  setCandidates,
  setFilters,
  setActiveButton,
  getResultsForChart,
  getResultsForTable,
};
