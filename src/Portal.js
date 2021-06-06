import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
        <div>
        My Portal Componnet
       </div>,
         document.getElementById('portal-root')
    )
}

export default Portal
