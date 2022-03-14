function Nav(){

    const handleActive = (e) => {

        const activedItem = document.querySelector('.header__nav__item.active')

        activedItem.classList.remove('active')

        e.target.classList.add('active')
    }

    return(
        <div className="header__nav">
            <div className="header__nav__item active" onClick={(e) => handleActive(e)}>
                Home
            </div>

            <div className="header__nav__item" onClick={(e) => handleActive(e)}>
                Product
            </div>

            <div className="header__nav__item" onClick={(e) => handleActive(e)}>
                Blog
            </div>

            <div className="header__nav__item" onClick={(e) => handleActive(e)}>
                Contact
            </div>

            <div className="header__nav__item" onClick={(e) => handleActive(e)}>
                About
            </div>
        </div>
    )
}

export default Nav