const Plan = () => {
	return (
		<div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
			{/* Left Side */}
			<div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
				<img
					className='row-span-3 object-cover w-full h-full p-2'
					src='https://images.unsplash.com/photo-1606017259057-527114e27826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
					alt='/'
				/>
				<img
					className='row-span-2 object-cover w-full h-full p-2'
					src='https://images.unsplash.com/photo-1682321296984-42170361c920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					alt='/'
				/>
				<img
					className='row-span-2 object-cover w-full h-full p-2'
					src='https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
					alt='/'
				/>
				<img
					className='row-span-3 object-cover w-full h-full p-2'
					src='https://images.unsplash.com/photo-1682681019683-b3ea4a00013e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					alt='/'
				/>
				<img
					className='row-span-2 object-cover w-full h-full p-2'
					src='https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
					alt='/'
				/>
			</div>
			{/* Right Side */}
			<div className='flex flex-col h-full justify-center'>
				<h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
				<p className='text-2xl py-6'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
					illo dolorum dolore tenetur sit reprehenderit!
				</p>
				<p className='pb-6'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum
					animi libero, accusantium explicabo quae reprehenderit repellat
					aliquam, officia nostrum eveniet earum sequi quidem deserunt!
				</p>
				<div>
					<button className='border-black mr-4 hover:shadow-xl'>
						Learn More
					</button>
					<button className='bg-black text-white border-black hover:shadow-xl'>
						Book Your Trip
					</button>
				</div>
			</div>
		</div>
	);
};

export default Plan;
