# Super Mario Clone - Game Specification

## Project Overview
- **Project Name**: Mario Platformer
- **Type**: 2D Platformer Game
- **Core Functionality**: Classic side-scrolling platformer with Mario-style mechanics
- **Target Users**: Casual gamers, retro game enthusiasts

## Visual & Rendering Specification

### Canvas Setup
- **Resolution**: 800x600 pixels
- **Rendering**: HTML5 Canvas 2D Context
- **Frame Rate**: 60 FPS using requestAnimationFrame

### Visual Style
- **Aesthetic**: Pixel art inspired, vibrant colors
- **Color Palette**:
  - Sky: `#5C94FC` (classic Mario blue)
  - Ground/Brick: `#C84C0C` (brown-red)
  - Mario: Red overalls `#E52521`, Tan skin `#FFB8A0`
  - Goomba: Brown `#B5895F`
  - Coin: Gold `#FFD700`
  - Pipe: Green `#00A800`

### Scene Elements
1. **Background**: Gradient sky with parallax clouds
2. **Platforms**: Brick blocks with grid pattern
3. **Ground**: Brown brick pattern
4. **Pipes**: Green decorative elements
5. **Flag Pole**: Goal marker at level end
6. **Question Blocks**: Yellow blocks (some contain coins)

## Game Mechanics

### Player (Mario)
- **Movement**: Left/Right arrow keys or A/D
- **Jump**: Spacebar or W or Up arrow
- **Physics**:
  - Gravity: 0.5 px/frame²
  - Jump velocity: -12 px/frame
  - Move speed: 5 px/frame
  - Friction: 0.8
- **Collision**: AABB collision detection
- **States**: Idle, Running, Jumping, Falling

### Enemies
1. **Goomba**: 
  - Walks left until hitting obstacle
  - Dies when stomped from above
  - Kills Mario on side collision

### Collectibles
1. **Coins**: +100 points, disappear on collection

### Level Design
- Side-scrolling level approximately 3000px wide
- Camera follows player horizontally
- Ground at bottom
- Floating platforms at various heights
- Pipes as obstacles
- Enemies placed throughout
- Flag pole at level end

## UI Elements

### HUD (Top of screen)
- **Score**: Top-left, white text
- **Coins**: Top-left, below score
- **Lives**: Top-right, Mario icon x 3

### Game States
1. **Title Screen**: Press Start prompt
2. **Playing**: Active gameplay
3. **Game Over**: Score display, restart option
4. **Level Complete**: Celebration, advance prompt

## Controls
| Action | Keys |
|--------|------|
| Move Left | ← or A |
| Move Right | → or D |
| Jump | Space, W, or ↑ |
| Start Game | Enter or Space |
| Restart | R |

## Acceptance Criteria
1. Mario can move left/right smoothly
2. Mario can jump and land on platforms
3. Gravity affects Mario when not on ground
4. Camera follows Mario through the level
5. Collision detection works with all platforms
6. Enemies walk and can be stomped
7. Coins can be collected for points
8. Score increments correctly
9. Lives decrease on death
10. Game over triggers when lives = 0
11. Level complete when reaching flag pole
12. Game can be restarted after game over
