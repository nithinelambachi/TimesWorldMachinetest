import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<div>
			{!isAuthenticated ? (
				<LoginPage onLogin={() => setIsAuthenticated(true)} />
			) : (
				<HomePage />
			)}
		</div>
	);
}
