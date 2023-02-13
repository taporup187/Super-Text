import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="/"><strong>Super Text</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <div className={`form-check form-switch ms-auto text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark/Light</label>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}
