import React from "react";

function Exclusive({ exclusive }) {
	return (
		<div>
			<section className="text-gray-900 body-font bg-gradient">
				<h1 className="text-center pt-4  text-4xl font-bold uppercase">
					Exclusive products Only on Red Market!
				</h1>
				{exclusive.map((item) => (
					<div
						key={item._id}
						className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
					>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 ml-10 md:mb-0">
							<picture>
								<img
									className="object-cover object-center rounded lg:h-[400px] lg:w-[450px]"
									alt="hero"
									src={`${item.img_url}`}
								/>
							</picture>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								{item.title}
							</h1>
							<p className="mb-8 leading-relaxed ">{item.meta_desc}</p>
							<div className="flex justify-center">
								<button className="inline-flex text-white hover:scale-110 transition-all duration-200 border-0 py-2 px-6 focus:outline-none bg-red-400 hover:bg-red-500 rounded-xl text-lg">
									View Product
								</button>
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default Exclusive;
