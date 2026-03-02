export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo"> MyLogo</div>
            <div className="nav-links">
                <a href="#home" OnClick={(e)=> {
                    e.preventDefault();
                    document.getElementById("home").scrollIntoView({behavior:"smooth"});
                }}>Home</a>
                <a href="#about" OnClick={(e)=> {
                    e.preventDefault();
                    document.getElementById("about").scrollIntoView({behavior:"smooth"});
                }}>About Me</a>
                <a href="#projects" OnClick={(e)=> {
                    e.preventDefault();
                    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
                }}>Projects</a>
                <a href="#resume" OnClick={(e)=> {
                    e.preventDefault();
                    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
                }}>Contact Me</a>
                
                
            </div>
        </nav>
    );
}