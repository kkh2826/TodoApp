import React from 'react';
import RenderTabList from './RenderTabList';
import RenderItems from './RenderItems';


const TotalForm = ({ todoList, viewCompleted, DisplayCompleted, CreateItem, EditItem, DeleteItem }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-10 mx-auto p-0">
        <div className="card p-3">
          <div className="mb-4">
            <button className="btn btn-primary" onClick={CreateItem}>
              Add task
            </button>
          </div>
          <RenderTabList
            viewCompleted={viewCompleted}
            DisplayCompledted={DisplayCompleted}
          />
          <ul className="list-group list-group-flush border-top-0">
            <RenderItems
              todoList={todoList}
              viewCompleted={viewCompleted}
              EditItem={EditItem}
              DeleteItem={DeleteItem}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TotalForm;