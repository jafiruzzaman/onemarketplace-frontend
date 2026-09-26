// src/data/blog.data.ts

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  authorId: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export const blogs: Blog[] = [
  {
    _id: "6ab62c2c228f98fc0369d299",
    title: "Best Way to Learn Data Structures and Algorithms",
    slug: "best-way-to-learn-data-structures-and-algorithms",
    content:
      "Learning DSA requires understanding the fundamentals and solving problems consistently. Start with arrays, strings, linked lists, stacks, and queues before moving into trees, graphs, dynamic programming, and advanced algorithms.",
    tags: ["data-structure", "dsa", "algorithm"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-25T08:09:16.293Z",
    updatedAt: "2026-09-25T08:09:16.293Z",
  },
  {
    _id: "6ab62c2c228f98fc0369d300",
    title: "How to Build a Strong Software Engineering Portfolio",
    slug: "how-to-build-a-strong-software-engineering-portfolio",
    content:
      "A strong software engineering portfolio should demonstrate how you solve real problems. Instead of creating many small projects, focus on a few meaningful applications with thoughtful architecture, clean code, testing, documentation, and deployment.",
    tags: ["career", "portfolio", "software-engineering"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-23T10:20:00.000Z",
    updatedAt: "2026-09-23T10:20:00.000Z",
  },
  {
    _id: "6ab62c2c228f98fc0369d301",
    title: "REST API Design Principles Every Developer Should Know",
    slug: "rest-api-design-principles-every-developer-should-know",
    content:
      "Good API design makes applications easier to maintain, consume, and scale. Resource-oriented URLs, consistent status codes, validation, authentication, pagination, error handling, and versioning are some of the fundamentals every backend developer should understand.",
    tags: ["backend", "api", "nodejs"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-20T09:15:00.000Z",
    updatedAt: "2026-09-20T09:15:00.000Z",
  },
  {
    _id: "6ab62c2c228f98fc0369d302",
    title: "TypeScript Patterns for Large Applications",
    slug: "typescript-patterns-for-large-applications",
    content:
      "TypeScript becomes increasingly valuable as applications grow. Strong types, reusable interfaces, discriminated unions, generics, utility types, and clear module boundaries can help teams build safer and more maintainable systems.",
    tags: ["typescript", "architecture", "development"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-18T12:30:00.000Z",
    updatedAt: "2026-09-18T12:30:00.000Z",
  },
  {
    _id: "6ab62c2c228f98fc0369d303",
    title: "Understanding System Design Before Your First Interview",
    slug: "understanding-system-design-before-your-first-interview",
    content:
      "System design can feel overwhelming when you first encounter concepts such as scalability, caching, databases, queues, load balancing, and distributed systems. The best approach is to understand why each component exists before memorizing architectures.",
    tags: ["system-design", "interview", "architecture"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-15T08:45:00.000Z",
    updatedAt: "2026-09-15T08:45:00.000Z",
  },
  {
    _id: "6ab62c2c228f98fc0369d304",
    title: "From React Developer to Full-Stack Engineer",
    slug: "from-react-developer-to-full-stack-engineer",
    content:
      "Moving from frontend development into full-stack engineering requires more than learning a backend framework. Developers need to understand databases, authentication, API design, deployment, security, testing, observability, and the trade-offs behind architectural decisions.",
    tags: ["react", "full-stack", "career"],
    authorId: "6ab291f4a32051ef52adbb94",
    isPublished: true,
    createdAt: "2026-09-12T14:10:00.000Z",
    updatedAt: "2026-09-12T14:10:00.000Z",
  },
];
