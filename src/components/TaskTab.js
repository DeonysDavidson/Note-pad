import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import AddFile from "./AddFile";

const TaskTab = ({
  selection,
  folderState,
  setFolderState,
  fileState,
  setFileState,
  setFileSelected,
  fileSelected
}) => {
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const folderUpdated = JSON.parse(localStorage.getItem("folders"));
    setFileState(folderUpdated[selection]?.tasks);
  }, [selection]);

  useEffect(() => {
    const folderUpdated = JSON.parse(localStorage.getItem("folders"));
    if (fileName && folderUpdated.length > 0) {
      let temp = fileState ? [...fileState] : [];
      temp.push({
        id: fileState ? fileState.length : 0,
        title: fileName,
        content: ""
      });
      const setter = [...JSON.parse(localStorage.getItem("folders"))];
      setter[selection].tasks = temp;
      localStorage.setItem("folders", JSON.stringify(setter));
      setFileState(setter[selection].tasks);
      setFolderState(JSON.parse(localStorage.getItem("folders")));
    }
  }, [fileName]);

  const deleteFile = (index) => {
    const setter = JSON.parse(localStorage.getItem("folders"));
    let temp = setter[selection].tasks;
    temp.splice(index, 1);
    setter[selection].tasks = temp;
    localStorage.setItem("folders", JSON.stringify(setter));
    setFileState(setter[selection].tasks);
    setFolderState(JSON.parse(localStorage.getItem("folders")));
  };

  const selector = (index) => {
    setFileSelected(index);
  };

  const temp = JSON.parse(localStorage.getItem("folders"));

  return (
    <>
      <div class="label other">
        <h5>Files:</h5>
        {temp.length > 0 ? (
          <AddFile buttonLabel="Add File" title={setFileName} />
        ) : (
          ""
        )}{" "}
      </div>

      <ListGroup>
        {fileState
          ? fileState.map((e, eindex) => {
              return (
                <ListGroupItem
                  className="justify-content-between"
                  tag="button"
                  onClick={() => selector(eindex)}
                  active={fileSelected === eindex}
                >
                  {e.title}

                  <Button
                    className="deleteTask"
                    color="danger"
                    onClick={() => deleteFile(eindex)}
                  >
                    -
                  </Button>
                </ListGroupItem>
              );
            })
          : ""}
      </ListGroup>
    </>
  );
};

export default TaskTab;
