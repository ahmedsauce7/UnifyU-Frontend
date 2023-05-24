import React from 'react'
import './RightSide.css'
import Icon1 from '../../assets/logo.png'
import Icon2 from '../../assets/logo.png'
import Icon3 from '../../assets/logo.png'
import Icon4 from '../../assets/logo.png'
import { UilSetting } from '@iconscout/react-unicons'


const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img className='Icons' src={Icon1} alt="Icon1" />
            <UilSetting/>
            <img className='Icons' src={Icon2} alt="Icon2" />
            <img className='Icons' src={Icon3} alt="Icon2" />

        </div>
    </div>
  )
}

export default RightSide