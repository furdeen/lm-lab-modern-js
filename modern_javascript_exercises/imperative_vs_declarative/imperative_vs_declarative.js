// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  let longPasswords = [];
  passwords.forEach(password => {
    if (password.length >= 9) {
      longPasswords.push(password);
    }
  });
/*
  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    if (password.length >= 9) {
      longPasswords.push(password);
    }
  }
  return longPasswords;
  */
}
