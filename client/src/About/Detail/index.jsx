import React from "react"

import { useParams } from "react-router-dom"

const Detail= () => {
	const aboutData = [
	  {
	    slug: "about-app",
	    title: "About the App",
	    description:
	      "One day this may actually provide value related to getting housing details and analysis on a per city basis.",
	  },
	  {
	    slug: "about-author",
	    title: "About the Author",
	    description:
	      "This is an app..",
	  },
	]

	const { slug } = useParams()

	const aboutContent = aboutData.find(item => item.slug === slug)


	return (
		<div className="main__content">
			<h1>{aboutContent.title}</h1>
			<p>{aboutContent.description}</p>
		</div>
	)
}

export default Detail