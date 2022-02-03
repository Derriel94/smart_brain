import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( { imageUrl } ) => {


	return (
		<div className="center ma">
			<div className="absolute nt2">
				<img alt="" className="linkImg pa3" src={imageUrl}/>
			</div>
		</div>
			);
}

export default FaceRecognition;