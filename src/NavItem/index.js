import React from 'react'

function NavItem(props) {
    return (
        <li>
            <a href="/" className="mx-3 px-3 py-2 hover:bg-green-400 rounded hover:text-white hover:transition hover:duration-300">
                {props.name}
            </a>
        </li>
    )
}

export default NavItem
