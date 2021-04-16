const asyncFirstFunction = input => (
	Promise.resolve(`first function input: ${input}`).then(data => `this is final then ${data}`)
);

const asyncSecondFunction = input => (
	Promise.resolve(`second function input: ${input}`)
);

asyncFirstFunction('one').then(asyncSecondFunction).then(console.log);
