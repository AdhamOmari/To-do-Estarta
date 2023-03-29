import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_Data,
  deleteTodo,
  Done_action,
  Edit_Data
} from '../../redux/Todo/action'

// style
import style from './style.module.css'

const Todo = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.AddToDoReducer)
  console.log(todos)

  const [task, setTask] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [newName, setNewName] = useState('')

  const handelSubmit = () => {
    console.log(task)
    if (editIndex !== null) {
      dispatch(Edit_Data(editIndex, newName))
      setEditIndex(null)
      setNewName('')
    } else {
      dispatch(ADD_Data(task))
      setTask('')
    }
  }

  const handleDelete = index => {
    if (editIndex === index) {
      dispatch(Edit_Data(editIndex, newName))
      setEditIndex(null)
      setNewName('')
    } else {
      dispatch(deleteTodo(index))
    }
  }

  const handleEdit = index => {
    if (editIndex === index) {
      dispatch(Edit_Data(editIndex, newName))
      setEditIndex(null)
      setNewName('')
    } else {
      setEditIndex(index)
      setNewName(todos[index]?.name)
    }
  }

  const handleDone = index => {
    dispatch(Done_action(index))
  }

  return (
    <div className={style['form-container']}>
      <form>
        <label className={style['form-label']}>
          Task
          <input
            className={style['form-input']}
            type='text'
            name='name'
            value={task}
            onChange={e => setTask(e.target.value)}
          />
        </label>
        <input
          className={style['form-button']}
          type='button'
          value={editIndex !== null ? 'Save' : 'Submit'}
          onClick={handelSubmit}
        />
      </form>

      <div className={style['card-container']}>
        {todos?.map((item, index) => (
          <div key={index} className={style.card}>
            {editIndex === index ? (
              <input
                className={style['form-input']}
                type='text'
                value={newName}
                onChange={e => setNewName(e.target.value)}
              />
            ) : item.done ? (
              <div>{item?.name}</div>
            ) : (
              <>
                <div>{item?.name}</div>
                <div className={style['button-container']}>
                  <button
                    className={`${style.btn} ${style['btn-done']}`}
                    disabled={item.done}
                    onClick={() => handleDone(index)}
                  >
                    Done
                  </button>
                  <button
                    className={`${style.btn} ${style['btn-delete']} ${
                      editIndex === index ? style['btn-save'] : ''
                    }`}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>

                  {editIndex !== index && (
                    <button
                      className={`${style.btn} ${style['btn-edit']}`}
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                  {editIndex === index && (
                    <button
                      className={`${style.btn} ${style['btn-edit']}`}
                      onClick={() => handleEdit(index)}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
