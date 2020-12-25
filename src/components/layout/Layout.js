import React from "react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Layout.scss"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  // Index page without scrollbar
  if (location.pathname === rootPath || location === "Home") {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <>
            {document.body.classList.add("dark")}
            <div className="content-wrapper">
              <header>
                <Navbar theme={theme} size="wide" forceLight="true" />
              </header>
              <main>{children}</main>
              <Footer size="wide" forceLight="true" />
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
  // Followup page with scrollbar
  else {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <SimpleBar style={{ maxHeight: "100vh" }}>
            {theme.name === "dark"
              ? document.body.classList.add("dark")
              : document.body.classList.remove("dark")}
            <div className="content-wrapper">
              <header>
                <Navbar theme={theme} />
              </header>
              <main>{children}</main>
              <Footer />
            </div>
          </SimpleBar>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Layout
