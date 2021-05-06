import React from 'react'
import NavItem from '../NavItem'

function Layout(props) {
    return (
        <>
        <Header/>
            {props.children}
        <Footer/>
        </>
    )
}

function Header(){
    return(
        <div className="navbar">
            <nav className="flex justify-between container mx-auto px-20">
                <div>
                    <h1 className="text-green-400 font-bold text-xl">LOGO</h1>
                </div>
                <ul className="flex">
                    <NavItem name={"Home"}/>
                    <NavItem name={"Blog"}/>
                    <NavItem name={"About"}/>
                    <NavItem name={"Contact"}/>
                </ul>
            </nav>
        </div>
    )
}
function Footer(){
    return(
        <footer className="bg-green-400">
            <div className="container mx-auto px-20 mt-5 pt-10 pb-5">
                <ul className="flex align-middle flex-col">
                    <li><a href="/" className="text-white">Home</a></li>
                    <li><a href="/" className="text-white">Blog</a></li>
                    <li><a href="/" className="text-white">About</a></li>
                    <li><a href="/" className="text-white">Contact Us</a></li>
                    <li><a href="/" className="text-white">Terms and Conditions</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Layout;
