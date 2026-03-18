<div align="center">

# ✦ OCHI DESIGN — Clone

### *A pixel-perfect, animated recreation of the [Ochi Design](https://ochi.design) presentation agency website*

<br/>

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

<br/>

> 🎓 *A personal learning project — not affiliated with Ochi Design in any way.*

<br/>

</div>

---

## 🖼️ Preview

| Hero Section |
|:---:|
| <img width="1919" height="906" alt="Screenshot 2026-03-18 190424" src="https://github.com/user-attachments/assets/3e58db95-4ff7-437a-9878-bfc3ac7a04a3" />
| Marquee + About |
|:---:|
 |<img width="1903" height="913" alt="Screenshot 2026-03-18 190433" src="https://github.com/user-attachments/assets/097698ef-9a86-47c6-b731-5555d79a33f8" />
 | Interactive Eyes |
 |:---:|
 | <img width="1906" height="917" alt="Screenshot 2026-03-18 190441" src="https://github.com/user-attachments/assets/d4b32a6c-2e8f-4653-8096-cf163660bdcc" />
 |

---

## ✨ Feature Highlights

### 🌊 Buttery Smooth Scrolling
Powered by **Locomotive Scroll** — every page transition feels like scrolling through silk. Individual sections use `data-scroll-speed` attributes to create a layered **parallax 3D depth effect**: the hero drifts at `-0.8` while the about panel floats at `+0.2`.

---

### 🧭 Smart Navbar
The navbar **hides on scroll-down, reveals on scroll-up** — driven by GSAP + ScrollTrigger. Features a frosted glass backdrop (`backdrop-blur-md bg-white/10`) and a responsive hamburger menu for mobile screens.

```js
// GSAP scroll direction detection
ScrollTrigger.create({
  onUpdate: (self) => {
    if (self.direction === -1) gsap.to(navbar, { yPercent: 0 });
    else gsap.to(navbar, { yPercent: -100 });
  }
});
```

---

### 🎬 Hero — Animated Image Reveal
Three monumental typographic lines: **"WE CREATE / EYE OPENING / PRESENTATION"**

On line two, a thumbnail image **animates from `width: 0` → `width: 9vw`** using Framer Motion — a sleek inline reveal that breaks the grid in the most satisfying way. Text uses `scale-y-[1.3]` for a tall editorial typographic presence.

---

### 🎡 Marquee — Infinite Scroll Banner
A horizontally looping ticker belt built with two Framer Motion `h1` elements, both animating `x: 0 → -100%` on an **infinite linear loop (5s)**. Text is vertically scaled (`scale-y-150`) for a bold, oversized aesthetic against deep teal `#004d43`.

> *This is the "belt loop" design — seamless, hypnotic, unstoppable.*

---

### 🟢 About — Lime-Green Editorial Panel
A punchy `#CDEA68` lime-green contrast panel that **slides over the marquee section** using negative top margin (`-mt-[12vh]`) and `rounded-t-4xl`. The stacked card overlap creates a satisfying scroll-layering effect that feels premium and intentional.

---

### 👀 Interactive Eyes — Cursor Follower
The most memorable feature. The `Eyes` component renders **animated eyeballs that track your cursor in real time** — placed on the `Active` section and floating over the CTA text in `Ready`. Playful, interactive, and deeply on-brand.

```js
// Pupil follows cursor via mousemove angle
const angle = Math.atan2(dy, dx);
pupil.style.transform = `translate(${cos * r}px, ${sin * r}px)`;
```

---

### 🗂️ Featured Work Grid
A **2-column responsive project grid** where each card scales on hover (`hover:scale-[1.05] duration-300`). Clean dot + uppercase label above each project thumbnail — a minimalist portfolio pattern that lets the work speak.

---

### 📣 Ready — Oversized CTA
Full-width lime-green section with `13vw` uppercase text: *"Ready to start the project?"*. The `Eyes` component is **absolutely centered** over the text via `translate-x/y`, creating a surreal, unmissable call-to-action.

---

### 🌑 Footer — Full Screen Layout
Dark `bg-zinc-900` full-screen footer split into two editorial columns:
- **Left**: Giant `7vw` *"Eye-Opening"* headline + Ochi SVG logo anchored to the bottom
- **Right**: *"Presentations"* heading + brand description

---

## 🗂️ Project Structure

```
src/
├── assets/            ← Images, fonts (FoundersGrotesk, NeueMontreal)
├── components/
│   ├── Navbar.jsx     ← GSAP hide/reveal on scroll
│   ├── Landing.jsx    ← Framer Motion image reveal hero
│   ├── Marquee.jsx    ← Infinite belt-loop text banner
│   ├── About.jsx      ← Lime-green editorial section
│   ├── Active.jsx     ← Full-screen eye-tracking section
│   ├── Featured.jsx   ← 2-col hover project grid
│   ├── Ready.jsx      ← CTA with eyes overlay
│   ├── Eyes.jsx       ← Cursor-tracking animated eyes 👀
│   └── Footer.jsx     ← Full-screen dark footer
└── App.jsx            ← Root + Locomotive Scroll setup
```

---

## ⚙️ Tech Stack

| Tool | Role |
|---|---|
| **React 19 + Vite** | UI framework & blazing-fast build tool |
| **Tailwind CSS v4** | Utility-first styling system |
| **Framer Motion** | Component-level animations & transitions |
| **GSAP + ScrollTrigger** | Scroll-driven animations & navbar behavior |
| **Locomotive Scroll** | Smooth inertia-based page scrolling |
| **React Icons** | Lightweight icon library |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/ochi-design-clone.git
cd ochi-design-clone

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and enjoy. 🎉

---

## 📚 What I Learned

- Setting up **Locomotive Scroll** with React refs and cleanup lifecycle
- Combining **GSAP ScrollTrigger** with scroll-direction detection
- Building **seamless CSS/JS marquees** that loop without gaps
- Implementing **real-time cursor tracking** with trigonometry (`Math.atan2`)
- Using **Framer Motion layout animations** for width-based image reveals
- Creating **stacked scroll card effects** with negative margins + border radius

---

<div align="center">

**Built with 💚 for learning purposes only.**

*This site is a personal project intended solely for demonstration and skill-building.*
*It is not associated with [Ochi Design](https://ochi.design) or any commercial entity.*

<br/>

⭐ *If this helped you learn something, drop a star!* ⭐

</div>
