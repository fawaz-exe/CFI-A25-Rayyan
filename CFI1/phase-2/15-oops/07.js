// Javascript by default didn't have classes it was introduced.
// its a prototype based language.

// OOP = Object Oriented Programming

/**
 * What is an Object = Collection of properties and methods. It also is a key value pair.
 * 
 * .toLowerCase(), methods
 * console.log() => method;
 * 
 * new Date() => We are creating a new Object of Date class.
 * 
 * Inheritance = Inherit properties from parent.
 * Abstraction = Hide details.
 * Encapsulation = Capsule (private, public, protected)
 * Polymorphism = Poly = Many, Morph = Form/Shape => method overriding.
 */

/**
 * Polymorphism:
 * 
 * Create a base User class and an Admin subclass that overrides the getPermissions() method to show different access levels.

Requirements:
Base Class (User):

Properties: username, email

Method: getPermissions() → Returns "Regular user permissions"

Subclass (Admin):

Inherits from User

Overrides getPermissions() → Returns "Admin privileges: full access"

Test Case:

Create a User and an Admin, then call getPermissions() on both.
 */