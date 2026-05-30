import logo from "../assets/logo";
const blog = {
  header: {
    title: "My Personal Blog",
    subtitle: "Thoughts, stories and ideas",
  },
  about: {
    name: "Alex Johnson",
    bio: "Hi! I'm a software developer and writer passionate about technology, design, and the intersection of the two. I started this blog to share what I learn along the way.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  articles: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 15, 2026",
      author: "Alex Johnson",
      summary:
        "React is a powerful JavaScript library for building user interfaces. In this post, we walk through the core concepts: components, props, and state — and why they make frontend development so much more manageable.",
    },
    {
      id: 2,
      title: "Understanding Props and State",
      date: "May 20, 2026",
      author: "Alex Johnson",
      summary:
        "Props and state are two fundamental concepts in React. Props flow down from parent to child components, while state lives inside a component and drives re-renders. Knowing the difference is key to writing clean React code.",
    },
    {
      id: 3,
      title: "Building Reusable Components",
      date: "May 25, 2026",
      author: "Alex Johnson",
      summary:
        "One of React's biggest strengths is composability. In this post, we explore patterns for designing components that can be reused across your app — and how thinking in components changes the way you approach UI problems.",
    },
  ],
};

export default blog;
