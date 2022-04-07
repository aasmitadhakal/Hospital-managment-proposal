import React from 'react'
import {Routes,Route} from 'react-router-dom'
import innerContent from '../innerContent'
import Tabs from '../Tabs'
import Dashboard from './Dashboard'
import Setting from './Setting'


function Rouutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<innerContent />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='tabs' element={< Tabs />} />
        <Route path='setting' element={< Setting />} />



            </Routes>
    </div>
  )
}

export default Rouutes