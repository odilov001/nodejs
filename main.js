const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	info() {
		console.log(`My name is ${this.name} , I am ${this.age} years old`);
	}
}

const user = {
	name: "Jahongir",
	age: 21,
	info() {
		console.log(`My name is ${this.name} , I am ${this.age} years old`);
	},
};

// export default
module.exports = {
	plus,
	minus,
	multiply,
	divide,
	user,
	User,
};

