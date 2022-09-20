const { default: axios } = require("axios");
import "babel-polyfill";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios("https://api.github.com/users/jpabdou")
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.error(err)

//     })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan",
"dustinmyers",
"justsml",
"luishrd",
"bigknell"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

async function cardMaker(usernames) {
  const cardData = await axios(`https://api.github.com/users/${usernames}`)

  const cardsWrapper= document.querySelector(".cards")

  const div = document.createElement("div")
  div.className ="card"
  cardsWrapper.appendChild(div)

  const cardImg = document.createElement("img")
  cardImg.src = cardData.data.avatar_url
  div.appendChild(cardImg)

  const cardWrapper = document.createElement("div")
  cardWrapper.className = "card-info"
  div.appendChild(cardWrapper)

  const name=document.createElement("h3")
  name.className = "name"
  name.textContent=cardData.data.name
  cardWrapper.appendChild(name)

  const username=document.createElement("p")
  username.className = "username"
  username.textContent=cardData.data.login
  cardWrapper.appendChild(username)

  const location = document.createElement("p")
  location.textContent = `Location: ${cardData.data.location}`
  cardWrapper.appendChild(location)
  
  const profText = document.createElement("p")
  profText.textContent = "Profile: "
  const profile = document.createElement("a")
  profile.href = cardData.data.html_url
  profile.textContent = cardData.data.html_url
  profText.appendChild(profile)
  cardWrapper.appendChild(profText)

  const followers = document.createElement("p")
  followers.textContent = `Followers: ${cardData.data.followers}`
  cardWrapper.appendChild(followers)

  const following = document.createElement("p")
  following.textContent = `Following: ${cardData.data.following}`
  cardWrapper.appendChild(following)

  const bio = document.createElement("p")
  bio.textContent = `Bio: ${cardData.data.bio}`
  cardWrapper.appendChild(bio)
}

cardMaker("jpabdou")

followersArray.forEach(element=> cardMaker(element))
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
