import React, { useState } from "react";


const ImageSlider = () => {
	const slides = [1, 2, 3, 4];
	const [currentSlide, setCurrentSlide] = useState(1);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="w-full max-w-3xl mx-auto bg-[#F0F0F0] p-6 border-2 border-black  shadow-lg flex flex-col items-center">
			<div className="w-full h-[400px] flex flex-col items-center justify-center mb-4">
				<div className="bg-gray-200/70 p-4 rounded-2xl shadow-inner flex flex-col items-center gap-6">
					<div
						className="w-0 h-0 
                        border-l-[30px] border-l-transparent
                        border-r-[30px] border-r-transparent
                        border-b-[45px] border-b-gray-500"
					/>
					<div className="flex gap-8">
						<div className="w-16 h-16 bg-gray-500 rounded-md" />
						<div className="w-16 h-16 bg-gray-500 rounded-full" />
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center gap-4 w-full">
				<button
					onClick={prevSlide}
					className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
				>
					&larr;
				</button>

				<div className="flex gap-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all ${
								currentSlide === index
									? "bg-black" 
									: "bg-white" 
							}`}
						/>
					))}
				</div>

				<button
					onClick={nextSlide}
					className="text-2xl font-bold text-gray-800 hover:text-black transition-colors"
				>
					&rarr;
				</button>
			</div>
		</div>
	);
};

export default ImageSlider;
