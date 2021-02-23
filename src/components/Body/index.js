import React from 'react';
import Image1 from '../../images/photosnap.svg';

const Body = ({ cards,addFilter }) => {
	return (
		<div className=" flex flex-col mt-16 justify-center items-center space-y-8 ">
			{cards ? (
				cards.map((card) => (
					<div
						key={card.id}
						className="flex flex-col md:flex-row justify-between bg-white border-l-4 border-white hover:border-green-600 w-5/6 md:w-8/12 rounded shadow-xl py-8 px-8 md:px-12 items-center relative mt-4 md:mt-0"
					>
						<div className="flex flex-col md:flex-row items-start md:space-x-6 w-full ">
							<img
								src={Image1}
								alt="temp"
								className="absolute transform scale-50 -top-11 left-0 md:top-0 md:left-0 md:relative md:scale-100"
							/>
							<div className="flex flex-col space-y-3 mt-4 ms:mt-0">
								<div className="flex items-center space-x-4">
									<h1 className="text-green-400 font-bold text-lg mr-3">{card.company}</h1>
									{card.new && (
										<h1 className="text-white bg-green-400 py-0.5 px-2 rounded-full font-semibold uppercase">
											New
										</h1>
									)}
									{card.featured && (
										<h1 className="text-white bg-gray-800 py-0.5 px-2  rounded-full font-semibold uppercase">
											Featured
										</h1>
									)}
								</div>
								<h1 className="text-green-400 font-bold text-xl">{card.position}</h1>
								<div className="flex space-x-2">
									<span className="font-extralight text-gray-500">{card.postedAt}</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">{card.contract}</span>
									<span className="font-extralight text-gray-500"> - </span>
									<span className="font-extralight text-gray-500">{card.location} </span>
								</div>
							</div>
							<hr className="md:hidden w-full my-4" />
						</div>
						<div className="flex flex-wrap md:flex-nowrap md:space-x-4  md:mt-0 -mb-2 md:mb-0">
							<button 
                                className="mx-2 my-2 h-8 md:my-0 md:mx-0 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100"
                                onClick={()=>{addFilter(card.role)}}
                            >
								{card.role}
							</button>
							<button 
                                className="mx-2 my-2 h-8 md:my-0 md:mx-0 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100"
                                onClick={()=>{addFilter(card.level)}}
                            >
								{card.level}
							</button>

							{card.tools.map((tool, idx) => (
								<button
									key={idx}
									className="mx-2 my-2 h-8 md:my-0 md:mx-0 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100"
                                    onClick={()=>{addFilter(tool)}}
								>
									{tool}
								</button>
							))}
							{card.languages.map((lenguage, idx) => (
								<button
									key={idx}
									className="mx-2 my-2 h-8 md:my-0 md:mx-0 font-semibold rounded py-1 px-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white focus:outline-none transition ease-out delay-100"
                                    onClick={()=>{addFilter(lenguage)}}
								>
									{lenguage}
								</button>
							))}
						</div>
					</div>
				))
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Body;
