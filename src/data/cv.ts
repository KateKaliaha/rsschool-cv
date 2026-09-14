export const cv = {
  "about": "React Native / Frontend Developer with commercial experience since 2022. I develop and release iOS, Android, and web applications, integrate native functionality, and implement payment and subscription flows. My experience includes coordinating frontend developers, conducting code reviews, and planning releases. I am currently expanding my backend knowledge to transition into fullstack development.",
  "skills": [
    {
      "label": "Languages",
      "text": "JavaScript, TypeScript; Swift for iOS widget development."
    },
    {
      "label": "Frontend",
      "text": "HTML, CSS, React, Vite, PWA, Canvas API."
    },
    {
      "label": "State Management",
      "text": "Zustand, Redux, MobX."
    },
    {
      "label": "Mobile",
      "text": "React Native, React Navigation, React Native Reanimated, Cordova, Deep Linking, Push Notifications, Unity integration."
    },
    {
      "label": "APIs & Data",
      "text": "REST API, WebSocket, IndexedDB, GPT API integration."
    },
    {
      "label": "Payments & Subscriptions",
      "text": "In-App Purchases, Subscriptions, Stripe, Recurly, Solidgate, TrueGate, Apple Pay, Google Pay."
    },
    {
      "label": "Analytics & Monetization",
      "text": "Firebase, Mixpanel, Facebook SDK, AppLovin."
    },
    {
      "label": "Localization & Product Experiments",
      "text": "i18next, Remote Config, A/B Testing."
    },
    {
      "label": "Development & Delivery",
      "text": "Git, Xcode, Android Studio, CI/CD, AWS S3, TestFlight, App Store Connect, Google Play Console."
    },
    {
      "label": "AI Coding Tools",
      "text": "Codex, Claude Code."
    },
    {
      "label": "Team Leadership",
      "text": "Code Review, Task and Release Planning, Frontend Team Coordination, 1:1s, Performance Reviews."
    }
  ],
  "experience": [
    {
      "role": "React Native / Frontend Developer",
      "company": "WannaPlay",
      "dates": "July 2024 – Present",
      "highlights": [
        "Develop and maintain three iOS and Android applications, including push notifications and product event tracking. Own client-side subscriptions and in-app purchases, including purchase restoration and handling expired subscriptions and pending or failed transactions.",
        "Integrated React Native with Unity to launch games and exchange data on both platforms. Migrated React Navigation from v3 to v7, redesigning nested navigation and deep linking to enable a React Native upgrade.",
        "Maintain a biweekly mobile release cycle through TestFlight, App Store Connect, and Google Play Console. Set up CI/CD for Android builds and publication, and contributed to automated web builds and deployment to AWS S3.",
        "Develop and maintain two web products, one of which grew to 2–3K new users per day. Built a PWA with web push notifications, integrated Stripe, Recurly, Solidgate, and TrueGate, and improved payment flows. Develop shared onboarding modules with localization, Remote Config, and A/B tests; implemented streaming AI chat responses over WebSocket.",
        "Also serve as Lead Frontend, coordinating two developers, planning tasks and releases, and conducting 1:1s and performance reviews. Conduct code reviews for a frontend team of 4–5 developers and participate in technical decision-making."
      ]
    },
    {
      "role": "React Native Developer",
      "company": "Tactil LLC",
      "dates": "January 2023 – July 2024",
      "highlights": [
        "Served as the primary React Native developer for four multilingual iOS and Android applications and managed their test and production releases through TestFlight, App Store Connect, and Google Play Console.",
        "Implemented client-side subscriptions and in-app purchases, launching a subscription model across all four applications.",
        "Integrated GPT API to generate and dynamically update educational content. Developed a native iOS widget in Swift to make part of the application's functionality available without opening the app.",
        "Integrated AppLovin for ad monetization and Firebase, Facebook SDK, and Mixpanel for product analytics and user event tracking."
      ]
    },
    {
      "role": "Frontend Developer",
      "company": "NostrCorp, Inc.",
      "dates": "May 2022 – January 2023",
      "highlights": [
        "Built a React application from scratch for real-time data monitoring, designing its architecture and WebSocket layer with connection management, data filtering, and error handling.",
        "Ported a web application to Android using Cordova and prepared it for publication on Google Play. Implemented local storage with IndexedDB and integrated Cordova plugins to access native device capabilities.",
        "Built a reusable React component with asynchronous loading and Markdown support for embedding across different parts of the product."
      ]
    }
  ],
  "projects": [
    {
      "name": "Sports Betting — Test Assignment",
      "description": "A responsive sports betting demo using mock data. Users can browse current and upcoming events, view match details, and select a betting outcome. The bet button becomes active after a selection. Submitting a bet redirects users to the home page and displays a one-time confirmation message.",
      "stack": "TypeScript, React, React Router, Material UI, Emotion, Create React App.",
      "source": "https://github.com/KateKaliaha/Test-Sports-betting/",
      "demo": "https://katekaliaha.github.io/Test-Sports-betting/#/"
    },
    {
      "name": "Demo Billiard — Test Assignment",
      "description": "An interactive billiard simulation rendered on HTML Canvas. Users can push balls with the mouse and change their fill colors through a React menu. Balls of different sizes collide with each other and the canvas boundaries, losing some momentum on impact.",
      "stack": "Canvas API, TypeScript, React, Vite.",
      "source": "https://github.com/KateKaliaha/demo-billiard",
      "demo": "https://katekaliaha.github.io/demo-billiard/"
    }
  ],
  "languages": [
    {
      "label": "Russian",
      "text": "Native"
    },
    {
      "label": "English",
      "text": "B1+"
    }
  ],
  "code": "const arrCheck = (value) => {\n  return Array.isArray(value) && value.every((item) => Array.isArray(item));\n};"
};
