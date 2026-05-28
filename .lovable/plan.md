## Plan: Refocus Robotics page on AI & Controls

### Goal
Shift the Robotics page from hardware/mechanical projects to AI, controls, and autonomous systems — reflecting the user's actual work (VLA playground, trading bot, ROS2/PyTorch stack).

### Changes

**1. Update `src/routes/robotics.tsx`**

- **Tagline**: Change from "Mechanical minds & autonomous systems" to something broader like "Intelligent systems & autonomous agents" to accommodate the trading bot alongside robotics.
- **Intro paragraph**: Rewrite to frame the section around AI-driven control, perception, and decision-making — mentioning the VLA playground, trading bot, and core stack (ROS2, PyTorch, Docker).
- **Project items**: Replace all 4 hardware placeholders with AI/controls-focused entries:
  1. **VLA Playground** — Agentic vision-language-action models for robotic arm manipulation (ROS2, PyTorch, Docker)
  2. **Algorithmic Trading Bot** — Autonomous trading agent with ML-based signal generation and risk controls
  3. **Vision-Language Perception Stack** — ResNet-based visual perception pipeline integrated with ROS2 for scene understanding
  4. **LLM Task Planner** — BERT-powered natural language instruction parser that decomposes high-level commands into low-level robotic actions

- **Meta tags**: Update `description` and `og:description` to match the new AI/controls focus.

### Out of scope
- No changes to styling, layout components, or other routes (Sketches, Travel, Index)
- No structural changes to `TopicPage.tsx` — only content passed as props

### Acceptance criteria
- Robotics page reads as an AI/controls portfolio, not a hardware workshop
- All 4 items reference the user's actual stack (ROS2, ResNet, BERT, PyTorch, Docker)
- Tagline accommodates both robotics and trading work