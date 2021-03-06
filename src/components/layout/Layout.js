import React from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Layout.scss"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

function Layout({ children, preview }) {
  const [canRender, setCanRender] = React.useState(false)

  React.useEffect(() => {
    setCanRender(true)
  }, [])

  if (!canRender) {
    return null
  }

  return (
    <ThemeContext.Consumer>
      {theme => (
        <SimpleBar style={{ maxHeight: "100vh" }}>
          {canRender &&
            (theme.name === "dark"
              ? document.body.classList.add("dark")
              : document.body.classList.remove("dark"))}
          <div
            className={`content-wrapper${
              preview ? " content-wrapper--preview" : ""
            }`}
          >
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

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Layout
