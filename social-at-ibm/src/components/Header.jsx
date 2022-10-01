import './Header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__title">
                <h1>IBM Social</h1>
            </div>
        </div>
    )
}