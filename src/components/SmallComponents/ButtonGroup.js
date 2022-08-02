import React from 'react'
import './Card.css'
import {buttonsCategory,states} from './ButtonLabels';
function ButtonGroup({ setQuery }) {
  return (
    <div className="my-5 mx-3">
      <h1 className="text-center text-2xl text-indigo-600 font-bold my-2">Categories</h1>
      <div className="flex gap-x-8 buttonGroup">
        {buttonsCategory.map(item => {
          return (
            <button key={item}
              onClick={() => {
                setQuery(item)
                localStorage.setItem('Query', item);
                window.location.reload();
              }}
              className="button-85 my-3 ">
              {item}
            </button>
          )
        })}
      </div>

      <h1 className="text-center text-2xl text-indigo-600 font-bold mt-5">States</h1>
      <div className="mt-2 mb-5 flex justify-center">
        <select onChange={(e) => {
          setQuery(e.target.value)
          localStorage.setItem('Query', e.target.value);
          window.location.reload();
        }}
          className="py-2 px-2 rounded-xl bg-indigo-100 focus:outline-none">
          {states.map(state => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default ButtonGroup