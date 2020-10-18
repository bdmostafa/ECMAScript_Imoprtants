// Async function to send bulk emails to a list of users
// Creating batch of specific number of users at a time to handle huge nummber of HTTP connection that happens server down

// Main logic is: ================================
// for (let i = 0; i < 50000; i += 1) {
//   sendEmailToUsers(user[i]); // Async operation to send a email
// }

const sendingEmailtoUser = () => {
  // ...Sending email per user
};

const sendEmailToUsers = async (users) => {
  const usersLength = users.length;

  // The batch size is 500
  for (let i = 0; i < usersLength; i += 500) {
    const userBatch = users.slice(i, i + 500).map((user) => {
      return sendingEmailtoUser(user).catch((err) =>
        console.log(`Error in sending email for ${user} - ${err}`)
      );
    });

    // userBatch will have 500 or less pending promises then sending to Promise.all
    await Promise.all(userBatch).catch((err) =>
      console.log(`Error in sending email for the batch ${i} - ${err}`)
    );
  }
};

sendEmailToUsers(userLists);

// Function to fetch Github info of a user =================================
const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`);
  const githubInfo = await axios(url); // API call to get user info from Github.
  return {
    name: githubInfo.data.name,
    bio: githubInfo.data.bio,
    repos: githubInfo.data.public_repos,
  };
};

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
  const requests = names.map((name) => {
    const url = `https://api.github.com/users/${name}`;
    return fetchGithubInfo(url) // Async function that fetches the user info.
      .then((a) => {
        return a; // Returns the user info.
      });
  });
  return Promise.all(requests); // Waiting for all the requests to get resolved.
};

fetchUserInfo(["mostafabd", "bdmostafa"]).then(
  (a) => console.log(JSON.stringify(a)) // Returns as JSON mode
);
/*
[{
  "name": "Mostafa Al Mahmud",
  "bio": "Full-stack Engineer ... Node.js, Vue.js, Python ",
  "repos": 500
}, {
  "name": "Shams",
  "bio": "Realtime App builder",
  "repos": 259
}]
*/