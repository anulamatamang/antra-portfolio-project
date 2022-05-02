import React from 'react'
import Button from '../button/Button'
import './About.css'

function About() {
  return (
    <div className = "about text-dark" >
		
				<div className="about-container">

			
				<div className="about-header">
					<h2>About Me</h2>
					<em>Sharing a little bit of my story</em>
				</div>
				<div className="about-general-overview">
					<h3>General Overview</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione nostrum iure maiores ducimus nobis, repellendus accusantium aliquam? Aut modi laboriosam est culpa porro nihil soluta, impedit illum quas. Enim.
					Error numquam eos accusantium maxime, libero asperiores, delectus nulla dolorem praesentium dolores commodi reprehenderit doloribus? Est tenetur dolorum asperiores laboriosam quaerat reprehenderit a? Tempora, delectus? Rerum reiciendis voluptas cum culpa!
					riatur ad numquam. Placeat delectus unde ex exercitationem quod nesciunt architecto quaerat laudantium quidem omnis, beatae nulla? Nemo numquam cupiditate quisquam obcaecati commodi.
					im quaerat explicabo doloremque, nam cum? Fugiat voluptatem nulla expedita sequi harum eum reprehenderit repellat provident hic placeat.
					</p>
				</div>

				<div className="about-statistics">
					<h3>Statistics</h3>
					<em>And for those that don't fancy reading</em>

					<div className="statistics-details">
						<p>Male, 200 years old.</p>
						<p>Five feet 110 inches</p>
						<p>Favourite fonts: Roboto</p>
						<p>Loves to learn new things</p>
					</div>
				</div>
				<div className="about-contact ">
					<Button>Contact</Button>
				</div>
			</div>

	</div>

  )
}

export default About