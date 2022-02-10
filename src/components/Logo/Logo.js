import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';


const Logo = () => {

	return (
		<div className='pa3 ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2' style={{ width: '150px', height: '150px' }}>
        			<div className="Tilt-inner "><img style={{paddingTop: '5px'}} alt='logo' src={Brain} /> </div>
    		</Tilt>
		</div>

		);
};

export default Logo;