import React from 'react'
import './Card.css'
import { buttonsCategory} from './ButtonLabels';
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
              className="px-4 py-2 bg-slate-800 text-indigo-100 rounded-full text-center ring-2 ring-offset-2 ring-indigo-400 my-3 ">
              {item}
            </button>
          )
        })}
      </div>

    
    </div>
  )
}

export default ButtonGroup