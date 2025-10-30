import React from "react";
import { TbBrandTwitter } from "react-icons/tb";
import { LuLinkedin, LuFacebook, LuYoutube } from "react-icons/lu";
const Footer = () => {
	return (
		<footer className="mt-16 pt-8 ">
			<div className="flex justify-center gap-4 mb-4">
				<button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100">
					<LuFacebook className="w-5 h-5 text-gray-600" />
				</button>
				<button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100">
					<TbBrandTwitter className="w-5 h-5 text-gray-600" />
				</button>
				<button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100">
					<LuLinkedin className="w-5 h-5 text-gray-600" />
				</button>
				<button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100">
					<LuYoutube className="w-5 h-5 text-gray-600" />
				</button>
			</div>
			<p className="text-center font-bold text-[13px] leading-[19px] tracking-[.03em] text-gray-600">
				example@example.com
			</p>
			<p className="text-center font-bold text-[13px] leading-[19px] tracking-[.03em] text-gray-500 mt-1">
				Copyright © 2020 Name. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
