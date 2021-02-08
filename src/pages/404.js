import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Section from "../components/section/Section"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO
        title="Destination Not Found"
        description="The requested page doesn't exist - try looking somewhere else across this site!"
      />
      <Section
        type="1-column"
        title="Got Lost?"
        content="It seems like you tried to go somewhere where there's... nothing. But
          don't worry - there always is a way and so much left to see. Go give it
          a try and start all over!"
        buttonLabel="Show me the way"
        buttonLink="/"
      />
    </Layout>
  )
}
