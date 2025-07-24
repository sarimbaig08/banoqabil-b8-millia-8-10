import "./header.css"

function Header (){
    return(
       <div className="navbar">
        <div>Logo</div>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
       </div>
    )
}

export default Header