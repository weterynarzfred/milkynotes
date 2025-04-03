import { useEffect } from "react";
import Editor from "./Editor";
import { ACTIONS, useUpdate } from "./StateProvider";
import remoteStorage, { remoteStorageClient } from "../lib/remoteStorage";

export default function App() {
  const dispatch = useUpdate();

  useEffect(() => {
    remoteStorage.on('connected', async () => {
      console.log('[RemoteStorage] connected');
    });

    remoteStorage.on('ready', async () => {
      console.log('[RemoteStorage] ready');
      dispatch({
        type: ACTIONS.UPDATE_RS_STATUS,
        payload: true,
      });
      const notes = await remoteStorageClient.getFile('notes.json');
      try {
        const data = JSON.parse(notes.data);
        dispatch({
          type: ACTIONS.UPDATE_NOTE,
          payload: Object.values(data),
          isInit: true,
        });
      } catch (_err) { }
    });
  }, [dispatch]);

  return (
    <>
      <Editor noteId={0} />
    </>
  );
}
