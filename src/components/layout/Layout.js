import React from "react"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Layout.scss"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  const [canRender, setCanRender] = React.useState(false)

  React.useEffect(() => {
    setCanRender(true)
  }, [])

  if(!canRender) {
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

export default Layout
