import React from 'react';

const RenderItems = ({ todoList, viewCompleted, EditItem, DeleteItem }) => {

    const newItems = todoList.filter( item => item.completed === viewCompleted )

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
              onClick={() => EditItem(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => DeleteItem(item)}
            >
              Delete
            </button>
          </span>
        </li>
      ));
}

export default RenderItems;