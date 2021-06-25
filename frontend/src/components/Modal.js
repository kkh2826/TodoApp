import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const CustomModal = ({ activeItem, toggle, onSave, onChange }) => {

    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                <Label for="todo-title">Title</Label>
                <Input
                    type="text"
                    id="todo-title"
                    name="title"
                    value={activeItem.title}
                    onChange={onChange}
                    placeholder="Enter Todo Title"
                />
                </FormGroup>
                <FormGroup>
                <Label for="todo-description">Description</Label>
                <Input
                    type="text"
                    id="todo-description"
                    name="description"
                    value={activeItem.description}
                    onChange={onChange}
                    placeholder="Enter Todo description"
                />
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input
                    type="checkbox"
                    name="completed"
                    checked={activeItem.completed}
                    onChange={onChange}
                    />
                    Completed
                </Label>
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button
                color="success"
                onClick={() => onSave(activeItem)}
            >
                Save
            </Button>
            </ModalFooter>
      </Modal>
    )
}

export default CustomModal;
