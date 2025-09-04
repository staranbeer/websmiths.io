import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Websmiths",
};

export default function Page() {
  return (
    <main>
      <ContactForm />
      <Faq />
    </main>
  );
}
