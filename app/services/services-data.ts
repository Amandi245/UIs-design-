export const services = [
  {
    id: "branding",
    title: "Branding & Strategy",
    cardTitle: "Branding &\nStrategy",
    color: "#FCE88F",
    light: false,
    description:
      "Building impactful brand identities and strategies that connect with audiences and drive growth",
  },
  {
    id: "digital",
    title: "Digital & Web Development",
    cardTitle: "Digital & Web\nDevelopment",
    color: "#D27903",
    light: true,
    description:
      "Crafting responsive, user-friendly websites and digital solutions that elevate online presence and performance.",
  },
  {
    id: "creative",
    title: "Creative & Content",
    cardTitle: "Creative &\nContent",
    color: "#FEBCFC",
    light: false,
    description:
      "Delivering engaging content and creative visuals that inspire audiences and strengthen brand identity.",
  },
  {
    id: "marketing",
    title: "Marketing & Promotion",
    cardTitle: "Marketing &\nPromotion",
    color: "#005140",
    light: true,
    description:
      "Driving brand visibility and growth through targeted marketing strategies and impactful promotions.",
  },
] as const;
// The supplied reference repeats these details in all four sections.
export const detailDescription = services[0].description;
export const capabilities = [
  "Brand identity design",
  "Brand storytelling",
  "Market positioning strategies",
  "Strategic roadmaps for growth",
];
