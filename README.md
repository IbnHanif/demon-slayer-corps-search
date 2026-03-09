<p align="center">
  <img src="https://i.pinimg.com/736x/0d/9b/fe/0d9bfe1aa2a80b2fea864740711e86ec.jpg" width="100" style="border-radius:50%"/>
</p>

# 🗡️ Demon Slayer — Corps Search
A Demon Slayer themed profile search filter built with vanilla HTML, CSS and JavaScript. Search through the Hashira and main characters of the Demon Slayer Corps by name — in real time.

---

## Preview of the site:
<img width="1613" height="517" alt="image" src="https://github.com/user-attachments/assets/42e04458-81f3-4106-bea5-1c2b38c5f6a8" />
<img width="1168" height="842" alt="image" src="https://github.com/user-attachments/assets/b01a55a9-de9c-4d13-ad23-abfd88693495" />

## ✨ Features
- 🔍 Real-time search filter — results update as you type
- 🃏 Profile cards with character art, name and bio
- 🌫️ Blurred gradient overlay on each card
- 🎴 Smooth hover animations — cards lift and scale on hover
- ❌ "No Character Found" message for unmatched queries
- ➕ **Add Character** — dynamically add any character with a name, bio and image (upload local file or paste URL). New characters are searchable instantly without page reload
- 📱 Responsive card layout with flex-wrap

---

## 🧱 Built With
- **HTML5** — semantic structure
- **CSS3** — custom card styling, blur effects, transitions
- **Tailwind CSS** (CDN) — layout utilities
- **Vanilla JavaScript** — DOM manipulation, array filtering, dynamic rendering

---

## 🚀 Getting Started

### Run Locally
```bash
git clone https://github.com/IbnHanif/demon-slayer-corps-search.git
cd demon-slayer-corps-search
```
Then just open `index.html` in your browser. No build step, no dependencies to install.

### Visit the site with...
https://ibnhanif.github.io/demon-slayer-corps-search/

---

## 📁 Project Structure
```
SearchFilter/
├── index.html        # Main HTML structure
├── style.css         # All styles including card, hover, search bar, modal
├── script.js         # User data, DOM rendering, search filter, add character logic
└── pfps/             # Character profile images
    ├── Tanjiro-pfp.jpg
    ├── zenitsu-pfp.jpg
    ├── Giyuu-Tomokua.jpg
    ├── Sanemi-pfp.jpg
    └── nezuko-pfp.jpg
```

---

## 🧍 Characters Included
| Character | Corps Role |
|-----------|-----------|
| Tanjiro Kamado | Demon Slayer |
| Zenitsu Agatsuma | Demon Slayer |
| Giyu Tomioka | Water Hashira |
| Sanemi Shinazugawa | Wind Hashira |
| Nezuko Kamado | Demon (ally) |

> More characters can be added live using the **+ Add Character** feature.

---

## 💡 How The Search Works
The search uses JavaScript's `.filter()` and `.startsWith()` methods on the character name. Both the input and the name are converted to lowercase before comparison so the search is case-insensitive.

```js
let newUsers = Users.filter((user) => {
  return user.name.toLowerCase().startsWith(inp.value.toLowerCase())
})
```

If no character matches, a "No Character Found" message is displayed along with an **+ Add Character** button that opens a modal to add them dynamically.

---

## 🙋 Author
**Bilal** — [@IbnHanif](https://github.com/IbnHanif)

Self-taught frontend developer. Building in public.

---

## 📄 License
MIT — use it, break it, make it yours.
