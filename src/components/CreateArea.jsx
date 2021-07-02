import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsExpand(false);
    event.preventDefault();
  }
  function handleExpand() {
    setIsExpand(true);
  }

  if (isExpand) {
    return (
      <div>
        <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
          <Zoom in={isExpand}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form className="create-note">
          <textarea
            name="content"
            onClick={handleExpand}
            value={note.content}
            placeholder="Take a note..."
            rows="1"
          />
        </form>
      </div>
    );
  }
}

export default CreateArea;
