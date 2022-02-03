import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ( { imageUrl, box } ) => {
	console.log(box)

	return (
		<div className="center ma">
			<div className="absolute nt2">
				<img id="inputimage" alt="" className="linkImg pa3" src={imageUrl}/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
			);
}

export default FaceRecognition;