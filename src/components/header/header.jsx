import PropTypes from 'prop-types'
import './header.css'

const Header = ({ onSearchChange }) => {
    return (
        <header>
            <div className='headerContainer'>
                <div className="titulo">
                    <h1>Biblioteca Digital React</h1>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Buscar libro ..." onChange={onSearchChange} />
                    <button type="button">Buscar</button>
                </div>
            </div>
        </header>
    )
}
Header.prototype = {
    onSearchChange: PropTypes.func.isRequired
}

export default Header