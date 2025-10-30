import React, { useState } from "react";
import { validatePassword } from "../utils/validation";
import { TbBrandGoogle, TbBrandTwitter } from "react-icons/tb";
import { LuLinkedin, LuFacebook } from "react-icons/lu";

const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({ username: "", password: "" });

	const handleSubmit = () => {
		const newErrors = { username: "", password: "" };

		if (!username.trim()) {
			newErrors.username = "Username or email is required";
		}

		const passwordError = validatePassword(password);
		if (passwordError) {
			newErrors.password = passwordError;
		}

		setErrors(newErrors);

		if (!newErrors.username && !newErrors.password) {
			onLogin();
		}
	};

	return (
		<div className="w-full max-w-md">
			<h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
			<p className="text-gray-600 mb-8">
				New user?{" "}
				<a href="#" className="text-blue-600 hover:underline">
					Create an account
				</a>
			</p>

			<div className="space-y-4">
				<div>
					<input
						type="text"
						placeholder="Username or email"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="w-full px-4 py-3 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
					/>
					{errors.username && (
						<p className="text-red-500 text-sm mt-1">
							{errors.username}
						</p>
					)}
				</div>

				<div>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-3 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
					/>
					{errors.password && (
						<p className="text-red-500 text-sm mt-1">
							{errors.password}
						</p>
					)}
				</div>

				<div className="flex items-center">
					<input
						type="checkbox"
						id="keepSignedIn"
						className="w-4 h-4 border-2 border-gray-300 rounded"
					/>
					<label
						htmlFor="keepSignedIn"
						className="ml-2 text-gray-700"
					>
						Keep me signed in
					</label>
				</div>

				<button
					onClick={handleSubmit}
					className="w-full bg-gray-800 text-white py-3 hover:bg-gray-700 transition-colors font-medium"
				>
					Sign In
				</button>
			</div>

			<div className="mt-8 mb-6">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300"></div>
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-4 bg-gray-50 text-[#3D3D3D] font-bold">
							Or Sign In With
						</span>
					</div>
				</div>
			</div>

			<div className="flex gap-4 justify-center">
				<button className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100">
					<TbBrandGoogle className="w-8 h-8" />
				</button>
				<button className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100">
					<LuFacebook className="w-8 h-8" />
				</button>
				<button className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100">
					<LuLinkedin className="w-8 h-8" />
				</button>
				<button className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100">
					<TbBrandTwitter className="w-8 h-8" />
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
