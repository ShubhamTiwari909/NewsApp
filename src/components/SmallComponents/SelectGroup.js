import React from 'react'
import { states, IT,Programming,SocialMedia } from './ButtonLabels';

function SelectGroup({darkMode, darkModeEnabled,setQuery }) {
    return (
        <div className="flex space-x-10 buttonGroup">
            <SelectTemplate Title="States" DataOptions={states} setQuery={setQuery} darkMode={darkMode} darkModeEnabled={darkModeEnabled} />
            <SelectTemplate Title="IT" DataOptions={IT} setQuery={setQuery} darkMode={darkMode} darkModeEnabled={darkModeEnabled} />
            <SelectTemplate Title="Programming" DataOptions={Programming} setQuery={setQuery} darkMode={darkMode} darkModeEnabled={darkModeEnabled} />
            <SelectTemplate Title="Social_Media" DataOptions={SocialMedia} setQuery={setQuery} darkMode={darkMode} darkModeEnabled={darkModeEnabled} />
        </div>
    )
}


const SelectTemplate = ({Title,DataOptions,setQuery,darkMode,darkModeEnabled}) => {
    return (
        <div className={`${darkModeEnabled ? darkMode.darkModeBgColor : darkMode.lightModeBgColor}`}>
            <h1 className={`text-center text-2xl text-indigo-600 font-bold mt-5`}>{Title}</h1>
            <div className="mt-2 mb-5 flex justify-center gap-x-8">
                <select onChange={(e) => {
                    setQuery(e.target.value)
                    localStorage.setItem('Query', e.target.value);
                    window.location.reload();
                }}
                    className="py-2 px-2 rounded-xl bg-indigo-100 focus:outline-none">
                    {DataOptions.sort().map(item => {
                        return (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default SelectGroup