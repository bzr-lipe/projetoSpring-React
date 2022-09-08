import logo from '../../assets/img/image 1.svg';

import './styles.css';

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container ">
            <img src={logo} alt="Logo empresa"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por <a href="https://github.com/bzr-lipe" target="_blank" className="text-light">Felipe Bezerra</a>
            </p>
        </div>
    </header>
    )
}

export default Header;