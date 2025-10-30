import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ onLogin }) => {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-center lg:justify-between">
				<LoginForm onLogin={onLogin} />
				<div className="hidden lg:block relative">
					<img
						src="/image2.png"
						alt="Decorative"
						className="rounded-lg h-[450px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
