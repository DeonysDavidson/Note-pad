import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";
import AddButton from "./AddButton";

const FolderTab = ({
  folderSelection,
  folderState,
  setFolderState,
  setFileState,
  setSelected,
  isSelected
}) => {
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    if (folderName) {
      let temp = [...folderState];
      temp.push({ id: folderState.length, name: folderName, tasks: [] });
      localStorage.setItem("folders", JSON.stringify(temp));
      setFolderState(JSON.parse(localStorage.getItem("folders")));
    }
  }, [folderName]);

  const deleteFolder = (index) => {
    const temp = JSON.parse(localStorage.getItem("folders"));
    temp.splice(index, 1);
    localStorage.setItem("folders", JSON.stringify(temp));
    setFolderState(JSON.parse(localStorage.getItem("folders")));
    const folder = JSON.parse(localStorage.getItem("folders"));
    setSelected(0);
    setFileState(folder[isSelected]?.tasks);
  };

  const selection = (index) => {
    folderSelection(index);
  };

  return (
    <>
      <div class="label other">
        <h5>Folders:</h5>
        <AddButton buttonLabel="Add Folder" content={setFolderName} />
      </div>

      <ListGroup>
        {folderState.map((e, eIndex) => {
          return (
            <ListGroupItem
              className="justify-content-between"
              tag="button"
              onClick={() => selection(eIndex)}
              action
              active={isSelected === eIndex}
            >
              {e.name}
              <Badge className="delete" pill>
                {e.tasks.length}
              </Badge>{" "}
              <Button
                className="delete"
                color="danger"
                onClick={() => deleteFolder(eIndex)}
              >
                -
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

export default FolderTab;
