import { MilkdownProvider } from "@milkdown/react";

import { useTrackedState } from './StateProvider';
import MilkdownEditor from "./MilkdownEditor";

export default function EditorArea({ noteId }) {
  const state = useTrackedState();
  const stateNote = state.notes[noteId] ?? { id: noteId, content: '' };

  return (
    <div className="EditorArea">
      <MilkdownProvider>
        <MilkdownEditor note={stateNote} />
      </MilkdownProvider>
    </div>
  );
}
