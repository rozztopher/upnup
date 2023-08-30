import emailjs from "emailjs-com";
import { isValidPhoneNumber, getCountries } from "libphonenumber-js";

/* const handleFormSubmit = () => {
	const validStatus = validateForm(name, email, number);
	if (validStatus) {
		setFormError(validStatus);
	} else {
		const data = {
			name: name,
			email: email,
			company: company,
			number: number,
			industry: industry,
			values: values,
			services: services,
			message: message,
		};
		emailjs
			.send(
				"service_je0binl",
				"template_zuksvzh",
				data,
				"user_cpF77Jn35lkFuc2h8793u"
			)
			.then((res) => {
				console.log("sent");
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
 */
export function validateForm(name, email, number) {
	if (!validateName(name)) {
		return "Invalid name";
	} else if (!validateEmail(email)) {
		return "Invalid email";
	} else if (!validateNumber(number)) {
		return "Invalid phone number";
	} else {
		return "";
	}
}
export function validateName(name) {
	if (name) {
		return true;
	} else {
		return false;
	}
}
export function validateEmail(email) {
	const mailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!mailRegex.test(String(email).toLowerCase())) {
		return false;
	} else {
		return true;
	}
}
export function validateNumber(number) {
	let validNumber = isValidPhoneNumber(number);
	getCountries().forEach((country) => {
		if (isValidPhoneNumber(number, country)) {
			validNumber = true;
		}
	});
	return validNumber;
}

export function clickDecorator(cb, obj) {
	//here we check if at least one field has been selected

	//if so we activate the next button
	if (Object.values(obj).some((e) => e)) return cb;

	//else the button remain deactivated
	return null;
}
export function isAnyFieldSelected(obj) {
	return Object.values(obj).some((e) => e);
}

export function submitDecorator(
	e,
	nextClickHandler,
	perosnalInfo,
	industries,
	values,
	interests
) {
	e.preventDefault();

	let { name, company, email, tel, message } = perosnalInfo;

	const validStatus = validateForm(name, email, tel);
	if (validStatus) {
		//prevClickHandler();
		//setFormError(validStatus);
	} else {
		const data = {
			name: name,
			email: email,
			company: company,
			number: tel,
			industry: industries,
			values: values,
			services: interests,
			message: message,
		};
		emailjs
			.send(
				"service_je0binl",
				"template_zuksvzh",
				data,
				"user_cpF77Jn35lkFuc2h8793u"
			)
			.then((res) => {
				nextClickHandler();
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
