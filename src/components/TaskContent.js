import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const TaskContent = ({
  fileSelected,
  contentState,
  setContentState,
  isSelected
}) => {
  const temp = JSON.parse(localStorage.getItem("folders"));

  setContentState(temp[isSelected]?.tasks[fileSelected]?.content);

  const contentSetter = (event) => {
    let list = JSON.parse(localStorage.getItem("folders"));
    if (list[isSelected]?.tasks[fileSelected]) {
      list[isSelected].tasks[fileSelected].content = event.target.value;
    }
    localStorage.setItem("folders", JSON.stringify(list));
    setContentState(event.target.value);
  };

  return (
    <>
      <div class="label other">
        <Label for="content">
          {" "}
          <h5>Enter Text Here :</h5>
        </Label>
      </div>
      <Form>
        <FormGroup>
          <Input
            type="textarea"
            rows="25"
            name="content"
            id="content"
            value={contentState}
            onChange={contentSetter}
          />
        </FormGroup>
      </Form>
    </>
  );
};

export default TaskContent;
