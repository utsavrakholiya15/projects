import React, { useEffect, useRef, useState } from "react";
import "./todo.scss";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { getData, setData } from "../../common/storage";
export default function ToDo() {
  const btnRef = useRef();
  const [disableAdd, setdisableAdd] = useState(true);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [tasks, settasks] = useState([]);
  const [adderShow, setadderShow] = useState(false);
  const [darkMode, setdarkMode] = useState(true);
  const [newTask, setnewTask] = useState({
    task: "",
    summary: "",
  });
  useEffect(() => {
    let data = getData("tasks") || [];
    settasks(data);
  }, [reloadFlag]);
  const reload = () => {
    setReloadFlag((pre) => !pre);
  };
  const clearInputs = () => {
    setnewTask({
      task: "",
      summary: "",
    });
  };
  const handleOnNewTask = (ev) => {
    let data = getData("tasks") || [];
    data.push(newTask);
    setData("tasks", data);
    clearInputs();
    setadderShow(false);
    reload();
  };
  const handleOnType = (ev) => {
    let task = {
      ...newTask,
      [ev.target.name]: `${ev.target.value}`,
    };

    setnewTask(task);
    if (ev.target.name === "task") {
      if (ev.target.value.length > 0) {
        setdisableAdd(false);
      } else {
        setdisableAdd(true);
      }
    }
  };
  const handleOnDelete = (ev, index) => {
    let newData = tasks.filter((el, i) => i != index);
    setData("tasks", newData);
    reload();
  };
  return (
    <div className={`todo ${!darkMode ? "todo-light" : ""}`}>
      <div className="container">
        <div className="todo-title">
          <h2>My Todo</h2>
        </div>
        <div className="todo-btn">
          <button
            onClick={() => {
              setadderShow(true);
            }}
          >
            <span>
              <IoAddOutline className="plus" />
            </span>
            New task
          </button>
        </div>
        <div className="todo-list">
          <div className="todo-list-map">
            {tasks.length > 0 ? (
              tasks.map((el, i) => {
                return (
                  <div key={i} className="todo-list-item">
                    <div className="todo-list-task">
                      <div className="todo-list-flex">
                        <span>{i + 1}.</span>
                        <p>{el.task}</p>
                      </div>
                      <div
                        onClick={(ev) => handleOnDelete(ev, i)}
                        className="todo-list-delete"
                      >
                        <MdOutlineDelete />
                      </div>
                    </div>
                    <p className="summary">{el.summary}</p>
                  </div>
                );
              })
            ) : (
              <p>No task to do</p>
            )}
          </div>
        </div>
        {adderShow && (
          <div className="task-adder-bg">
            <div className="task-adder">
              <div className="input-div">
                <label>
                  Task<span>*</span>
                </label>
                <input
                  type="text"
                  value={newTask.task}
                  name="task"
                  autocomplete="off"
                  onChange={handleOnType}
                ></input>
              </div>
              <div className="input-div">
                <label>
                  Summary<span>*</span>
                </label>
                <input
                  type="text"
                  value={newTask.summary}
                  name="summary"
                  autocomplete="off"
                  placeholder="(Optional)"
                  onChange={handleOnType}
                ></input>
              </div>
              <div className="task-adder-buttons">
                <button
                  onClick={() => {
                    setnewTask({ task: "", summary: "" });
                    setadderShow(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  ref={btnRef}
                  disabled={disableAdd}
                  onClick={handleOnNewTask}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
