export const validatePassword = (pwd) => {
	const minLength = pwd.length >= 8;
	const hasCapital = /[A-Z]/.test(pwd);
	const hasNumber = /[0-9]/.test(pwd);
	const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

	if (!minLength) return "Password must be at least 8 characters long";
	if (!hasCapital) return "Password must contain at least 1 capital letter";
	if (!hasNumber) return "Password must contain at least 1 number";
	if (!hasSymbol) return "Password must contain at least 1 symbol";
	return "";
};
