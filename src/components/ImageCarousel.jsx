import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageCarousel = () => {
	const images = [
		{
			url: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg',
			title: 'Sushi',
		},
		{
			url: 'https://images.pexels.com/photos/4344429/pexels-photo-4344429.jpeg',
			title: 'Lobsters',
		},
		{
			url: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg',
			title: 'Salmon',
		},
		{
			url: 'https://images.pexels.com/photos/2456434/pexels-photo-2456434.jpeg',
			title: 'Pasta',
		},
		{
			url: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
			title: 'Chicken',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextImage = () => {
		const isLastImage = currentIndex === images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToImage = (ImageIndex) => {
		setCurrentIndex(ImageIndex);
	};

	return (
		<div className='max-w-[1400px] h-[625px] w-full m-auto py-16 px-4 relative group'>
			<div
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
				style={{ backgroundImage: `url(${images[currentIndex].url})` }}
			></div>
			{/* Left Arrow */}
			<div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevImage} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextImage} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{images.map((image, imageIndex) => (
					<div
						className='text-2xl cursor-pointer'
						key={imageIndex}
						onClick={() => goToImage(imageIndex)}
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
