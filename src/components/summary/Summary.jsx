import React from 'react';
import './Summary.css';
import responsiveDesign from '../../images/responsivedesign.svg';
import innovationSolutions from '../../images/innovativesolutions.svg';
import passion from '../../images/passion.svg';
import developerDesign from '../../images/developerdesign.svg';

export default function Summary() {
  return (
    <div class='summary '>
      <div className='container-fluid summary-container margin-inline-auto'>
        <div className='summary-card'>
          <div class='summary-card-img'>
            <img class='img-responsive' src={developerDesign} />
          </div>

          <div class='summary-description'>
            <h3>Development and Design</h3>
            <p>
              I aim to put my creativity to the test, designing and building
              unique, meaningful products for clients or merely for my own
              interests.
            </p>
          </div>
        </div>

        <div className='summary-card'>
          <div class='summary-card-img'>
            <img class='img-responsive' src={responsiveDesign} />
          </div>

          <div class='summary-description'>
            <h3>Responsive Layouts</h3>
            <p>
              Development and design isn't merely putting information on the
              site or preferred media outlet. I organize content and present
              information in an engaging fashion, driving new and unique layouts
              in tandem with novel solutions and cool animations.
            </p>
          </div>
        </div>

        <div className='summary-card'>
          <div class='summary-card-img'>
            <img class='img-responsive' src={innovationSolutions} />
          </div>

          <div class='summary-description'>
            <h3>Ideas and Solutions</h3>
            <p>
              There are still many problems that exist in today's society,
              including laziness. Luckily, I hope to combat these issues by
              innovating, developing easy-to-use programs, solutions, or
              products.
            </p>
          </div>
        </div>

        <div className='summary-card'>
          <div class='summary-card-img'>
            <img class='img-responsive' src={passion} />
          </div>

          <div class='summary-description'>
            <h3>Passion and Dedication</h3>
            <p>
              With my profound interest and commitment to my field of study, my
              projects rarely go unfinished and my problems are never left
              unresolved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
