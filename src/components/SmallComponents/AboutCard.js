import React from 'react'
import '../component.css'

function AboutCard({ Title, Description, Link}) {


  return (
    <div className="px-4 py-5 my-5 bg-slate-100 text-slate-800 rounded-4xl w-84 lg:w-96 About ">
        <h1 className="font-bold text-2xl my-4">{Title}</h1>
        <p className="text-sm lg:text-md">{Description}</p>
    </div>
  )
}

export default AboutCard