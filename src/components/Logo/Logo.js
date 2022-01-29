import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';


const Logo = () => {

	return (
		<div className='ma4 mt0'>
			<Tilt
   				    glareEnable={true}
                    glareMaxOpacity={0.45}
    		>								
      			 <div className='pa3' style={{ width: '150px', height: '150px' }}>
        			<img alt='logo' src={Brain} />
      			</div>
    		</Tilt>
		</div>

		);
};

export default Logo;