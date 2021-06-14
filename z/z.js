//
function Person(first, last) {
  this.first = first
  this.last = last
}
Person.prototype.fullName = function () {
  return this.first + " " + this.last
}
Person.prototype.fullNameReversed = function () {
  return this.last + ", " + this.first
}

var s = new Person("Simon", "Willison")
s.firstNameCaps() // TypeError on line 1: s.firstNameCaps is not a function

// Person.firstNameCaps = () -> this.first.toUpperCase()
Person.prototype.firstNameCaps = function () {
  return this.first.toUpperCase()
}

var a = s.firstNameCaps() // "SIMON"
