import React from 'react'
import './HeroSection.css'
import Button from '../button/Button'

function HeroSection() {
  return (
    	<div class = "main ">
			<div className="main-text-container container-fluid margin-inline-auto">
				<h1>Hello, I'm</h1>
				<h1>Anu</h1>
				<h1>UI Developer. UX Desinger. Problem Solver.</h1>

				<div className="main-button-container container-fluid ">
					<Button textColor="white">Info</Button>
					<Button textColor='white'>Portfolio</Button>
				</div>

			</div>
		</div>
  )
}

export default HeroSection