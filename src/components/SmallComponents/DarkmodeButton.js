import React from 'react'
import { BsCloudMoonFill } from 'react-icons/bs'
import { BsFillCloudSunFill } from 'react-icons/bs'

function DarkmodeButton({darkModeEnabled,darkModeTrigger }) {

  return (
    <div className="fixed top-20 right-6 md:top-24 md:right-12 lg:top-40 lg:right-2">
      <button className="px-2 py-2 bg-slate-500 rounded-full"
        onClick={darkModeTrigger}>
        {darkModeEnabled ? <BsCloudMoonFill color="white" /> : <BsFillCloudSunFill color="yellow" />}
      </button>
    </div>
  )
}

export default DarkmodeButton