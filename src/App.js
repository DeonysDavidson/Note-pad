import React, { useState } from "react";
import "./styles.css";
import { Container, Row, Col } from "reactstrap";
import FolderTab from "./components/FolderTab";
import TaskTab from "./components/TaskTab";
import TaskContent from "./components/TaskContent";
import Heading from "./components/Heading";

export default function App() {
  const [isSelected, setSelected] = useState(0);
  const [fileSelected, setFileSelected] = useState(0);
  const [contentState, setContentState] = useState("");

  if (!JSON.parse(localStorage.getItem("folders"))) {
    localStorage.setItem("folders", "[]");
  }

  const [folders, setFolders] = useState(
    JSON.parse(localStorage.getItem("folders"))
  );

  const folder = JSON.parse(localStorage.getItem("folders"));
  const [fileState, setFileState] = useState(folder[isSelected]?.tasks);

  return (
    <div className="App">
      <Heading />
      <Container fluid={true}>
        <Row xs="4">
          <Col className="folderTab">
            <FolderTab
              folderSelection={setSelected}
              folderState={folders}
              setFolderState={setFolders}
              setFileState={setFileState}
              setSelected={setSelected}
              isSelected={isSelected}
            />
          </Col>
          <Col className="fileTab ">
            <TaskTab
              selection={isSelected}
              folderState={folders}
              setFolderState={setFolders}
              fileState={fileState}
              setFileState={setFileState}
              setFileSelected={setFileSelected}
              fileSelected={fileSelected}
            />
          </Col>
          <Col className="textArea" xs="6">
            <TaskContent
              fileSelected={fileSelected}
              contentState={contentState}
              setContentState={setContentState}
              isSelected={isSelected}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
