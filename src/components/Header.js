import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className='header'>
            <h2>Nice to meet-me</h2>
    <Link to='/'>{`< Back to the Conference Room`}</Link>
        </div>
    )
}

export default Header