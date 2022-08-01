import React from 'react'
import './Card.css'
function ButtonGroup({ setQuery }) {
  const buttons = ['India', 'Asia', 'Covid', 'World', 'Sports', 'Science', 'Hollywood', 'Bollywood','Bussiness','Food','IT','Govt.Of.India','Finance','Astronomy','Space']
  let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
  return (
    <div className="my-5 mx-3">
      <h1 className="text-center text-2xl text-indigo-600 font-bold my-2">Categories</h1>
      <div className="flex gap-x-8 buttonGroup">
        {buttons.map(item => {
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