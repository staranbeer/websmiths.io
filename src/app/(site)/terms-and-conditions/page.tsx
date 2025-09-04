import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Websmiths",
};

export default function Page() {
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-6xl text-4xl font-medium text-center">
              Terms & Conditions
            </h1>
            <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
              <p>
                This Websmiths Terms of Service ("
                <span className="font-semibold">Agreement</span>") is entered
                into by and between Websmiths ("
                <span className="font-semibold">Company</span>", "we", "us") and
                the entity or person engaging our software development services
                ("
                <span className="font-semibold">Client</span>", "you"). This
                Agreement governs all software development services provided by
                Websmiths. By engaging our services, you acknowledge that you
                have read, understood, and agree to be bound by these terms. We
                may modify this Agreement from time to time, and continued use
                of our services constitutes acceptance of such modifications.
              </p>
              <p className="mt-5">
                Capitalized terms shall have the meanings set forth in Section
                1, or in the section where they are first used.
              </p>

              <div className="my-6">
                <h4 className="font-semibold">1. Definitions</h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">1.1 "Services"</span>
                      means all software development services provided by
                      Websmiths including web application development, mobile
                      application development, custom software solutions, API
                      development, database design, UI/UX design, and
                      maintenance services.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">1.2 "Deliverables"</span>
                      means the software, applications, code, documentation, and
                      other materials developed and delivered by Websmiths as
                      part of the Services.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">1.3 "Project Scope"</span>
                      means the detailed specifications, requirements, timeline,
                      and deliverables outlined in the Statement of Work or
                      project proposal agreed upon by both parties.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        1.4 "Client Content"
                      </span>
                      means all content, data, materials, and information
                      provided by the Client for use in the development process.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        1.5 "Intellectual Property"
                      </span>
                      means all copyrights, trademarks, patents, trade secrets,
                      and other proprietary rights in any materials, code, or
                      deliverables.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        1.6 "Third-Party Services"
                      </span>
                      means external services, APIs, libraries, frameworks, or
                      tools integrated into the project that are not owned or
                      controlled by Websmiths.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">2. Service Provision</h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">
                        2.1 Services Offered
                      </span>
                      Websmiths provides professional software development
                      services including but not limited to web applications,
                      mobile apps, custom software solutions, API development
                      and integration, database design, UI/UX design services,
                      and ongoing maintenance and support.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        2.2 Project Execution
                      </span>
                      All projects will be executed according to the agreed
                      Project Scope. We will use industry-standard development
                      practices and deliver work in a professional manner. Any
                      changes to the original scope must be documented in
                      writing and may result in additional costs and timeline
                      adjustments.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        2.3 Client Responsibilities
                      </span>
                      Client agrees to provide timely access to necessary
                      information, materials, feedback, and approvals required
                      for project completion. Delays caused by Client may affect
                      project timeline and costs.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">3. Payment Terms</h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">
                        3.1 Payment Schedule
                      </span>
                      Payment terms will be specified in the project proposal.
                      Invoices are due within 15 days of receipt. Late payments
                      may incur a 1.5% monthly service charge and may result in
                      project suspension.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">3.2 Scope Changes</span>
                      Any modifications to the original Project Scope will be
                      documented and may result in additional charges. All scope
                      changes must be approved in writing before implementation.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">
                  4. Intellectual Property Rights
                </h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">
                        4.1 Client Ownership
                      </span>
                      Upon full payment, Client will own all custom code and
                      applications developed specifically for their project,
                      excluding our proprietary tools, frameworks, and
                      methodologies.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        4.2 Websmiths Property
                      </span>
                      We retain ownership of our proprietary development tools,
                      frameworks, methodologies, and general processes. We also
                      retain the right to use the project for portfolio and
                      marketing purposes.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">5. Warranties and Limitations</h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">
                        5.1 Service Warranty
                      </span>
                      We warrant that our services will be performed
                      professionally and in accordance with industry standards.
                      We provide a 30-day warranty for bug fixes on delivered
                      code.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">
                        5.2 Limitation of Liability
                      </span>
                      Our liability is limited to the total amount paid for the
                      specific project. We are not liable for indirect,
                      consequential, or punitive damages. Software is provided
                      "as is" without warranty beyond agreed specifications.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <h4 className="font-semibold">
                  6. Confidentiality and Termination
                </h4>
                <ul className="mt-6">
                  <li>
                    <p>
                      <span className="font-semibold">6.1 Confidentiality</span>
                      Both parties agree to maintain confidentiality of
                      proprietary information shared during the project and for
                      two years following completion.
                    </p>
                  </li>
                  <li className="mt-5">
                    <p>
                      <span className="font-semibold">6.2 Termination</span>
                      Either party may terminate with 30 days written notice.
                      Client remains responsible for payment of work completed
                      to the termination date. Upon termination, we will deliver
                      all completed work upon full payment of outstanding
                      invoices.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Contact Information:</span>{" "}
                  For questions regarding these terms, please contact Websmiths
                  at your designated project contact or through our official
                  communication channels.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  <span className="font-semibold">Last Updated:</span>{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
