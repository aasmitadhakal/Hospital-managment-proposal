import React from 'react'
import {Outlet} from 'react-router-dom'
import Dashboard from './Component/Dashboard'

function innerContent() {
  return (
    <div>innerContent

    <Dashboard />
      <Outlet />

    </div>
  )
}

export default innerContent