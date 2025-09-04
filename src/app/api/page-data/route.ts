import { NextResponse } from "next/server";
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from "@/app/types/menu";

const avatarList: avatar[] = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const innovationList: innovation[] = [
  {
    image: "/images/home/innovation/brand.svg",
    title: "Brand\nStrategy",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/innovation/digitalmarketing.svg",
    title: "Digital\nMarketing",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/innovation/uiux.svg",
    title: "UI/UX\nDesign",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    image: "/images/home/innovation/analitics.svg",
    title: "Analytics &\nReporting",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
  {
    image: "/images/home/innovation/webdevp.svg",
    title: "Web\nDevelopment",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
];

const WebResultTagList: WebResultTag[] = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Creativity",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Innovation",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Strategy",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Starter",
    plan_descp:
      "For companies who need design and development support. One request at a time",
    plan_price: "$2500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Updates Every 2 Days",
      "Mid-level Designer and Developer",
      "SEO optimization",
      "Monthly analytics",
      "2x Calls Per Month",
      "License free assets",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Pro",
    plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
    plan_price: "$3800",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Updates Daily",
      "Senior-level Designer and Developer",
      "AI Advisory Framework",
      "Full-service Creative Team",
      "4x Calls Per Month",
      "License free assets",
    ],
  },
];

const faqList: faq[] = [
  {
    faq_que: "What services does our agency offer?",
    faq_ans:
      "Websmiths offers comprehensive software development services including web application development, mobile app development, custom software solutions, API development and integration, database design, UI/UX design, e-commerce platforms, and cloud-based solutions. We work with modern technologies and frameworks to deliver scalable, high-performance applications tailored to your business needs.",
  },
  {
    faq_que: "How long does a typical project take?",
    faq_ans:
      "Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while custom web applications can take 6-12 weeks. Complex enterprise solutions may require 3-6 months or more. We provide detailed project timelines during the initial consultation and keep you updated on progress throughout development.",
  },
  {
    faq_que: "How is pricing structured at Websmiths?",
    faq_ans:
      "We offer flexible pricing models including fixed-price projects for well-defined scopes, hourly rates for ongoing development work, and retainer packages for long-term partnerships. Pricing depends on project complexity, timeline, and required technologies. We provide detailed quotes after understanding your specific requirements during our free consultation.",
  },
  {
    faq_que: "Do you offer ongoing support after project completion?",
    faq_ans:
      "Yes, we provide comprehensive post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates, bug fixes, security updates, or technical assistance. Our support packages are tailored to your specific needs and can include hosting management, performance monitoring, and feature enhancements.",
  },
  {
    faq_que: "How often will I receive updates on my project?",
    faq_ans:
      "We believe in transparent communication and provide regular project updates. Typically, you'll receive weekly progress reports via email, and we schedule bi-weekly calls for larger projects. We also provide access to project management tools where you can track real-time progress, view completed tasks, and communicate directly with our development team.",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    innovationList,
    WebResultTagList,
    startupPlanList,
    faqList,
  });
};
