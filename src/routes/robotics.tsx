import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/TopicPage";

export const Route = createFileRoute("/robotics")({
  head: () => ({
    meta: [
      { title: "Robotics — Nexus_01" },
      { name: "description", content: "Robotics projects: autonomous systems, embedded firmware, and mechanical builds." },
      { property: "og:title", content: "Robotics — Nexus_01" },
      { property: "og:description", content: "Autonomous systems, embedded firmware, and mechanical builds." },
    ],
  }),
  component: RoboticsPage,
});

function RoboticsPage() {
  return (
    <TopicPage
      code="// SECTOR_A · ROBOTICS"
      title="Robotics"
      tagline="Mechanical minds & autonomous systems"
      intro="From quadruped locomotion to swarm coordination, I build machines that think with their joints. Below: select transmissions from the workshop."
      items={[
        {
          meta: "01 · 2025",
          title: "Quadruped Gait Controller",
          description: "Reinforcement-learned trotting policy deployed on a custom 12-DOF quadruped. Sim-to-real transfer with domain randomization; field-tested across gravel and grass.",
        },
        {
          meta: "02 · 2024",
          title: "SLAM-equipped Rover",
          description: "ROS2 + RPLidar A2 + a Jetson Orin. Builds occupancy maps of unknown indoor environments and navigates to user-tagged waypoints autonomously.",
        },
        {
          meta: "03 · 2024",
          title: "Swarm of Tabletop Bots",
          description: "Eight ESP32-powered micro-bots communicating over ESP-NOW, executing flocking and shape-formation behaviors with onboard IMU feedback.",
        },
        {
          meta: "04 · 2023",
          title: "Tactile Gripper",
          description: "Soft silicone fingers wrapped with capacitive sensors, capable of grasping objects from a feather to a wrench without crushing either.",
        },
      ]}
    />
  );
}
