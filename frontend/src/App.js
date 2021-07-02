import React, { useCallback, useEffect, useState } from "react";
import Modal from './components/Modal';
import TotalForm from "./components/TotalForm";
import { Select_TodoList, Update_TodoList, Delete_TodoList }  from "./lib/api";


const App = () => {
  // InitialState
  const [activeItem, setActiveItem] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });
  const [modal, setModal] = useState(false);
  const [viewCompleted, setViewCompeleted] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // 데이터 불러오기.
  const SelectTodoList = useCallback(() => {
    async function postAPI(){
      const newtodoList = await Select_TodoList();
      setTodoList(newtodoList);
    }
    postAPI();
  }, []);

  useEffect(() => {
    SelectTodoList();
  }, [SelectTodoList]);

  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  // onChange 이벤트
  const handleChange = (e) => {
    e.persist();

    const { name, value } = e.target;
    let value_ = value;

    if (e.target.type === "checkbox") {
      value_ = e.target.checked;
    }

    setActiveItem((prevState) => ({
      ...prevState,
      [name]: value_,
    }));
  };

  // onSubmit 이벤트
  //'save'버튼 클릭 시, 동작.
  const SaveItem = useCallback(item => {
    toggle();
    Update_TodoList(item);
  }, [toggle])


  // onDelete 이벤트
  // 특정 데이터 삭제
  const DeleteItem = useCallback((item) => {
    Delete_TodoList(item);
  }, []);

  // 'Add Task' 버튼 클릭 시, 동작
  const CreateItem = useCallback(() => {
    const item = {
      title: "",
      description: "",
      completed: false,
    };
    setActiveItem(item);
    setModal(true);
  }, []);

  // 'Edit' 버튼 클릭 시, 동작
  const EditItem = useCallback((item) => {
    setActiveItem(item);
    setModal(true);
  }, []);

  const DisplayCompleted = useCallback((status) => {
    if (status) {
      setViewCompeleted(true);
    } 
    else {
      setViewCompeleted(false);
    }
  }, []);

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <TotalForm
        todoList={todoList}
        viewCompleted={viewCompleted}
        DisplayCompleted={DisplayCompleted}
        CreateItem={CreateItem}
        EditItem={EditItem}
        DeleteItem={DeleteItem}
      />
      {modal ? (
        <Modal
          activeItem={activeItem}
          toggle={toggle}
          onSave={SaveItem}
          onChange={handleChange}
        />
      ) : null}
    </main>
  );
}

export default App;
