export const planPrices = {
  pro: "₦89,800",
  proMonthly: "₦7,900",
  business: "₦214,800",
  businessMonthly: "₦19,800",
};

export const pricing = {
  standard: {
    name: 'free',
    monthlyName: 'free',
    title: "Standard",
    description: "Lorem Ipsum dolor sit amet",
    payment: "Free",
    monthlyPayment: "Free",
    duration: "",
    tenor: "Free forever",
    incentives: [
      "Community Engagement",
      "Networking Opportunities",
      "Stay Informed on Creative Trends",
    ],
    buttonText: "Continue for free",
    logo: "/img/pricing-free.svg",
    radius: "lg:rounded-l-[8px]",
    buttonLink: "/dashboard",
    buttonLink2: "/dashboard",
  },
  pro: {
    name: 'pro',
    monthlyName: 'pro-monthly',
    title: "Pro",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.pro,
    monthlyPayment: planPrices.proMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "Get one month free if you subscribe now",
    incentives: [
      "Enhanced Visibility",
      "Access to Premium Jobs",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Advanced Analytics and Insights",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-pro.svg",

    radius: "!rounded-[0]",
    buttonLink: "/subscription/pro",
    buttonLink2: "/subscription/pro-monthly",
  },
  business: {
    name: 'business',
    monthlyName: 'business-monthly',
    title: "Business",
    description: "Lorem Ipsum dolor sit amet",
    payment: planPrices.business,
    monthlyPayment: planPrices.businessMonthly,
    monthlyDuration: "/month",
    yearlyDuration: "/year",
    tenor: "For the next 3 months and 7900",
    incentives: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Promotion and Marketing Opportunities",
      "Access to GridTools Discovery Pack (Free)",
    ],
    buttonText: "Subscribe now",
    logo: "/img/pricing-business.svg",

    radius: "lg:rounded-r-[8px]",
    buttonLink: "/subscription/business",
    buttonLink2: "/subscription/business-monthly",
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
    pricing: {
      ...pricing.standard,
    },
    action: (navigate) => {
      navigate("/subscription/free");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/free");
    },
  },
  {
    type: "Pro",
    subPlan: "Recommended plan",
    amount: planPrices.pro,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Enhanced Visibility",
      "Access to Premium Jobs 1",
      "Expanded Project Showcase",
      "Advanced Analytics and Insights",
      "Access to GridTools Discovery Pack (Free)",
    ],
    pricing: {
      ...pricing.pro,
    },
    action: (navigate) => {
      navigate("/subscription/pro");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/pro-monthly");
    },
  },
  
  {
    type: "Business",
    subPlan: null,
    amount: planPrices.business,
    tenor: "/month",
    supportingText: "One sentence supporting text",
    features: [
      "Premium Talent Pool Access",
      "Featured Job Listings",
      "Analytics and Performance Metrics",
      "Access to GridTools Discovery Pack (Free)",
      "Promotion and Marketing Opportunities",
    ],
    pricing: {
      ...pricing.business,
    },
    action: (navigate) => {
      navigate("/subscription/business");
    },
    monthlyAction: (navigate) => {
      navigate("/subscription/business-monthly");
    },
  },
];
