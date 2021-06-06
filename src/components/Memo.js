import React from 'react'

function Memo() {
    return (
        <div>
            Memo Component {this.props.name}
        </div>
    )
}

export default React.memo(Memo)
