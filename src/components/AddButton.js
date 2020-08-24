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

const AddButton = (props) => {
  const { buttonLabel, className, content } = props;

  const [modal, setModal] = useState(false);
  const [valueCollected, setValue] = useState("");

  const toggle = () => {
    setModal(!modal);
    setValue("");
  };
  const final = () => {
    content(valueCollected);
    setValue("");
    toggle();
  };

  const valueGetter = (event) => {
    setValue(event.target.value);
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
              <Label for="fileName">Name:</Label>
              <Input
                type="text"
                name="name"
                id="fileName"
                value={valueCollected}
                onChange={valueGetter}
                placeholder="Enter the folder name"
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
