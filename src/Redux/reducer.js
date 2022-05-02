import { GET_DATA, SRT } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        data: [...payload],
        products: [...payload],
      };
    }
    // case SRT: {
    //   return {
    //     ...state,
    //     products: [...payload],
    //   };
    // }
    default: {
      return state;
    }
  }
};
export { reducer };
