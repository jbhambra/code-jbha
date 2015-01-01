/**
 * a) Write a constructor for the Employee type. Define the property salary for 
the Employee with a default value of 50,000. Also, provide the getSalary
prototype function for the Employee. Write a constructor for the Manager
type. Manager should inherit from the Employee. Override the Manager’s 
prototype getSalary so that the manager always gets 50% more than the 
inherited salary. Provide test code for creating the above objects and printing 
the salary information.
b) Using the module pattern, show how you would hide the employee salary
data and at the same time allow the getSalary and setSalary functions?
Provide appropriate test code for this module.
 */
window.onload = init;

function init() {
	
var x = new Employee();
console.log(x.getSalary());

console.log(x instanceof Object);
console.log(x instanceof Employee);

console.log(Object.prototype.isPrototypeOf(x));
console.log(Employee.prototype.isPrototypeOf(x));
	
var y = new Manager();
console.log(y.getSalary());

}

function Employee() {
	this.salary = 50000;
}

Employee.prototype.getSalary = function() {
	return this.salry;
}

function Manager() {
	this.salary = 0;	
}

Manager.prototype = new Employee();

Manager.prototype.getSalary = function() {
	return ((this.salary * 50/100) + this.salary);
}
