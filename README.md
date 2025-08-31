# Development Roadmap

## Phase 1 – Core Foundations (Tech + Skeleton Game)

### Project Setup [DONE]
- Phaser + React scaffold.
- Tailwind or CSS framework for UI/menus.
- File structure: `game/`, `scenes/`, `components/`.

### Core Systems
- Basic scene setup (`Boot`, `Menu`, `Level1`, `GameOver`).
- Camera system (follow player, smooth lerp).
- Vector art pipeline (SVG → Phaser Textures).

### Player Prototype
- Simple rectangle player object with gravity & collisions.
- Movement: left/right, jump.
- Debug overlay (show hitboxes, FPS, screen coords).

---

## Phase 2 – Movement & Controls (Celeste-like feel)

### Polished Movement
- Coyote time, jump buffering.
- Variable jump height (tap vs hold).
- Wall jump / wall slide.
- Dash.
- Double Jump.
- Ledge grab + climb.

### Player Feedback
- Screen shake, dust particles (stylized).
- “Squash & stretch” scaling animations.
- Respawn system + checkpoints.

---

## Phase 3 – Puzzle Mechanics

### Basic Interactables
- Switches (toggle doors).
- Pressure plates (weight-based).
- Moving platforms.
- Breakable walls / fake floors.

### Puzzle System
- A node-based trigger system: e.g. `Switch A → Door B`.
- Scriptable in JSON for scalability.

---

## Phase 4 – World & Art Direction

### Visual Direction
- Hollow Knight–inspired: dark silhouettes, glowing highlights.
- Vector shapes for characters and backgrounds.
- Parallax scrolling layers.

### Atmosphere
- Ambient audio loops.
- Minimalist HUD (health/stamina only when needed).

---

## Phase 5 – React UI & Meta Systems

### Frontend UI
- Title screen (React-based).
- Pause menu (settings, level select).
- Dialogue system (React overlay on Phaser canvas).

### Persistence
- Save/load system (localStorage → JSON).
- Level unlock progression.

---

## Phase 6 – Polish & Release

### Testing & Balancing
- Playtest movement feel against benchmarks.
- Tune puzzle difficulty ramp.
- Optimize performance for web.

### Polish
- Final animations (camera zooms, particle trails).
- Vector art refinements.
- Accessibility options (colorblind modes, input remap).

### Deployment
- Export with Vite build → host on itch.io or personal site.