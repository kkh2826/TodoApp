import React, { useCallback, useEffect, useState } from "react";
import Modal from './components/Modal';
import axios from 'axios';

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [activeItem, setActiveItem] = useState({
    id: '',
    title: '',
    description: '',
    completed: false
  })
  const [modal, setModal] = useState(false)
  const [viewCompleted, setViewCompeleted] = useState(false)


  // 데이터 불러오기.
  const loadData = useCallback(async () => {
    try {
      const response = await axios.get('/api/todos/');
      setTodoList(response.data);
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  // 데이터 업데이트 ( 입력, 수정)
  const updateData = useCallback(async (item) => {
    try {
      // 수정일 경우
      if (item.id) {
         axios
                .put(`/api/todos/${item.id}/`, item)
                .then(res => loadData())
                .catch(err => alert(err))

      }
      // 신규일 경우
      else{
         axios
              .post('/api/todos/', item)
              .then(res => loadData())
              .catch(err => alert(err))

      }
    }catch (err){
      alert(err)
    }

  }, [loadData])

  // 데이터 삭제하기
  const deleteData = useCallback(async (item) => {
    try {
      axios
          .delete(`/api/todos/${item.id}/`)
          .then(res => loadData())
    } catch (err) {
      alert(err)
    }
  }, [loadData])

  const toggle = () => {
    setModal(!modal)
  }

  // onChange 이벤트
 const handleChange = e => {

   e.persist();

   const { name, value } = e.target
   let value_ = value

   if (e.target.type === "checkbox"){
     value_ = e.target.checked
   }

   setActiveItem(prevState => ({
     ...prevState,
     [name]: value_
   }))

 }

  // onSubmit 이벤트
  // 'save'버튼 클릭 시, 동작.
  const handleSubmit = (item) => {
    toggle()

    updateData(item)
  }
  // onDelete 이벤트
  // 특정 데이터 삭제
  const handleDelete = item => {
    
    deleteData(item)

  }

  // 'Add Task' 버튼 클릭 시, 동작
  const createItem = () => {
    const item = {
      title: "",
      description: "",
      completed: false
    }

    setActiveItem(item)
    setModal(true)
  }

  // 'Edit' 버튼 클릭 시, 동작
  const editItem = item => {
    setActiveItem(item)
    setModal(true)
  };

  const displayCompleted = status => {
    if (status) {
      setViewCompeleted(true)
    }
    else {
      setViewCompeleted(false)
    }
  }

  // Complete / Incomplete Tab 보여주기.
  const renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  // Data 목록 보여주기.
  const renderItems = () => {
    const newItems = todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

    return (
      <main className="container">
          <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="mb-4">
                  <button
                    className="btn btn-primary"
                    onClick={createItem}
                  >
                    Add task
                  </button>
                </div>
                {renderTabList()}
                <ul className="list-group list-group-flush border-top-0">
                  {renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {modal ? (
            <Modal
              activeItem={activeItem}
              toggle={toggle}
              onSave={handleSubmit}
              onChange={handleChange}
            />
          ) : null}
        </main>
    )
  
}

export default App;
