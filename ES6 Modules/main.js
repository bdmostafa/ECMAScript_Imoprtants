// // U means User because it is default export
// import U, {
//   showName as showUserName,
//   userId,
//   counter,
//   incCounter,
// } from "./export_from_import.js";

// Finally import from export_from_import.js file
import {
  defExport,
  showName as showUserName,
  userId,
  counter,
  incCounter,
} from "./export_from_import.js";

// import all modules together with (*) asterisk except default export ==================
// import defExport, * as allImports from './export_from_import.js';

const user = new defExport("Mostafa", 1);
console.log(user);
showUserName(user);
userId(user);

// allImports.showUserName(user);
// allImports.showId(user);
// console.log(allImports.counter);
// allImports.incCounter;
// console.log(allImports.counter);
// console.log(allImports, defExport); // alltogether console.log

console.log(counter); // 3
incCounter();
console.log(counter); // 4
