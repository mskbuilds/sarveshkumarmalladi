import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/TopicPage";

export const Route = createFileRoute("/robotics")({
  head: () => ({
    meta: [
      { title: "Robotics — Nexus_01" },
      { name: "description", content: "AI, controls, and autonomous agents: VLA models, trading bots, and ROS2/PyTorch stacks." },
      { property: "og:title", content: "Robotics — Nexus_01" },
      { property: "og:description", content: "AI-driven control, perception, and decision-making across robotic arms and trading agents." },
    ],
  }),
  component: RoboticsPage,
});

function RoboticsPage() {
  return (
    <TopicPage
      code="// SECTOR_A · ROBOTICS"
      title="Robotics"
      tagline="Intelligent systems & autonomous agents"
      intro="A workbench for AI, controls, and autonomous decision-making — from vision-language-action models steering robotic arms to trading agents reading the market. Built on ROS2, PyTorch, and Docker."
      items={[
        {
          meta: "01 · 2025",
          title: "VLA Playground",
          description: "An experimental sandbox for agentic vision-language-action models driving a robotic arm. Wires perception, language grounding, and low-level control into a single loop. Stack: ROS2, PyTorch, Docker.",
        },
        {
          meta: "02 · 2025",
          title: "Algorithmic Trading Bot",
          description: "Autonomous trading agent with ML-based signal generation, position sizing, and risk controls. Treats markets as a partially-observable environment and trades the policy live.",
        },
        {
          meta: "03 · 2024",
          title: "Vision Perception Stack",
          description: "ResNet-backed perception pipeline integrated with ROS2 for real-time scene understanding — object detection, segmentation, and pose estimation feeding downstream controllers.",
        },
        {
          meta: "04 · 2024",
          title: "Language Task Planner",
          description: "BERT-powered instruction parser that decomposes natural-language commands into structured action sequences for the arm. Bridges human intent and low-level motion primitives.",
        },
      ]}
    />
  );
}
