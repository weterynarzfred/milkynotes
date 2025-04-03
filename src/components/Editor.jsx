import { ACTIONS, useTrackedState, useUpdate } from './StateProvider';
import { useRef, useState } from 'react';

export default function Editor({ noteId }) {
  const state = useTrackedState();
  const dispatch = useUpdate();
  const [note, setNote] = useState(state.notes[noteId] || { id: noteId, content: '' });
  const timeoutRef = useRef();

  const handleChange = event => {
    const updatedNote = { ...note, content: event.target.value };
    setNote(updatedNote);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: ACTIONS.UPDATE_NOTE,
        payload: updatedNote,
      });
    }, 1000);
  };

  return (
    <textarea
      value={note.content}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
}
