import React from 'react';
import Image1 from '../../images/photosnap.svg';

const Body = ({ data }) => {
	return (
		<div className="flex flex-col mt-16 justify-center items-center space-y-8 ">
			{!data ? (
				<>
					<div className="flex justify-between bg-white border-l-4 border-white hover:border-green-600 w-8/12 rounded shadow-xl  py-8 px-12 items-center">
						<div className="flex items-center space-x-6">
							<img src={Image1} alt="temp" />
							<div className="flex flex-col space-y-3">
								<div className="flex items-center space-x-4">
									<h1 className="text-green-400 font-bold text-lg mr-3">Title</h1>
									<h1 className="text-white bg-green-400 py-0.5 px-2 rounded-full font-semibold uppercase">
										New
									</h1>
									<h1 className="text-white bg-gray-800 py-0.5 px-2  rounded-full font-semibold uppercase">
										Featured
									</h1>
								</div>
								<h1 className="text-green-400 font-bold text-xl">Senior frontend Developer</h1>
								<div className="flex space-x-2">
									<span className="font-extralight text-gray-500">1d ago</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">FullTime</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">Usa Only</span>
								</div>
							</div>
						</div>
						<div className="flex space-x-4">
							<button className="h-8 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100">
								Tema
							</button>
							<button className="h-8 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100">
								Tema
							</button>
						</div>
					</div>
                    <div className="flex justify-between bg-white border-l-4 border-white hover:border-green-600 w-8/12 rounded shadow-xl  py-8 px-12 items-center">
						<div className="flex items-center space-x-6">
							<img src={Image1} alt="temp" />
							<div className="flex flex-col space-y-3">
								<div className="flex items-center space-x-4">
									<h1 className="text-green-400 font-bold text-lg mr-3">Title</h1>
									<h1 className="text-white bg-green-400 py-0.5 px-2 rounded-full font-semibold uppercase">
										New
									</h1>
									<h1 className="text-white bg-gray-800 py-0.5 px-2  rounded-full font-semibold uppercase">
										Featured
									</h1>
								</div>
								<h1 className="text-green-400 font-bold text-xl">Senior frontend Developer</h1>
								<div className="flex space-x-2">
									<span className="font-extralight text-gray-500">1d ago</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">FullTime</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">Usa Only</span>
								</div>
							</div>
						</div>
						<div className="flex space-x-4">
							<button className="h-8 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100">
								Tema
							</button>
							<button className="h-8 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100">
								Tema
							</button>
						</div>
					</div>
				</>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Body;
