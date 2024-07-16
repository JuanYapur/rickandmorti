import Link from "../Link/Link";
import Search from "../Search/Search";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <a className="navbar-brand text-danger w-25" href="#"> <img className="w-25" src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Image.png" alt="" />
        </a>
        <a className="navbar-brand text-danger" href="#">
          Rick & Morty
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link label={"Inicio"} url={'./'}/>
            <Link label={"Episodios"} url={'./'}/>
            <Link label={"Personajes"} url={'./'}/>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Search labels={"Buscar"}/>
              </form>
        </div>
      </div>
    </nav>
  );
} 

export default Navbar
