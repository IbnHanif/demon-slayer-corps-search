// the list of users on the site
const Users = [
  { name: "Tanjiro Kamado", pic:"pfps/Tanjiro-pfp.jpg", bio: "Carries the weight of his entire family on his back and still bows to thank you." },
  { name: "Zenitsu Agatsuma", pic:"pfps/zenitsu-pfp.jpg", bio: "Cries before every fight and somehow still wins — just never while conscious." },
  { name: "Giyu Tomioka", pic:"pfps/Giyuu-Tomokua.jpg", bio: "Zero social awareness, maximum water breathing — don't invite him to parties." },
  { name: "Sanemi Shinazugawa", pic:"pfps/Sanemi-pfp.jpg", bio: "His personality is 90% aggression and 10% aggression but with more scars." },
  { name: "Nezuko Kamado", pic:"pfps/nezuko-pfp.jpg", bio: "Fits in a box, bites demons, never complains — the most functional person in the corps." }
]

// Load saved characters from localStorage BEFORE rendering
const saved = localStorage.getItem('customUsers')
if (saved) Users.push(...JSON.parse(saved))

// Now render — includes both original + saved
showUsers(Users)

// Displaying all users
function showUsers(arr) {
  arr.forEach(user => {
    const card = document.createElement("div")
    card.classList.add("card")

    const img = document.createElement("img")
    img.src = user.pic
    img.classList.add("bgImg")

    const blurredLayer = document.createElement("div")
    blurredLayer.style.backgroundImage = `url(${user.pic})`
    blurredLayer.classList.add("blurred-Layer")

    const content = document.createElement("div")
    content.classList.add("content")

    const heading = document.createElement("h3")
    heading.textContent = user.name

    const aboutPara = document.createElement("p")
    aboutPara.textContent = user.bio

    content.appendChild(heading)
    content.appendChild(aboutPara)
    card.appendChild(img)
    card.appendChild(blurredLayer)
    card.appendChild(content)

    document.querySelector("#profile-container").appendChild(card)
  })
}

showUsers(Users)

// Search filter
let inp = document.querySelector(".inp")

inp.addEventListener("input", () => {
  let newUsers = Users.filter(user => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase())
  })

  document.querySelector("#profile-container").innerHTML = ""

  if (newUsers.length === 0) {
    document.querySelector("#profile-container").innerHTML = `
      <div style="text-align:center; margin-top:40px;">
        <p style="color:#555; font-family:'Inter'; font-size:16px; margin-bottom:16px;">No Character Found</p>
        <button onclick="openModal()"
          style="background:#fff; color:#000; border:none; border-radius:6px;
          padding:10px 20px; font-family:'Inter'; font-weight:700; cursor:pointer;">
          + Add Character
        </button>
      </div>`
  } else {
    showUsers(newUsers)
  }
})

// Open modal
function openModal() {
  document.querySelector("#add-modal").style.display = "flex"
}

// Close modal
document.querySelector("#close-modal").addEventListener("click", () => {
  document.querySelector("#add-modal").style.display = "none"
})

// Handle character submission
document.querySelector("#submit-character").addEventListener("click", () => {
  const name = document.querySelector("#new-name").value.trim()
  const bio = document.querySelector("#new-bio").value.trim()
  const urlInput = document.querySelector("#img-url").value.trim()
  const fileInput = document.querySelector("#img-upload").files[0]

  if (!name || !bio) { alert("Name and bio are required!"); return }

  if (fileInput) {
    const reader = new FileReader()
    reader.onload = function(e) { addNewCharacter(name, bio, e.target.result) }
    reader.readAsDataURL(fileInput)
  } else if (urlInput) {
    addNewCharacter(name, bio, urlInput)
  } else {
    alert("Please upload an image or paste an image URL!")
  }
})

// Add new character
function addNewCharacter(name, bio, pic) {
  Users.push({ name, bio, pic })
  
  // Save to localStorage every time a character is added
  localStorage.setItem('customUsers', JSON.stringify(Users))
  
  inp.value = ""
  document.querySelector("#profile-container").innerHTML = ""
  showUsers(Users)
  document.querySelector("#add-modal").style.display = "none"
  document.querySelector("#new-name").value = ""
  document.querySelector("#new-bio").value = ""
  document.querySelector("#img-url").value = ""
  document.querySelector("#img-upload").value = ""
}
