// the list of users on the site
const Users = [
  {
    name: "Tanjiro Kamado",
    pic:"pfps/Tanjiro-pfp.jpg",
    bio: "Carries the weight of his entire family on his back and still bows to thank you."
  },
  {
    name: "Zenitsu Agatsuma",
    pic:"pfps/zenitsu-pfp.jpg",
    bio: "Cries before every fight and somehow still wins — just never while conscious."
  },
  {
    name: "Giyu Tomioka",
    pic:"pfps/Giyuu-Tomokua.jpg",
    bio: "Zero social awareness, maximum water breathing — don't invite him to parties."
  },
  {
    name: "Sanemi Shinazugawa",
    pic:"pfps/Sanemi-pfp.jpg",
    bio: "His personality is 90% aggression and 10% aggression but with more scars."
  },
  {
    name: "Nezuko Kamado",
    pic:"pfps/nezuko-pfp.jpg",
    bio: "Fits in a box, bites demons, never complains — the most functional person in the corps."
  }
]
// Displaying all users
function showUsers(arr){
//  We are using arr in this function to make it more dynamic and optmizied rather than hard -coding the User list we created above
arr.forEach( Users => {
// creating outer card div
const card =  document.createElement("div");
card.classList.add("card")
// creating an image
const img = document.createElement("img");
img.src=Users.pic
img.classList.add("bgImg")
// creating the blurred layer div
const blurredLayer =  document.createElement("div");
blurredLayer.style.backgroundImage= `url(${Users.pic})`;
blurredLayer.classList.add("blurred-Layer")
// creating a content div
const content = document.createElement("div");
content.classList.add("content")
// creating the H3 and the paragraph for the pfp:
const heading =  document.createElement("h3")
heading.textContent =  Users.name
const aboutPara = document.createElement("p")
aboutPara.textContent = Users.bio
// appending the heading and the aboutPara to content:
content.appendChild(heading)
content.appendChild(aboutPara)
// Appending all to the Profile Card:
card.appendChild(img)
card.appendChild(blurredLayer)
card.appendChild(content)
// appending all to the document body
const container =  document.querySelector("#profile-container")
container.appendChild(card)
});
}
showUsers(Users)
// filtering the user according to the input
let inp  = document.querySelector(".inp")
// adding the eventlistener:
inp.addEventListener("input",()=>{
  let newUsers =Users.filter( (Users)=>{
    return Users.name.toLowerCase().startsWith(inp.value.toLowerCase())
  })
// display the correct user based on the input and if not including printing :"No Character Exists"
  document.querySelector('#profile-container').innerHTML=""
  if (newUsers.length === 0 ){
    document.querySelector("#profile-container").innerHTML=`<p style="color:#555; font-family:'Inter'; font-size:16px; margin-top:40px;">No Character Found</p>`
  } else {
    showUsers(newUsers)
  }
})

