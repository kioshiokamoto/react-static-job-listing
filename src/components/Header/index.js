import React from 'react';

const Header = ({ filters,removeFilter,clearFilter }) => {
    //console.log(filters)
	return (
		<>
			<div className="flex items-end justify-center w-full h-44 bg-green-100 md:bg-pc bg-mobile">
				{filters.length>0 ? (
					<div className="flex  items-center justify-between w-5/6 md:w-8/12 h-3/4 md:h-20 bg-white rounded-xl shadow-xl transform translate-y-8 px-8 ">
						<div className="flex flex-wrap md:flex-nowrap">
							{filters.map((filter, idx) => (
								<div key={idx} className="flex rounded bg-white h-8 my-2 mx-2">
									<h1 className="font-bold  bg-green-50 py-1 px-3 text-green-600  rounded-l-lg">
										{filter}
									</h1>
									<button
										className="font-bold focus:outline-none bg-green-500 hover:bg-gray-600 py-1 px-3 text-white rounded-r-lg"
										onClick={() =>removeFilter(filter)}
									>
										X
									</button>
								</div>
							))}
						</div>
						<button
							className="font-bold focus:outline-none text-green-500 hover:underline "
							onClick={() => clearFilter()}
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
