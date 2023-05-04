const Hero = () => {
	return (
		<div className='w-full  h-screen'>
			<img
				className='top-0 left-0 w-full h-screen object-cover'
				src='https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg'
				alt='/'
			/>
			<div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
			<div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
				<div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
					<p>All Inclusive</p>
					<h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
						Getaways & Private Beaches
					</h1>
					<p className='max-w-[600px] deop-shadow-2xl py-2 text-xl'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
						explicabo saepe voluptatibus cupiditate obcaecati nam quo inventore
						et, nobis qui.
					</p>
					<button className='bg-white text-black'>Reserve Now</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
