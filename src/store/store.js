import React, { useReducer, createContext } from "react";

const initialState = {};
export const StorageContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER_DETAILS":
      return {
        userDetails: { ...action.payload?.userDetails },
        bearerToken: action.payload?.bearerToken,
      };
    case "REMOVE_USER_DETAILS":
      return {};
    default:
      throw new Error();
  }
};

export const StorageContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StorageContext.Provider value={[state, dispatch]}>
      {props.children}
    </StorageContext.Provider>
  );
};
