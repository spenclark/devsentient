import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BugReportIcon from "@mui/icons-material/BugReport";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BuildIcon from "@mui/icons-material/Build";
import ArchitectureIcon from "@mui/icons-material/Architecture";
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// We will use ~ to split elements if needed - beware of this when updating

const navigationText = {
  logoText: "Dev Sentient",
  navItems: [{ title: "Product" }, { title: "Company" }],
  onboardingItems: [
    {
      title: "Get Started",
    },
  ],
};

const heroText = {
  title: `All-in-one platform~for shipping AI products`,
  subTitle: `DevSentient helps your organization launch and~scale AI-powered products faster and more reliably.`,
  heroContent: {
    label: "Watch how it works",
    pricingBenifit: `
    Start building with DevSentient for free.~Questions?~Contact our sales team
    `,
    embedLink: "https://www.youtube.com/embed/WwMSioKHt2E",
  },
};

const cardElements = {
  title: `Workflow software and services~to fuel your AI development start to finish`,
  subTitle: `One place to manage and scale clusters and pipelines—~optimize production code, and everything in between.`,
  buttonLabel: "See Features",
  cardData: [
    {
      icon: <LocalShippingIcon />,
      cardTitle: "Scale up with a single line of code",
      cardText:
        "Scale up and customize clusters with a single line of code. Avoid costly scale-up migrations later on. ",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
    {
      icon: <FavoriteIcon />,
      cardTitle: "Tools that scientists love",
      cardText:
        "Code, create pipelines, and deploy API endpoints with Jupyter notebooks, Python scripts, and built-in data science libraries.",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
    {
      icon: <AccessTimeIcon />,
      cardTitle: "Painless deployment and integration",
      cardText:
        "Easily integrate Hyperplane into existing IT infrastructure and SDLC. No lock-in, no regrets.",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
    {
      icon: <BugReportIcon />,
      cardTitle: "Powerful debugging tools for AI teams",
      cardText:
        "Track and view results of every deployed job. Pull and re-run previous jobs in a development environment for rapid debugging.",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
    {
      icon: <AllInclusiveIcon />,
      cardTitle: "AI-powered Resource Optimization",
      cardText:
        "Leave cluster configurations to us. Hyperplane  will automatically choose the best configurations within your specified resource limits.",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
    {
      icon: <BuildIcon />,
      cardTitle: "Multi-framework",
      cardText:
        "Avoid vendor lock-in and don't restrict yourself. Enjoy both CPU and GPU support for popular frameworks like Dask, PyTorch, TensorFlow, MXNet, Rapids, Ray, Modin and others.",
      linkName: "Learn More",
      md: 3,
      xs: 12,
      sm: 6,
    },
  ],
  featuredCard: {
    icon: <ArchitectureIcon />,
    cardTitle: "DevSentient Services",
    cardText:
      "Still unsure? We can help define a strategy for operational AI Identifying high ROI use cases for AI Deploying and integrating the Hyperplane platform Co-researching and co-developing AI algorithms and models ",
    linkName: "Learn More",
  },
};

const CaroselContent = {
  title: "What our partners say about us",
  icon: <FormatQuoteIcon />,
  data: [
    {
      name: "Adam Dille",
      title: "SVP of Product and Engineering",
      company: "Quantum Metric",
      endorsement:
        "...Overnight, DevSentient's product helped us move past many of those struggles so we could focus on solving business problems instead of scaling infrastructure. As a result, we've moved data products more quickly towards production, we've run analysis more cost-effectively than if we had built it ourselves, and we've even avoided hiring data engineers who we thought would be required to make all of this possible. The ROI from the product, as well as the valuable experience that the DevSentient team brings, has been clear from the day we signed on with them",
    },
    {
      name: "Andrew Wiebe",
      title: "Chief Science Officer",
      company: "RiskThinking.AI",
      endorsement:
        "With the help of the Hyperplane platform, we were able to massively scale our production pipelines, while working collaboratively to meet our product goals.",
    },
  ],
};

const BottomContent = {
  title: "See DevSentient in action",
  subTitle:
    "Learn how  can help you effortlessly onboard and manage your employees, whether you have a workforce of 1 or 1,000.",
  LeftButton: {
    title: "Request demo",
    to: "/request-demo",
  },
  RightButton: {
    title: "See Pricing",
    to: "/",
  },
};
// Must pump thru elements with html elements thru a function or method otherwise they will print thier type
export {
  navigationText,
  heroText,
  cardElements,
  CaroselContent,
  BottomContent,
};

// Learn more / still unsure
// Hyperplane is the ultimate MLOps and AIOps platform, designed to bring the benefits of DevOps to the AI space. Some of the main benefits of using Hyperplane for MLOps are:

// Deployment via GitOps: everything is version controlled. To deploy a solution, simply commit it into the appropriate branch in your git repository.
// CI/CD: active deployments and pipelines are updated immediately when a change is deployed.
// Alert on Slack, PagerDuty, email or any other channel.
// Easily differentiate between development, staging and production by maintaining separate git branches.
// Benefit from full observability via a rich set of metrics and integration with Prometheus and Grafana.
