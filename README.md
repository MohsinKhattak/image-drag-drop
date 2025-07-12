# 🃏 Drag & Drop Card Swapper

This project is a **simple and interactive drag-and-drop UI** built with **HTML, CSS (Bootstrap), and JavaScript**. It lets users visually **reorder a set of cards** by dragging one card onto another — the two cards then swap places.

> 🎓 **Built for learning purposes** – exploring DOM manipulation, drag-and-drop API, and dynamic rendering techniques.

---

## ✨ Features

- 📦 Dynamically generated cards with dummy image and text
- 🖱️ Drag any card and drop it on another to **swap positions**
- 🧠 Clear structure for easy understanding and experimentation
- 🧩 Bootstrap layout for responsive grid and styling

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (vanilla)
- [Picsum Photos](https://picsum.photos/) for dummy images

---

## 🚀 Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/image-drag-drop.git
   cd image-drag-drop


Open `index.html` in your browser.

No build tools needed — it's a plain HTML/JS project.

---

## 🧪 How It Works

- Each card is rendered dynamically using JavaScript and appended to the DOM.
- When a card is dragged, the `dragstart` event stores the dragged DOM element.
- On `drop`, the dragged card is **swapped visually** with the target card using `insertBefore()`.
- This approach updates the **visual order only** — the underlying data array remains unchanged.
