export const pagesData = [
  {
    id: 1,
    title: "Introduction",
    path: "11",
    content: [
      {
        title: "What is Express.ts?",
        text: "Express.ts is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Express.ts for additional features and optimizations.",
        path: "",
      },
      {
        title: "Main Features",
        text: "Some of the main Express.ts features include",
        path: "",
      },
      {
        title: "How to Use These Docs",
        text: "On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application",
        path: "",
      },
      {
        title: "App Router vs Pages Router",
        text: "Express.ts has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming.",
        path: "",
      },
      {
        title: "Pre-Requisite Knowledge",
        text: "Although our docs are designed to be beginner-friendly, we need to establish a baseline so that the docs can stay focused on Next.js functionality. ",
        path: "",
      },
      {
        title: "Accessibility",
        text: "For optimal accessibility when using a screen reader while reading the docs, we recommend using Firefox and NVDA, or Safari and VoiceOver.",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "Installation",
    path: "",
    content: [
      {
        title: "Automatic Installation",
        text: "We recommend starting a new Express.ts app using create-express-app, which sets up everything automatically for you. To create a project, run",
        path: "",
      },
      {
        title: "Manual Installation",
        text: "To manually create a new Express.ts app, install the required packages.",
        path: "",
      },

      {
        title: "Creating directories",
        text: "Express.ts uses file-system routing, which means the routes in your application are determined by how you structure your files.",
        path: "",
      },
      {
        title: "The App directory",
        text: "For new applications, we recommend using the App Router. This router allows you to use React's latest features and is an evolution of the Pages Router based on community feedback.",
        path: "",
      },
      {
        title: "Run the Development Server",
        text: "To manually create a new Express.ts app, install the required packages",
        path: "Run npm run dev to start the development server...",
      },
    ],
  },
  {
    id: 3,
    title: "Project Structure",
    path: "",
    content: [
      {
        title: "Express.ts Project Structure",
        text: "This page provides an overview of the project structure of a Express.ts application.",
        path: "",
      },
      {
        title: "Top-level folders",
        text: "Top-level folders are used to organize your application's code and static assets.",
        path: "",
      },
      {
        title: "Top-level files",
        text: "Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.",
        path: "",
      },
      {
        title: "Routing Conventions",
        text: "The following file conventions are used to define routes and handle metadata in the app router.",
        path: "",
      },
      {
        title: "Nested Routes",
        text: "",
        path: "",
      },
      {
        title: "Dynamic Routes",
        text: "",
        path: "",
      },
    ],
  },
];
export const DATA_FOOTER_LINKS = [
  {
    title: "Resources",
    links: [
      {
        value: "Docs",
        href: "",
      },
      {
        value: "Learn",
        href: "",
      },
      {
        value: "Showcase",
        href: "",
      },
      {
        value: "Blog",
        href: "",
      },
      {
        value: "Analytics",
        href: "",
      },
      {
        value: "Previews",
        href: "",
      },
    ],
  },
  {
    title: "More",
    links: [
      {
        value: "Commerce",
        href: "",
      },
      {
        value: "Contact Sales",
        href: "",
      },
      {
        value: "GitHub",
        href: "",
      },
      {
        value: "Releases",
        href: "",
      },
      {
        value: "Telemetry",
        href: "",
      },
    ],
  },
  {
    title: "About ",
    links: [
      {
        value: "DevWorkshop + studio",
        href: "",
      },
      {
        value: "Open Source Software",
        href: "",
      },
      {
        value: "GitHub",
        href: "",
      },
      {
        value: "Twitter",
        href: "",
      },
    ],
  },
  {
    title: "Legal ",
    links: [
      {
        value: "Privacy Policy",
        href: "",
      },
      {
        value: "Cookie Preferences",
        href: "",
      },
    ],
  },
];
export const DATA_LEARN_CARDS = [
  {
    href: "/docs",
    title: "Introduction",
    text: "Learn how to build a full-stack web application with the free, Express.ts App Router Course.",
  },
  {
    href: "/dashboard/project-structure",
    title: "Project Structure",
    text: "This page provides an overview of the project structure of a Express.ts application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.",
  },
  {
    href: "",
    title: "Routing",
    text: "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle ",
  },
  {
    href: "/dashboard/data-fetching",
    title: "Data Fetching",
    text: "Make your React component async and await your data. Express.ts supports both server and client data fetching.",
  },
  {
    href: "/dashboard/css-support",
    title: "CSS Support",
    text: "Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.",
  },
  {
    href: "/docs",
    title: "Client and server rendering",
    text: "Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.",
  },
];

export const DATA_DASHBOARD_LINKS_NAVBAR = [
  {
    title: " Getting Started",

    links: [
      {
        value: "Installation",
      },
      {
        value: "  Project Structure",
      },
    ],
  },
  {
    title: " Building Your Application",

    links: [
      {
        value: "Routing",
      },
      {
        value: "Data Fetching",
      },
      {
        value: "Rendering",
      },
      {
        value: "Caching",
      },
      {
        value: "Styling",
      },
      {
        value: "Optimizing",
      },
      {
        value: "Configuring",
      },
      {
        value: "Testing",
      },
      {
        value: "Authentication",
      },
      {
        value: "Deploying",
      },
      {
        value: "Upgrading",
      },
    ],
  },
  {
    title: "API Reference",

    links: [
      {
        value: "Components",
      },
      {
        value: "File Conventions",
      },
      {
        value: "Functions",
      },
      {
        value: "protocol.config.js Options",
      },
      {
        value: "create-protocol-app",
      },
      {
        value: "Edge Runtime",
      },
      {
        value: "Protocol.js CLI",
      },
    ],
  },
  {
    title: "Architecture",

    links: [
      {
        value: "Accessibility",
      },
      {
        value: "Fast Refresh",
      },
      {
        value: "Protocol.js Compiler",
      },
      {
        value: "Supported Browsers",
      },
      {
        value: "Turbopack",
      },
    ],
  },
  {
    title: "Community",

    links: [
      {
        value: "Contribution Guide",
      },
    ],
  },
];
