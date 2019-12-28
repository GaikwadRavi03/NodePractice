function emailValidator(email){
	let pat = RegExp('^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$');
	let ans = pat.test(email);
	return (ans == true)
}

module.exports = emailValidator;
