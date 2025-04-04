import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { EditorStatus } from "@milkdown/core";
import { Milkdown, useEditor } from "@milkdown/react";
import { replaceAll } from "@milkdown/kit/utils";
import { listenerCtx } from "@milkdown/kit/plugin/listener";
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/nord-dark.css";

import { ACTIONS, useUpdate } from "./StateProvider";

export default function MilkdownEditor({ note }) {
  const [lastEdit, setLastEdit] = useState(0);
  const [isEditorDefined, setIsEditorDefined] = useState(false);
  const timeoutRef = useRef();
  const dispatch = useUpdate();
  const { get } = useEditor(root => {
    const crepe = new Crepe({
      root,
      features: {
        [Crepe.Feature.ImageBlock]: false,
        [Crepe.Feature.Toolbar]: false,
        [Crepe.Feature.BlockEdit]: false,
      },
      featureConfigs: {
        [Crepe.Feature.Placeholder]: {
          text: '',
        },
      }
    });
    crepe.editor.config(ctx => {
      ctx.get(listenerCtx).markdownUpdated((_ctx, markdown, prevMarkdown) => {
        if (markdown === prevMarkdown) return;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          const time = new Date().getTime();
          setLastEdit(time);
          dispatch({
            type: ACTIONS.UPDATE_NOTE,
            payload: {
              id: note.id,
              content: markdown,
              lastEdit: time,
            },
          });
        }, 1000);
      });
    });

    crepe.editor.onStatusChange(status => {
      if (status === EditorStatus.Created) {
        setIsEditorDefined(true);
      }
    });
    return crepe;
  }
  );

  useEffect(() => {
    if (lastEdit === note.lastEdit || !isEditorDefined) return;
    const editor = get();
    editor.action(replaceAll(note.content));
  }, [note, isEditorDefined]);

  return <Milkdown />;
}
