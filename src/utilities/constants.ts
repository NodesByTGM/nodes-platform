export const pricing = {
  standard: {
    title: "Standard",
    description: "Lorem Ipsum dolor sit amet",
    payment: "Free",
    duration: "",
    tenor: "Free forever",
    incentives: ["Free forever", "Free forever", "Free forever"],
    buttonText: "Continue for free",
    logo: "/img/pricing-standard.svg",
    radius: "lg:rounded-l-[8px]",
  },
  pro: {
    title: "Pro",
    description: "Lorem Ipsum dolor sit amet",
    payment: "₦4900",
    duration: "/month",
    tenor: "For the next 3 months and 7900",
    incentives: ["Free forever", "Free forever", "Free forever"],
    buttonText: "Start your 30-day free trial",
    logo: "/img/pricing-pro.svg",

    radius: "lg:rounded-r-[8px]",
  },
};

export const projectModalTypes = {
  add: "add",
  edit: "edit",
};

export const filterOptions = {
  postsSort: [
    { id: 1, name: "Most recent", value: 0, returnValue: "Most recent" },
    
  ],
};

export const plans = [
  {
    type: "Free",
    subPlan: "Current plan",
    amount: "Free",
    tenor: null,
    supportingText: "One sentence supporting text",
    features: [
      "Community Engagement",
      "Networking Opportunities",
      "Stay Informed on Creative Trends",
    ],
    action: (navigate) => {
      navigate("/subscription/free");
    },
  },
  {
    type: "Pro",
    subPlan: "Recommended plan",
    amount: "₦7,900",
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Enhanced Visibility",
      "Access to Premium Jobs 1",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Access to GridTools Discovery Pack (Free)",
    ],
    action: (navigate) => {
      navigate("/subscription/pro");
    },
  },
  {
    type: "Business",
    subPlan: null,
    amount: "₦19,800",
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Access to GridTools Discovery Pack (Free)",
      "Promotion and Marketing Opportunities",
    ],
    action: (navigate) => {
      navigate("/subscription/business");
    },
  },
];
