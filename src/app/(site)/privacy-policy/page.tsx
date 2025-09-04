import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Websmiths",
};

export default function Page() {
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-6xl text-4xl font-medium text-center">
              Privacy Policy
            </h1>
            <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
              <p className="text-opacity-60">
                This Privacy Policy explains how personal information about our
                clients, website visitors, and other individuals using our
                services is collected, used, and disclosed by Websmiths ("us",
                "we", "our", or "Websmiths"). This Privacy Policy describes our
                privacy practices in relation to our website, software
                development services, consultations, project communications, and
                related applications and services offered by us (the
                "Services"), as well as your choices regarding use, access,
                storage, and correction of personal information.
              </p>

              <p className="text-opacity-60 mt-5">
                By engaging our software development services and by agreeing to
                our Terms and Conditions, you agree to the collection, usage,
                storage, and disclosure of information described in this Privacy
                Policy.
              </p>

              <p className="text-opacity-60 mt-5">
                Our Services may contain links to other websites or third-party
                services; the information practices and content of such other
                websites or services are governed by their respective privacy
                policies and are not covered by this Privacy Policy.
              </p>

              <p className="text-opacity-60 mt-5">
                We may change this Privacy Policy from time to time. If we make
                changes, we will notify you by revising the date at the top of
                the policy and, in some cases, provide additional notice such as
                adding a statement to our homepage or sending you a
                notification. We encourage you to review this Privacy Policy
                whenever you engage our services to stay informed about our
                information practices.
              </p>

              <div className="my-6">
                <h4 className="font-semibold">Information We Collect</h4>
                <p className="mt-6 text-opacity-60">
                  <span className="font-semibold">Personal Information:</span>{" "}
                  When you engage our services, we may collect personally
                  identifiable information including your name, email address,
                  phone number, company name, job title, business address, and
                  any other information you choose to provide during our
                  consultation or project communication process.
                </p>

                <p className="mt-4 text-opacity-60">
                  <span className="font-semibold">Project Information:</span> We
                  collect information related to your software development
                  project including business requirements, technical
                  specifications, design preferences, content, and any materials
                  you provide for the development process.
                </p>

                <p className="mt-4 text-opacity-60">
                  <span className="font-semibold">Technical Information:</span>{" "}
                  We may collect technical information such as IP addresses,
                  browser type, operating system, and website usage data when
                  you visit our website or use our services.
                </p>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">How We Use Your Information</h4>
                <p className="mt-6 text-opacity-60">
                  We use the information we collect to:
                </p>
                <ul className="mt-4 text-opacity-60 list-disc list-inside space-y-2">
                  <li>
                    Provide software development services and project
                    deliverables
                  </li>
                  <li>
                    Communicate with you about your project and provide support
                  </li>
                  <li>Process payments and manage our business relationship</li>
                  <li>Improve our services and develop new offerings</li>
                  <li>Comply with legal obligations and resolve disputes</li>
                  <li>
                    Send you updates about your project and occasionally inform
                    you about our services
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">
                  Information Sharing and Disclosure
                </h4>
                <p className="mt-6 text-opacity-60">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this Privacy Policy:
                </p>
                <ul className="mt-4 text-opacity-60 list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Service Providers:</span> We
                    may share information with trusted third-party service
                    providers who assist us in operating our business, such as
                    hosting providers, payment processors, or development tools,
                    provided they agree to keep this information confidential.
                  </li>
                  <li>
                    <span className="font-semibold">Legal Requirements:</span>{" "}
                    We may disclose information when required by law or to
                    protect our rights, property, or safety.
                  </li>
                  <li>
                    <span className="font-semibold">Business Transfers:</span>{" "}
                    Information may be transferred in connection with a merger,
                    acquisition, or sale of assets.
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">Data Security</h4>
                <p className="mt-6 text-opacity-60">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">Data Retention</h4>
                <p className="mt-6 text-opacity-60">
                  We retain your personal information for as long as necessary
                  to provide our services, comply with legal obligations,
                  resolve disputes, and enforce our agreements. Project-related
                  information is typically retained for the duration of the
                  project and for a reasonable period thereafter for support and
                  legal purposes.
                </p>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">Your Rights and Choices</h4>
                <p className="mt-6 text-opacity-60">You have the right to:</p>
                <ul className="mt-4 text-opacity-60 list-disc list-inside space-y-2">
                  <li>
                    Access and review the personal information we hold about you
                  </li>
                  <li>
                    Request corrections to inaccurate or incomplete information
                  </li>
                  <li>
                    Request deletion of your personal information, subject to
                    legal and contractual obligations
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>
                    Request information about how we use and share your data
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">Third-Party Services</h4>
                <p className="mt-6 text-opacity-60">
                  We may use third-party services for payment processing,
                  project management, communication tools, and hosting. These
                  services have their own privacy policies, and we encourage you
                  to review them. We do not control the privacy practices of
                  these third parties.
                </p>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">Contact Us</h4>
                <p className="mt-6 text-opacity-60">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at your designated
                  project contact or through our official communication
                  channels. We will respond to your inquiry promptly.
                </p>
              </div>

              <div className="my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Last Updated:</span> 9/4/2025
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  This Privacy Policy is effective as of the last updated date
                  and will remain in effect except with respect to any changes
                  in its provisions in the future, which will be in effect
                  immediately after being posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
