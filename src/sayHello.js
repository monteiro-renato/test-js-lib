function sayHelloFn(personToSayHelloTo) {
  if (personToSayHelloTo) {
    return `Hello ${personToSayHelloTo}`;
  } else {
    return `Hello Stranger`;
  }
}

exports.sayHello = sayHelloFn;
