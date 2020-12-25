import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Section from "../components/section/Section"

const NotFoundPage = () => (
  <Layout location="Followup">
    <SEO
      title="Destination Not Found"
      description="404 Error - This page doesn't exist here."
    />
    <Section
      type="title-text"
      title="Got Lost?"
      text="<p>
        It seems like you tried to go somewhere where there's... nothing. But
        don't worry - there always is a way and so much left to see. Go give it
        a try and start all over!
      </p>"
      buttonLabel="Show me the way"
      buttonLink=""
    />
  </Layout>
)

export default NotFoundPage
