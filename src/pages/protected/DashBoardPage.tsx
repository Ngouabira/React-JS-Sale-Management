import React from 'react'
import Sidebar from '../../components/Sidebar'

import {toast, alert, confirm} from '../../utils/sweetalert'





function DashBoardPage() {

  confirm('Example', 'Alert example', ()=>{alert('Confirmation','Fonction exécutée!')})
  return (
    
    <Sidebar/>
  )
}

export default DashBoardPage