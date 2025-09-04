import { NextResponse } from "next/server";

const footerData = {
  brand: {
    name: "Websmiths",
    tagline:
      "Empowering businesses with innovative solutions. Let's create something amazing together.",
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "Contact us", url: "/contact" },
      { name: "About us", url: "/#aboutus" },
      { name: "Services", url: "/#services" },
      { name: "Pricing", url: "/#pricing" },
    ],
  },
  otherPages: {
    name: "Other Pages",
    links: [
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  contactDetails: {
    name: "Contact Details",
    email: "taran@websmiths.io",
  },
  copyright: "©2025 Websmiths. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
