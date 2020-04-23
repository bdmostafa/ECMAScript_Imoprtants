// DOM elements into variables
const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const userLists = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(form) {
  // Prevent it from submitting form
  form.preventDefault();

  if (name.value === "" || email.value === "" || phone.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 1000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${name.value}: ${email.value}: ${phone.value}`)
    );

    // Append to ul
    userLists.appendChild(li);

    // Clear fields
    name.value = "";
    email.value = "";
  }
}
