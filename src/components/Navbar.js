import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <span className="navbar-brand" >{props.title}</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About'
}