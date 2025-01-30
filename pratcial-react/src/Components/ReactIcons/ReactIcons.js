import React from 'react'
import {IconContext} from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';

function ReactIcons() {
  return (
    <IconContext.Provider value={{color: 'Purple', size: '160px'}}>
    <div>
      <FaReact />
      <MdAlarm />
    </div>
    </IconContext.Provider>
  )
}

export default ReactIcons
