import React from 'react';

export default function Cards(props) {
	return (
		<>
			{props.menuData.map((curElem) => {
				return (
					<div key={Math.floor(Math.random()*99999)} class="col-lg-4 col-md-6 mb-lg-0 mb-5">
						<div class="card">
							<img src={curElem.img} alt="hi" width="100%" />
							<div class="pt-3">
								<h4>{curElem.title}</h4>
								<p>{curElem.desc}</p>
								<span>{curElem.price}</span>
								<button class="mt-4 main-btn">Order Now</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
