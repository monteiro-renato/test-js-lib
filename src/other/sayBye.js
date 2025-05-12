function sayBye(personToSayByeTo) {
  if (personToSayByeTo) {
    return `Bye ${personToSayByeTo}`;
  } else {
    return `Bye Stranger`;
  }
}

exports.sayBye = sayBye;
