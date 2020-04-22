// Default export class
export default class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

// export with function name
export function showName(user) {
  console.log(`User's name is ${user.name}`);
}

export function showId(user) {
  console.log(`User's ID is ${user.id}`);
}

// export default User;
// export { showName, showId, counter, incCounter };

// export only const/var/let
export let counter = 3;
export function incCounter() {
  counter++;
}
