import {
  Bullets,
  LegalHero,
  Section,
  SubHead,
} from "@/components/shared/LegalDoc";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Sairr collects, uses, shares and protects your personal information — and the rights and choices available to you.",
  path: "/privacy-policy",
});

function Principle({ name, children }: { name: string; children: string }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
      <h3 className="font-heading text-base font-semibold text-brand">
        {name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-slate sm:text-base">
        {children}
      </p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <LegalHero
        eyebrow="Privacy Policy"
        title="What you share with us stays yours."
        intro="We collect only what we need to plan and deliver your journey, keep it secure, and never sell your personal information. Here’s exactly what we collect and why."
      />

      {/* Policy body */}
      <section className="bg-mist pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
                Privacy Policy
              </h2>
              <p className="mt-2 text-sm font-medium text-brand">
                Effective: 22 September 2026
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate sm:text-base">
                <p>
                  At Sairr, operated by Meenadeep Experiences Private Limited
                  (“Sairr”, “we”, “us” or “our”), we believe that your personal
                  information belongs to you.
                </p>
                <p>
                  We take the privacy and security of your information seriously.
                  We collect personal information only for defined and legitimate
                  purposes, seek to collect only what is reasonably necessary,
                  and take appropriate measures to protect the information
                  entrusted to us.
                </p>
                <p>
                  Sairr does not sell, rent or trade your personal information.
                  We do not provide your personal information to advertisers,
                  data brokers or unrelated businesses for their independent
                  marketing or commercial purposes.
                </p>
                <p>
                  Where we need to share information with an airline, hotel,
                  transportation provider or other service provider to deliver a
                  journey or service you have requested, we share only the
                  information reasonably necessary for that purpose.
                </p>
                <p>
                  This Privacy Policy explains what information we collect, why
                  we collect it, how we use and protect it, when we may share it,
                  how long we retain it, and the rights and choices available to
                  you.
                </p>
              </div>
            </div>

            <Section number={1} title="About Sairr">
              <p>
                Sairr is a travel and experiences brand operated by Meenadeep
                Experiences Private Limited, an Indian company providing travel
                and related services.
              </p>
              <p>
                Sairr’s services are primarily for travellers over 50 and their
                families, and may include group journeys, private journeys,
                gifted trips, travel planning and related experiences.
              </p>
            </Section>

            <Section number={2} title="Scope of This Privacy Policy">
              <p>
                This Privacy Policy applies to personal information collected by
                Sairr through:
              </p>
              <Bullets
                items={[
                  "Our website and online enquiry forms",
                  "WhatsApp, phone and email communications",
                  "Travel enquiries and consultations",
                  "Bookings and journey arrangements",
                  "Payments and transactions",
                  "Customer service and support",
                  "Feedback, reviews and other interactions with Sairr",
                  "Other services, channels or interactions that expressly refer to this Privacy Policy",
                ]}
              />
              <p>
                This Policy applies whether you interact with us directly or
                whether a family member or another authorised person contacts us
                or makes arrangements on your behalf.
              </p>
            </Section>

            <Section number={3} title="Our Role as a Data Fiduciary">
              <p>
                Under applicable Indian data protection law, including the
                Digital Personal Data Protection Act, 2023 and rules or
                regulations made thereunder, Sairr may act as a Data Fiduciary in
                relation to personal data that we determine the purpose and means
                of processing.
              </p>
              <p>
                Where we appoint third-party service providers to process
                personal data on our behalf, we remain responsible for the
                processing carried out for our purposes, subject to applicable
                law.
              </p>
              <p>
                We will process personal data in accordance with applicable law
                and the principles described in this Policy.
              </p>
            </Section>

            <Section number={4} title="Information We Collect">
              <p>
                The information we collect depends on how you interact with Sairr
                and the services you use.
              </p>

              <SubHead title="4.1 Enquiry and Contact Information">
                When you enquire about a journey or contact us, we may collect:
              </SubHead>
              <Bullets
                items={[
                  "Name",
                  "Phone number",
                  "Email address, where provided",
                  "Destination or journey of interest",
                  "Preferred travel dates",
                  "Age or age range, if requested in the future",
                  "Gender, if requested in the future",
                  "Preferred method of communication",
                  "Information you voluntarily provide in your enquiry or conversation",
                ]}
              />

              <SubHead title="4.2 Booking and Traveller Information">
                To arrange and deliver a journey, we may need information such
                as:
              </SubHead>
              <Bullets
                items={[
                  "Traveller name",
                  "Contact details",
                  "Date of birth or age",
                  "Gender, where required by a travel provider",
                  "Government-issued identification information required by the relevant travel provider",
                  "Passport details for international travel",
                  "Visa and visa-processing information where applicable",
                  "Travel preferences",
                  "Dietary requirements",
                  "Mobility or accessibility requirements",
                  "Medical or other special requirements that you voluntarily provide for the safe and appropriate delivery of services",
                  "Emergency contact information",
                  "Details of accompanying travellers or family members",
                  "Other information reasonably necessary to arrange or provide the requested travel services",
                ]}
              />
              <p>
                We seek to collect only information that is reasonably necessary
                for the relevant purpose.
              </p>

              <SubHead title="4.3 Payment and Transaction Information">
                Depending on the payment method used, we may collect or receive:
              </SubHead>
              <Bullets
                items={[
                  "Payment method",
                  "Transaction reference or UTR number",
                  "Payment amount",
                  "Payment date and time",
                  "Booking and invoice information",
                  "Refund information",
                  "Cancellation information",
                  "Chargeback or payment-dispute information",
                  "Information required for payment reconciliation and accounting",
                ]}
              />
              <p>
                Sairr does not ordinarily require or retain your full card
                number, CVV, PIN or banking credentials.
              </p>
              <p>
                Where a third-party payment gateway is used in the future,
                payment credentials may be collected and processed directly by
                the relevant payment provider in accordance with its own privacy
                policy and security practices.
              </p>

              <SubHead title="4.4 Communications Information">
                When you communicate with Sairr, we may collect and retain:
              </SubHead>
              <Bullets
                items={[
                  "Emails and email correspondence",
                  "WhatsApp messages and communications",
                  "Other written communications",
                  "Customer service requests",
                  "Feedback and reviews",
                  "Information provided during calls where subsequently documented for service or operational purposes",
                  "Relevant communication dates and metadata",
                ]}
              />
              <p>
                Sairr does not automatically record telephone calls unless we
                specifically inform you where such recording is being undertaken
                and where required by applicable law.
              </p>

              <SubHead title="4.5 Website, Device and Technical Information">
                When you use our website, we may collect certain technical
                information, including:
              </SubHead>
              <Bullets
                items={[
                  "IP address",
                  "Browser type",
                  "Device type",
                  "Operating system",
                  "Pages visited",
                  "Website interactions",
                  "Date and time of access",
                  "Referring website or source",
                  "Cookies and similar technical information",
                  "Website and security logs",
                ]}
              />
              <p>
                The exact information collected may depend on the technologies
                and analytics tools implemented on our website.
              </p>

              <SubHead title="4.6 Information You Voluntarily Provide">
                You may choose to provide additional information to help us
                understand your preferences, requirements or circumstances.
              </SubHead>
              <p>
                You should avoid providing information that is not reasonably
                necessary for the purpose for which you are communicating with
                us.
              </p>
            </Section>

            <Section number={5} title="Why We Collect and Use Your Information">
              <p>We may use personal information for purposes including:</p>
              <Bullets
                items={[
                  "Responding to enquiries",
                  "Understanding your travel requirements",
                  "Recommending or designing suitable journeys",
                  "Preparing itineraries and quotations",
                  "Making and managing bookings",
                  "Arranging flights, accommodation, transportation, experiences and other travel services",
                  "Coordinating with travel and service providers",
                  "Processing payments, refunds and cancellations",
                  "Providing customer support",
                  "Managing emergency situations where necessary",
                  "Communicating important information about your journey",
                  "Meeting accounting, tax, legal and regulatory obligations",
                  "Preventing fraud, misuse or unauthorised activity",
                  "Improving our services, journeys, operations and customer experience",
                  "Understanding usage of our website and services",
                  "Sending relevant information about new destinations, journeys, experiences or offers, where permitted by law and subject to your choices",
                  "Protecting Sairr’s rights, property, systems and customers",
                  "Other specific purposes communicated to you at or before the time your information is collected",
                ]}
              />
              <p>
                We will not use your personal information for purposes that are
                incompatible with the purpose for which it was collected, except
                where permitted or required by applicable law.
              </p>
            </Section>

            <Section number={6} title="Our Data Privacy Principles">
              <p>
                Sairr seeks to follow the following principles when handling
                personal information:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Principle name="Purpose limitation">
                  We collect and use information for defined purposes.
                </Principle>
                <Principle name="Data minimisation">
                  We seek to collect only information reasonably necessary for
                  those purposes.
                </Principle>
                <Principle name="Accuracy">
                  We seek to maintain accurate and relevant information and may
                  ask you to update information where necessary.
                </Principle>
                <Principle name="Confidentiality">
                  Personal information is treated as confidential and access is
                  restricted based on legitimate business need.
                </Principle>
                <Principle name="Security">
                  We use appropriate technical, organisational and administrative
                  safeguards designed to protect personal information.
                </Principle>
                <Principle name="Limited retention">
                  We do not retain personal information indefinitely where it is
                  no longer reasonably required.
                </Principle>
                <Principle name="No sale of personal information">
                  We do not sell, rent or trade your personal information.
                </Principle>
              </div>
            </Section>

            <Section number={7} title="When We Share Personal Information">
              <p>
                We may share personal information with third parties where
                reasonably necessary to provide our services, comply with law, or
                operate our business.
              </p>
              <p>Depending on your journey, these parties may include:</p>
              <div className="space-y-5">
                <SubHead title="Airlines and travel providers">
                  Information required to issue tickets, manage reservations,
                  comply with travel requirements or provide related services.
                </SubHead>
                <SubHead title="Hotels and accommodation providers">
                  Information required for reservations, check-in,
                  identification, guest management or other accommodation
                  services.
                </SubHead>
                <SubHead title="Transportation and cab providers">
                  Information such as your name, phone number, pickup/drop
                  details and relevant journey information necessary to
                  coordinate transportation.
                </SubHead>
                <SubHead title="Visa and documentation service providers">
                  For international travel, we may share passport, visa and
                  supporting information with relevant providers where required
                  for visa processing or travel documentation.
                </SubHead>
                <SubHead title="Other travel and experience providers">
                  We may share relevant information with guides, activity
                  providers, restaurants, local operators, experience providers
                  or other suppliers where necessary to deliver the journey you
                  have requested.
                </SubHead>
                <SubHead title="Technology and business service providers">
                  We may use third-party providers for services such as:
                </SubHead>
                <Bullets
                  items={[
                    "Cloud storage",
                    "Email and communications",
                    "Customer relationship management",
                    "Website hosting and technology",
                    "Analytics",
                    "Payment processing",
                    "Customer support",
                    "Accounting",
                    "Security and fraud prevention",
                    "Other operational infrastructure",
                  ]}
                />
                <p>
                  Such providers may process information on our behalf and are
                  expected to use it only for authorised purposes and subject to
                  appropriate contractual or other safeguards.
                </p>
                <SubHead title="Professional advisers">
                  We may share information with lawyers, accountants, auditors,
                  consultants, insurers or other professional advisers where
                  reasonably necessary for legitimate business, legal,
                  accounting, compliance or risk-management purposes.
                </SubHead>
                <SubHead title="Government and legal authorities">
                  We may disclose information where required or permitted by
                  applicable law, regulation, court order, governmental request,
                  legal process, or where necessary to protect the rights, safety
                  or security of Sairr, our customers or others.
                </SubHead>
                <SubHead title="Corporate transactions">
                  If Sairr or substantially all of its assets are involved in a
                  merger, acquisition, restructuring, financing, sale or similar
                  transaction, personal information may be transferred as part of
                  that transaction, subject to applicable law and appropriate
                  safeguards.
                </SubHead>
              </div>
            </Section>

            <Section number={8} title="We Share Only What Is Necessary">
              <p>
                Where information must be shared with a third party to deliver a
                service, Sairr seeks to share only the information reasonably
                necessary for that specific purpose.
              </p>
              <p>For example:</p>
              <Bullets
                items={[
                  "A cab provider may receive your name and phone number so the driver can coordinate an airport pickup.",
                  "A hotel may receive identification information required for reservation or check-in.",
                  "An airline may receive information necessary to issue and manage your ticket.",
                  "A visa service provider may receive passport and supporting documents necessary for visa processing.",
                ]}
              />
              <p>
                A service provider receiving your information for these purposes
                is not authorised by Sairr to use that information for unrelated
                advertising or independent commercial purposes on Sairr’s behalf.
              </p>
            </Section>

            <Section number={9} title="WhatsApp, Phone and Email">
              <p>
                Sairr may communicate with you through WhatsApp, telephone and
                email because these channels are important to how we plan and
                operate journeys.
              </p>
              <p>
                When you communicate with us through a third-party platform such
                as WhatsApp or an email provider, that platform may separately
                process your information under its own terms and privacy
                practices.
              </p>
              <p>
                You should review the privacy policies of those providers where
                relevant.
              </p>
            </Section>

            <Section number={10} title="Marketing Communications">
              <p>We may send relevant communications about:</p>
              <Bullets
                items={[
                  "New destinations",
                  "Upcoming journeys",
                  "Experiences",
                  "Offers",
                  "Sairr updates",
                  "Other travel-related information that may reasonably be relevant to you",
                ]}
              />
              <p>
                We do not intend to send spam or unrelated promotional
                communications.
              </p>
              <p>
                You may opt out of marketing communications at any time by
                contacting us or using an unsubscribe mechanism where provided.
              </p>
              <p>
                Opting out of marketing communications will not prevent us from
                sending important service-related communications concerning a
                booking, payment, cancellation, safety matter or journey.
              </p>
            </Section>

            <Section
              number={11}
              title="Cookies, Analytics and Similar Technologies"
            >
              <p>
                Sairr may use cookies, analytics tools, pixels, tags and similar
                technologies in the future to:
              </p>
              <Bullets
                items={[
                  "Operate and secure the website",
                  "Understand how visitors use our website",
                  "Measure website performance",
                  "Improve our website and services",
                  "Understand marketing effectiveness",
                  "Detect misuse or security issues",
                ]}
              />
              <p>
                Where applicable law requires consent for particular technologies
                or uses, we will seek the required consent or provide the
                relevant controls.
              </p>
              <p>
                Third-party analytics or advertising technologies, if used, may
                process information in accordance with their own privacy
                policies.
              </p>
            </Section>

            <Section number={12} title="AI and Technology-Enabled Services">
              <p>
                Sairr may use artificial intelligence, automation and other
                technology-enabled tools to support activities such as:
              </p>
              <Bullets
                items={[
                  "Itinerary planning and research",
                  "Internal analysis",
                  "Customer-service support",
                  "Summarisation",
                  "Operational workflows",
                  "Content and communications",
                  "Service improvement",
                ]}
              />
              <p>
                Where third-party AI or technology providers process personal
                information on our behalf, we will seek to use providers and
                configurations appropriate to the purpose and subject to
                applicable contractual, technical and legal safeguards.
              </p>
              <p>
                Sairr will not knowingly provide customer personal information to
                public or general-purpose AI systems for unrelated third-party
                model training or commercial use, except where such processing is
                appropriately authorised, permitted by applicable law, or
                otherwise necessary for a service you have requested.
              </p>
            </Section>

            <Section number={13} title="Payment Processing">
              <p>
                Sairr currently accepts payment through methods such as UPI, NEFT
                and RTGS.
              </p>
              <p>
                We may introduce online payment gateways or other payment methods
                in the future.
              </p>
              <p>
                Where a third-party payment provider processes your payment, that
                provider may collect and process payment information directly.
                Its handling of payment information will also be subject to its
                own terms and privacy policy.
              </p>
              <p>
                Sairr may retain transaction references, amounts, dates, booking
                information and other records necessary for accounting,
                reconciliation, refunds, disputes, fraud prevention and legal or
                regulatory obligations.
              </p>
            </Section>

            <Section
              number={14}
              title="Government Identification and Travel Documents"
            >
              <p>
                Travel providers may require government identification or travel
                documents.
              </p>
              <p>
                For domestic travel, where a hotel, airline or other travel
                provider requires government-issued identification, including
                Aadhaar, for booking, verification, check-in, security or
                compliance, Sairr facilitates submission of this information
                directly to that provider. Sairr does not itself collect, store
                or retain Aadhaar numbers as an identifier.
              </p>
              <p>
                For international travel, Sairr may collect passport information,
                visa information and supporting documentation where required for
                travel arrangements or visa processing.
              </p>
              <p>
                Such information is used only for relevant travel, verification,
                compliance, operational or legal purposes and is not used for
                advertising or unrelated commercial purposes.
              </p>
            </Section>

            <Section
              number={15}
              title="Special Travel, Medical, Dietary and Accessibility Requirements"
            >
              <p>
                To provide an appropriate and comfortable journey, you may choose
                to tell us about:
              </p>
              <Bullets
                items={[
                  "Medical or health-related requirements relevant to the journey",
                  "Dietary restrictions or preferences",
                  "Mobility requirements",
                  "Accessibility requirements",
                  "Medication-related travel considerations where relevant",
                  "Other special requirements",
                ]}
              />
              <p>
                Where consent is required by applicable law, we will obtain your
                consent before collecting or using such information. We will seek
                to collect and use such information only where reasonably
                necessary to provide the requested service, support a safe and
                appropriate journey, or comply with applicable requirements.
              </p>
              <p>
                Where such information needs to be shared with a hotel, airline,
                transportation provider, restaurant, experience provider, Sairr
                Host or other service provider, we seek to share only the
                information reasonably necessary for the relevant purpose.
              </p>
              <p>
                You should provide only information that is relevant to your
                travel or service requirements.
              </p>
            </Section>

            <Section number={16} title="Emergency Contacts">
              <p>
                You may provide the name and contact details of an emergency
                contact.
              </p>
              <p>
                By providing another person’s information, you confirm that you
                are authorised to provide it for the relevant purpose or have
                otherwise obtained any consent required by applicable law.
              </p>
              <p>
                Emergency contact information may be used to contact that person
                where reasonably necessary in connection with your journey, an
                emergency or another purpose communicated to you.
              </p>
            </Section>

            <Section number={17} title="Information About Other Travellers">
              <p>
                A family member, friend or other person may make an enquiry or
                booking on behalf of a traveller.
              </p>
              <p>
                If you provide personal information relating to another
                traveller, you should ensure that you are authorised to provide
                that information and that the relevant person is aware that their
                information is being provided to Sairr where required by
                applicable law.
              </p>
              <p>
                We may use such information for the same travel, booking,
                operational and service purposes described in this Policy.
              </p>
            </Section>

            <Section
              number={18}
              title="International Travel and Cross-Border Processing"
            >
              <p>
                If you undertake international travel, your information may need
                to be shared with airlines, hotels, transportation providers,
                visa authorities, local service providers or other entities
                located outside India.
              </p>
              <p>
                Our technology and service providers may also process information
                in locations outside India.
              </p>
              <p>
                Where personal information is transferred or processed outside
                India, Sairr will do so in accordance with applicable Indian data
                protection laws and any applicable requirements relating to
                cross-border transfers.
              </p>
            </Section>

            <Section number={19} title="Data Storage and Security">
              <p>
                Sairr takes reasonable measures designed to protect personal
                information against unauthorised access, loss, misuse,
                alteration, disclosure or destruction.
              </p>
              <p>
                Depending on the nature of the information and system involved,
                safeguards may include:
              </p>
              <Bullets
                items={[
                  "Encryption in transit",
                  "Encryption at rest where supported by the relevant system",
                  "Access controls and role-based permissions",
                  "Authentication controls",
                  "Restricted access based on business need",
                  "Security logging and monitoring",
                  "Software updates and security patches",
                  "Secure cloud infrastructure",
                  "Backups and recovery processes",
                  "Internal privacy and security procedures",
                  "Vendor and service-provider controls",
                  "Incident response procedures",
                ]}
              />
              <p>
                Access to personal information is limited to people and service
                providers who have a legitimate need to access it for authorised
                purposes.
              </p>
              <p>
                No method of storing or transmitting information can guarantee
                absolute security. However, Sairr seeks to continuously improve
                its safeguards and respond appropriately to security risks.
              </p>
            </Section>

            <Section number={20} title="Data Breach and Security Incidents">
              <p>
                If Sairr becomes aware of a personal data breach or security
                incident, we will take reasonable steps appropriate to the
                circumstances, which may include:
              </p>
              <Bullets
                items={[
                  "Assessing and containing the incident",
                  "Investigating its nature and scope",
                  "Taking steps to prevent further unauthorised access",
                  "Restoring affected systems where necessary",
                  "Assessing potential impact on affected individuals",
                  "Taking corrective and preventive measures",
                  "Making notifications to affected individuals or authorities where required by applicable law",
                ]}
              />
            </Section>

            <Section number={21} title="Data Retention and Deletion">
              <p>
                Sairr seeks to retain personal information only for as long as
                reasonably necessary for the purpose for which it was collected,
                or for longer where required or permitted by applicable law.
              </p>
              <p>Retention periods may depend on:</p>
              <Bullets
                items={[
                  "Whether an enquiry or booking remains active",
                  "The completion of a journey",
                  "Accounting and tax requirements",
                  "Legal or regulatory obligations",
                  "Dispute resolution",
                  "Fraud prevention and security",
                  "Warranty or service-related requirements",
                  "Legitimate business record-keeping needs",
                ]}
              />
              <p>
                Travel documents such as identity documents, passports and visa
                information will not be retained indefinitely where they are no
                longer reasonably required.
              </p>
              <p>
                When personal information is no longer required, Sairr will seek
                to delete, anonymise or otherwise securely dispose of it, subject
                to applicable legal, regulatory, accounting, security or
                operational requirements.
              </p>
              <p>
                Information contained in backups may remain for a limited period
                until the applicable backup cycle expires.
              </p>
            </Section>

            <Section number={22} title="Your Privacy Rights and Choices">
              <p>
                Subject to applicable law and verification requirements, you may
                have rights and choices relating to your personal information,
                including the ability to:
              </p>
              <Bullets
                items={[
                  "Request information about personal data held by Sairr",
                  "Request correction or updating of inaccurate or incomplete information",
                  "Request deletion of personal information where applicable",
                  "Withdraw consent where processing is based on consent and withdrawal is legally available. Where processing is based on consent, you may withdraw it using a process that is at least as simple as the process by which you gave it",
                  "Opt out of marketing communications",
                  "Raise a grievance regarding the handling of your personal information",
                  "Raise a complaint with the Data Protection Board of India where permitted under applicable law, including where a grievance remains unresolved after being raised with us",
                  "Exercise other rights available under applicable data protection law",
                ]}
              />
              <p>
                Some requests may not be capable of being fulfilled immediately
                or completely where Sairr is legally required or permitted to
                retain particular information.
              </p>
              <p>
                We may need to verify your identity before acting on a privacy
                request in order to protect your information from unauthorised
                disclosure or access.
              </p>
              <p>
                If another person is making a request on your behalf, we may
                require evidence of their authority to act for you.
              </p>
            </Section>

            <Section number={23} title="Your Responsibilities">
              <p>
                You are responsible for providing information that is accurate,
                complete and current to the extent reasonably required for the
                services you request.
              </p>
              <p>
                You should promptly inform Sairr if important travel or contact
                information changes.
              </p>
              <p>
                You should also take reasonable care when sharing identification
                documents, payment information or other personal information
                through communication channels and should not provide information
                that is unnecessary for the relevant purpose.
              </p>
            </Section>

            <Section number={24} title="Children">
              <p>
                Sairr’s services are primarily for travellers over 50 and their
                families.
              </p>
              <p>
                For purposes of applicable Indian data protection law, a child is
                generally a person under 18 years of age.
              </p>
              <p>
                Sairr does not knowingly seek to collect personal information
                from children except where reasonably necessary for a service,
                booking or other legitimate purpose and where the required
                parental or guardian consent or other legal requirements apply.
              </p>
              <p>
                If you believe that a child has provided personal information to
                Sairr without the required consent, please contact us so that we
                can review the situation and take appropriate action.
              </p>
            </Section>

            <Section number={25} title="Photography and Trip Content">
              <p>
                During some journeys, a Sairr Host may capture photographs or
                videos of travellers and moments from the journey to help document
                the experience and create memories for travellers.
              </p>
              <p>
                We will not use identifiable photographs or videos of you for
                public marketing, advertising, social media or other promotional
                purposes without obtaining the appropriate permission or consent.
              </p>
              <p>
                Where photographs or videos are captured for you as part of your
                journey, they may be shared with you for your personal use.
              </p>
              <p>
                If you do not wish to be photographed or filmed during a journey,
                you can let your Sairr Host know at any time. We will respect
                your preference, subject to situations where other travellers or
                the broader environment make complete avoidance impractical.
              </p>
              <p>
                If you voluntarily share photographs, videos, reviews or other
                content with Sairr, we will use that content only in accordance
                with the permission or consent provided and applicable law.
              </p>
            </Section>

            <Section number={26} title="Third-Party Websites and Services">
              <p>
                Our website or communications may contain links to websites,
                platforms or services operated by third parties.
              </p>
              <p>
                Sairr is not responsible for the privacy practices, security or
                content of third-party websites or services.
              </p>
              <p>
                We encourage you to review the privacy policies of third parties
                before providing them with personal information.
              </p>
            </Section>

            <Section number={27} title="Data Processors and Service Providers">
              <p>
                Sairr may appoint third-party service providers to process
                personal information on our behalf.
              </p>
              <p>These may include providers of:</p>
              <Bullets
                items={[
                  "Cloud storage",
                  "Email and communications",
                  "Website hosting",
                  "Customer relationship management",
                  "Analytics",
                  "Payment processing",
                  "Customer support",
                  "Accounting",
                  "Security",
                  "IT infrastructure",
                  "Travel operations",
                ]}
              />
              <p>
                We seek to engage providers appropriate to the relevant service
                and, where applicable, require them to maintain appropriate
                confidentiality, security and data-protection safeguards.
              </p>
              <p>
                Where required by applicable law, Sairr remains responsible for
                ensuring that processing carried out on its behalf is subject to
                appropriate safeguards.
              </p>
            </Section>

            <Section number={28} title="No Sale or Unauthorised Commercial Use">
              <p>Sairr does not sell, rent or trade personal information.</p>
              <p>
                We do not provide your personal information to advertisers, data
                brokers or unrelated businesses for their independent marketing
                or commercial purposes.
              </p>
              <p>
                We may, however, share information with service providers and
                travel partners where reasonably necessary to provide services
                you have requested, operate our business, comply with law,
                protect our rights or fulfil other purposes described in this
                Policy.
              </p>
            </Section>

            <Section number={29} title="Corporate Transactions">
              <p>
                If Sairr is involved in a merger, acquisition, investment,
                restructuring, financing, sale of assets or other corporate
                transaction, personal information may be transferred to relevant
                parties as part of the transaction, subject to applicable law and
                appropriate confidentiality and data-protection safeguards.
              </p>
              <p>
                Where required by law, affected individuals or authorities will
                be notified.
              </p>
            </Section>

            <Section number={30} title="Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time to reflect:</p>
              <Bullets
                items={[
                  "Changes in our services",
                  "New technologies or operational practices",
                  "Changes to applicable law",
                  "Changes to our data-processing activities",
                  "Improvements to our privacy and security practices",
                ]}
              />
              <p>
                The updated version will be published on our website with a
                revised “Last Updated” date.
              </p>
              <p>
                Where required by applicable law, we will provide additional
                notice or obtain consent for material changes.
              </p>
            </Section>

            <Section number={31} title="Governing Law">
              <p>
                This Privacy Policy is governed by the laws of India, subject to
                any mandatory rights or remedies available to you under
                applicable law.
              </p>
            </Section>

            <Section number={32} title="Privacy Contact and Grievance">
              <p>
                If you have a question, request or grievance regarding your
                personal information or this Privacy Policy, you may contact us
                at:
              </p>
              <address className="not-italic">
                <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
                  <p className="font-heading text-base font-semibold text-charcoal">
                    Meenadeep Experiences Private Limited
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate sm:text-base">
                    <p>Brand: Sairr</p>
                    <p>
                      Registered Office: 67, Sitanagar, Jaiprakash Nagar,
                      Somalwada, Wardha Road, Nagpur, Maharashtra – 440025, India
                    </p>
                    <p>
                      Website:{" "}
                      <a
                        href="https://sairr.in"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        sairr.in
                      </a>
                    </p>
                    <p>
                      Privacy and Grievance Contact:{" "}
                      <a
                        href="mailto:hello@sairr.in"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        hello@sairr.in
                      </a>
                    </p>
                    <p>
                      Phone / WhatsApp:{" "}
                      <a
                        href="tel:+919971737186"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        +91 99717 37186
                      </a>
                    </p>
                  </div>
                </div>
              </address>
              <p>
                We will review and respond to privacy-related requests in
                accordance with applicable law and within the timelines
                prescribed by law, where applicable.
              </p>
              <p>
                If applicable law requires Sairr to appoint a Data Protection
                Officer or other designated privacy or grievance contact, the
                relevant details will be published or provided as required.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
