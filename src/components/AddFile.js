import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const AddButton = ({ buttonLabel, className, title }) => {
  const [modal, setModal] = useState(false);
  const [titleState, setTitle] = useState("");

  const toggle = () => {
    setModal(!modal);
    setTitle("");
  };

  const final = () => {
    title(titleState);
    setTitle("");
    toggle();
  };

  const titleGetter = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <Button className="Add" color="success" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>

        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="titleName">Title:</Label>
              <Input
                type="text"
                name="name"
                id="titleName"
                value={titleState}
                onChange={titleGetter}
                placeholder="Enter the File name"
              />
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={final}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddButton;
