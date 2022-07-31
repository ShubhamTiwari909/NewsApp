import React from 'react'
function ButtonGroup({ setQuery }) {
  const buttons = ['India', 'Asia', 'Covid', 'World','Sports','Science','Hollywood','Bollywood']
  let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
  return (
    <div className="my-5 mx-3">
      <div className="flex flex-wrap space-x-5">
        {buttons.map(item => {
          return (
            <button key={item}
              onClick={() => {
                setQuery(item)
                localStorage.setItem('Query', item);
                window.location.reload();
              }}
              className="px-3 py-1 my-2 border-2 border-indigo-500 text-violet-600 rounded-2xl">
              {item}
            </button>
          )
        })}
      </div>
      <div className="my-5 flex justify-center">
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