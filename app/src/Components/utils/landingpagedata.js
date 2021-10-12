import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import BugReportIcon from "@mui/icons-material/BugReport";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BuildIcon from "@mui/icons-material/Build";
import ArchitectureIcon from "@mui/icons-material/Architecture";
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const navigationText = {
  logoText: "DevSentient",
  navItems: [{ title: "Product" }, { title: "Company" }],
  onboardingItems: [
    {
      title: "Get Started",
    },
  ],
};

const heroText = {
  title: `All-in-one platform${(<br />)}for shipping AI products`,
  subTitle: `DevSentient helps your organization launch and ${(
    <br />
  )} scale AI-powered products faster and more reliable.`,
};

const cardElements = {
  title: `Workflow software and services${(
    <br />
  )}to fuel your AI development start to finish`,
  subTitle: `One place to manage and scale clusters and pipelines—${(
    <br />
  )}optimize production code, and everything in between.`,
  buttonLabel: "See Features",
  cardData: [
    {
      icon: <LocalShippingIcon />,
      cardTitle: "Scale up with a single line of code",
      cardText:
        "Scale up and customize clusters with a single line of code. Avoid costly scale-up migrations later on. ",
      linkName: "Learn More",
    },
    {
      icon: <FavoriteIcon />,
      cardTitle: "Tools that scientists love",
      cardText:
        "Code, create pipelines, and deploy API endpoints with Jupyter notebooks, Python scripts, and built-in data science libraries.",
      linkName: "Learn More",
    },
    {
      icon: <AccessAlarmIcon />,
      cardTitle: "Painless deployment and integration",
      cardText:
        "Easily integrate Hyperplane into existing IT infrastructure and SDLC. No lock-in, no regrets.",
      linkName: "Learn More",
    },
    {
      icon: <BugReportIcon />,
      cardTitle: "Powerful debugging tools for AI teams",
      cardText:
        "Track and view results of every deployed job. Pull and re-run previous jobs in a development environment for rapid debugging.",
      linkName: "Learn More",
    },
    {
      icon: <AllInclusiveIcon />,
      cardTitle: "AI-powered Resource Optimization",
      cardText:
        "Leave cluster configurations to us. Hyperplane  will automatically choose the best configurations within your specified resource limits.",
      linkName: "Learn More",
    },
    {
      icon: <BuildIcon />,
      cardTitle: "Multi-framework",
      cardText:
        "Avoid vendor lock-in and don't restrict yourself. Enjoy both CPU and GPU support for popular frameworks like Dask, PyTorch, TensorFlow, MXNet, Rapids, Ray, Modin and others.",
      linkName: "Learn More",
    },
    {
      icon: <ArchitectureIcon />,
      cardTitle: "DevSentient Services",
      cardText:
        "Still unsure? We can help Defining a strategy for operational AI Identifying high ROI use cases for AI Deploying and integrating the Hyperplane platform Co-researching and co-developing AI algorithms and models ",
      linkName: "Learn More",
    },
  ],
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

export {
  navigationText,
  heroText,
  cardElements,
  CaroselContent,
  BottomContent,
};
