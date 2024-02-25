const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Abdalelah blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/" style={{
                    color : 'white',
                    backgroundColor: '#f1356d',
                    borderRadius : '8px'
                }}>New Blog</a>
            </div>
        </nav>

     );
}
 
export default NavBar;