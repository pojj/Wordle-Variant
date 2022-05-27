import Arena from "./Arena";
import Letter from "./Letter";
import { DragPreviewImage, useDrag } from "react-dnd";

function DragDrop() { THIS IS ALL WRONG
  return (
    <>
      <Letter className="preview" />
      <Arena className="lexicon" />
    </>
  );
}

export default DragDrop;
