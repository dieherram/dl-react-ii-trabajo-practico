
const Header = ({ title, subtitle }) => {
  return (
    <div className="header-container">
      <header className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold text-light">{title}</h1>
        <p className="fw-semibold text-light">{subtitle}</p>
      </header>
    </div>
  )
}

export default Header