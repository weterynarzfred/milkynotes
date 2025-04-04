import { useReducer } from "react";
import { createContainer } from 'react-tracked';
import { produce } from 'immer';
import _ from "lodash";
import { remoteStorageClient } from "../lib/remoteStorage";

const initialState = {
  notes: {},
  isRSLoggedIn: false,
};

const ACTIONS = {
  UPDATE_NOTE: 'UPDATE_NOTE',
  UPDATE_RS_STATUS: 'UPDATE_RS_STATUS',
};

function handleNotesChange(state, action) {
  const notes = Array.isArray(action.payload) ? action.payload : [action.payload];
  notes.forEach(note => {
    state.notes[note.id] = {
      ...note,
      content: note.content.replaceAll(/<br\s*\/?>\s*/g, '\n'),
    };
  });

  // console.log(JSON.stringify(state.notes));
  if (!action.isInit) {
    remoteStorageClient.storeFile('application/json', 'notes.json', JSON.stringify(state.notes));
  }
}

const reducer = produce((state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_NOTE:
      handleNotesChange(state, action);
      break;
    case ACTIONS.UPDATE_RS_STATUS:
      state.isRSLoggedIn = action.payload;
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
