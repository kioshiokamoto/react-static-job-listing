import React from 'react';

const Header = ({ selected }) => {
	return (
		<>
			<div className="flex items-end justify-center w-full h-44 bg-green-100 md:bg-pc bg-mobile">
				{!selected ? (
					<div className="flex items-center justify-between w-8/12 h-20 bg-white rounded-xl shadow-xl transform translate-y-8 px-8 ">
						<div className="flex ">
							<div className="flex rounded bg-white mx-3">
								<h1 
                                    className="font-bold  bg-green-50 py-1 px-3 text-green-600  rounded-l-lg"
                                >
                                    texto
                                </h1>
								<button
									className="font-bold focus:outline-none bg-green-500 hover:bg-gray-600 py-1 px-3 text-white rounded-r-lg"
									onClick={() => console.log('X')}
								>
									X
								</button>
							</div>
						</div>
						<button
							className="font-bold focus:outline-none text-green-500 hover:underline "
							onClick={() => console.log('Clear')}
						>
							Clear
						</button>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default Header;
