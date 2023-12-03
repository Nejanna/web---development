const Navbar = () => {
    return(
    <nav className="nav">
        <dir className="container">
            <dir className = "nav-row">
                <div className="logo">
                <a href="./index.html" ><strong>SHOP</strong></a>
                </div>
                <dir >
                <ul className="nav-list">
                    <li className="nav-list_item"><a href="./index.html" className="">Home</a></li>
                    <li className="nav-list_item"><a href="/products" className="">Products</a></li>
                                  
                </ul>
                </dir>
            </dir>
        </dir>
</nav>
);
}
export default Navbar;