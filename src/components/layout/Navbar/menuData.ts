export type MenuItem = {
    title: string;
    description: string;
    href: string;
    icon?: string;
};

export type MenuData = {
    heading: string;
    items: MenuItem[];
    specialCard?: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  icon?: string;
};
    sidebar: {
        title: string;
        description: string;
        buttonText?: string;
        buttonLink?: string;
        links?: {
            label: string;
            href: string;
        }[];
    };
};

// FEATURES MENU
export const featuresMenu: MenuData = {
    heading: "Explore the features that help your team succeed",

    items: [
        {
            title: "Inbox",
            description:
                "Capture every vital detail from emails, Slack, and more directly into your Trello Inbox.",
            href: "https://trello.com/inbox",
            icon: "inbox",
        },
        {
            title: "Planner",
            description:
                "Sync your calendar and allocate focused time slots to boost productivity.",
            href: "https://trello.com/planner",
            icon: "calendar",
        },
        {
            title: "Automation",
            description:
                "Automate tasks and workflows with Trello.",
            href: "https://trello.com/butler-automation",
            icon: "zap",
        },
        {
            title: "Power-Ups",
            description:
                "Power up your teams by linking their favorite tools with Trello plugins.",
            href: "https://trello.com/power-ups",
            icon: "plug",
        },
        {
            title: "Templates",
            description:
                "Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.",
            href: "https://trello.com/templates",
            icon: "copy",
        },
        {
            title: "Integrations",
            description:
                "Find the apps your team is already using or discover new ways to get work done in Trello.",
            href: "https://trello.com/integrations",
            icon: "settings",
        },
        {
            title: "MCP server",
            description: "Connect Trello to any AI tool",
            href: "https://trello.com/mcp",
            icon: "grid",
        },
    ],

    sidebar: {
        title: "Meet Trello",
        description:
            "Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It's simple – sign up, create a board, and you're off! Productivity awaits.",
        buttonText: "Check out Trello",
        buttonLink: "https://trello.com/tour",
    },
};

// SOLUTIONS MENU
export const solutionsMenu: MenuData = {
    heading:
        "Take a page out of these pre-built Trello playbooks designed for all teams",

    items: [
        {
            title: "Marketing teams",
            description:
                "Whether launching a new product, campaign, or creating content, Trello helps marketing teams succeed.",
            href: "https://trello.com/teams/marketing",
            icon: "megaphone",
        },
        {
            title: "Product management",
            description:
                "Use Trello's management boards and roadmap features to simplify complex projects and processes.",
            href: "https://trello.com/teams/product",
            icon: "package",
        },
        {
            title: "Engineering teams",
            description:
                "Ship more code, faster, and give your developers the freedom to be more agile.",
            href: "https://trello.com/teams/engineering",
            icon: "code",
        },
        {
            title: "Design teams",
            description:
                "Empower your design teams by streamlining creative requests and collaboration.",
            href: "https://trello.com/teams/design",
            icon: "pencil",
        },
        {
            title: "Startups",
            description:
                "From hitting revenue goals to managing workflows, small businesses thrive with Trello.",
            href: "https://trello.com/teams/startups",
            icon: "blocks",
        },
        {
            title: "Remote teams",
            description:
                "Keep your remote team connected and motivated, no matter where they're located.",
            href: "https://trello.com/teams/remote-team-management",
            icon: "globe",
        },
    ],

    sidebar: {
        title: "Our product in action",
        description: "",

        links: [
            {
                label: "Use case: Task management",
                href: "https://trello.com",
            },
            {
                label: "Use case: Resource hub",
                href: "https://trello.com",
            },
            {
                label: "Use case: Project management",
                href: "https://trello.com",
            },
        ],
    },
};

export const plansMenu: MenuData = {
  heading: "",

  items: [
    {
      title: "Standard",
      description:
        "For teams that need to manage more work and scale collaboration.",
      href: "https://trello.com/pricing",
      icon: "lightbulb",
    },
    {
      title: "Premium",
      description:
        "Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.",
      href: "https://trello.com/pricing",
      icon: "star",
    },
    {
      title: "Enterprise",
      description:
        "Everything your enterprise teams and admins need to manage projects.",
      href: "https://trello.com/pricing",
      icon: "building",
    },
  ],

  specialCard: {
    title: "Free plan",
    description:
      "For individuals or small teams looking to keep work organized.",
    buttonText: "Take a tour of Trello",
    buttonLink: "https://trello.com/tour",
    icon: "zap",
  },

  sidebar: {
    title: "Compare plans & pricing",
    description:
      "Whether you're a team of 2 or 2,000, Trello's flexible pricing model means you only pay for what you need.",
    buttonText: "View Trello pricing",
    buttonLink: "https://trello.com/pricing",
  },
};

export const resourcesMenu: MenuData = {
  heading: "Learn & connect",

  items: [
    {
      title: "Trello guide",
      description:
        "Our easy to follow workflow guide will take you from project set-up to Trello expert in no time.",
      href: "https://trello.com/guide",
    },
    {
      title: "Remote work guide",
      description:
        "The complete guide to setting up your team for remote work success.",
      href: "https://trello.com/remote-work",
    },
    {
      title: "Webinars",
      description:
        "Enjoy our free Trello webinars and become a productivity professional.",
      href: "https://trello.com/webinars",
    },
    {
      title: "Customer stories",
      description:
        "See how businesses have adopted Trello as a vital part of their workflow.",
      href: "https://trello.com/customers",
    },
    {
      title: "Developers",
      description:
        "The sky's the limit in what you can deliver to your users in your Power-Up!",
      href: "https://developer.atlassian.com/cloud/trello/",
    },
    {
      title: "Help resources",
      description:
        "Need help? Articles and FAQs to get you unstuck.",
      href: "https://support.atlassian.com/trello/",
    },
  ],

  sidebar: {
    title: "Helping teams work better, together",
    description:
      "Discover Trello use cases, productivity tips, best practices for team collaboration, and expert remote work advice.",
    buttonText: "Check out the Trello blog",
    buttonLink: "https://blog.trello.com/",
  },
};