import { useReducer } from "react";
import { createContainer } from 'react-tracked';
import { produce } from 'immer';

const initialState = {
  notes: {},
  isRSLoggedIn: false,
};

const ACTIONS = {
  UPDATE_NOTE: 'UPDATE_NOTE',
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_NOTE:
      state.notes[action.payload.id] = action.payload;
      break;
    default:
      throw new Error(`unrecognized action type: ${action.type}`);
  }
});

const { Provider, useTrackedState, useUpdate } = createContainer(
  ({ reducer, initialState }) => useReducer(reducer, initialState)
);

export default function StateProvider({ children }) {
  return <Provider reducer={reducer} initialState={initialState}>
    {children}
  </Provider>;
};

export { ACTIONS, useTrackedState, useUpdate };
