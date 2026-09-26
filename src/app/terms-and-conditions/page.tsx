import {
  Bullets,
  LegalHero,
  Section,
  SubHead,
} from "@/components/shared/LegalDoc";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "How bookings, payments, changes, cancellations and support work when you travel with Sairr.",
  path: "/terms-and-conditions",
});

const keyTerms: { term: string; definition: string }[] = [
  {
    term: "“Sairr” or “we”",
    definition:
      "means Meenadeep Experiences Private Limited, operating under the brand Sairr.",
  },
  {
    term: "“Traveller”",
    definition:
      "means any individual travelling on a Sairr Journey, whether or not that person made the booking or payment.",
  },
  {
    term: "“Customer”",
    definition:
      "means the person who makes a booking and is treated as Sairr’s primary point of contact for that booking, including where the booking is made for another traveller.",
  },
  {
    term: "“Purchaser”",
    definition:
      "means the person who books and pays for a gifted Journey, as described in Section 8.",
  },
  {
    term: "“Sairr Host”",
    definition:
      "means the individual assigned by Sairr to coordinate and support a Journey, as described in Section 12.",
  },
  {
    term: "“Supplier”",
    definition:
      "means any independent third party, including airlines, hotels, transportation providers, activity operators, guides and restaurants, through which Sairr arranges a component of a Journey.",
  },
  {
    term: "“Booking Confirmation”",
    definition:
      "means the written confirmation Sairr issues once a booking is confirmed, as described in Section 3.",
  },
  {
    term: "“Journey”",
    definition:
      "means the group, private or gifted travel experience booked through Sairr.",
  },
];

export default function TermsPage() {
  return (
    <>
      <LegalHero
        eyebrow="Terms & Conditions"
        title="Clear terms. No surprises."
        intro="How bookings, payments, changes, cancellations and support work when you travel with Sairr."
      />

      <section className="bg-mist pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand">
            Effective: 22 September 2026
          </p>

          <div className="mt-8 space-y-10">
            <Section number={1} title="About These Terms">
              <p>
                These Terms & Conditions (“Terms”) govern the travel services
                provided or arranged by Sairr, the brand under which Meenadeep
                Experiences Private Limited (“Sairr”, “we”, “us” or “our”)
                operates. They apply whenever you enquire about, book, pay for,
                or participate in a Sairr Journey, whether through our website,
                app, WhatsApp, phone, email or any other channel through which
                Sairr offers or provides its services.
              </p>
              <p>
                These Terms apply to all Sairr Journeys, including group,
                private and gifted Journeys. By booking or using a Sairr
                service, you confirm that you have read and accepted these
                Terms. If you are booking on behalf of another traveller, you
                confirm that you are authorised to do so and that the relevant
                traveller has been informed of these Terms.
              </p>
              <p>
                These Terms are read together with your Booking Confirmation
                and any Journey-specific terms Sairr provides for your booking.
                Where Journey-specific terms expressly apply to a particular
                booking, they will govern that booking to the extent of any
                inconsistency with these Terms.
              </p>
              <p>
                We’ve written these Terms to set out a clear and fair
                understanding of what you can expect from us, and what we
                expect from you.
              </p>
              <SubHead title="Key terms used in these Terms" />
              <dl className="grid gap-4 sm:grid-cols-2">
                {keyTerms.map(({ term, definition }) => (
                  <div key={term} className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
                    <dt className="font-heading text-base font-semibold text-brand">
                      {term}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate sm:text-base">
                      {definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section number={2} title="Sairr’s Services & Our Role">
              <p>
                Sairr’s role is to plan, coordinate and support your Journey
                end-to-end. This includes understanding your requirements,
                designing or curating your itinerary, arranging its components,
                and providing on-Journey support through a Sairr Host, where
                included in your booking.
              </p>
              <p>
                Your Journey may include flights, accommodation, ground
                transportation, activities, guides, meals and other services
                delivered by independent Suppliers. Sairr arranges and
                coordinates these services on your behalf, and works with each
                Supplier so that what’s set out in your Booking Confirmation is
                delivered as agreed.
              </p>
              <p>
                You don’t need to coordinate with individual Suppliers
                yourself. Sairr remains your single point of contact for the
                Journey and will step in on your behalf if something doesn’t go
                to plan.
              </p>
              <p>
                Suppliers are independent businesses. Sairr does not own,
                operate or employ them or their staff, unless expressly stated
                in your Booking Confirmation. Their independence does not
                change Sairr’s role in coordinating your Journey or supporting
                you when something arranged by Sairr doesn’t go as planned.
                Section 15 (Liability) sets out the applicable liability
                framework.
              </p>
            </Section>

            <Section number={3} title="Bookings & Confirmation">
              <p>
                You can express interest or reserve a spot without payment. A
                departure becomes confirmed once Sairr confirms that it will
                run for your requested date. Your booking is confirmed once you
                have agreed to the applicable price and payment terms, made the
                required payment, and received written Booking Confirmation
                from Sairr. Until a Booking Confirmation is issued, Sairr does
                not guarantee the availability of any Journey, date, price,
                accommodation, transport, or other service.
              </p>
              <SubHead title="The Booking Confirmation is the authoritative record" />
              <p>
                Your Booking Confirmation is the authoritative record of your
                booking. It sets out the applicable inclusions and exclusions,
                itinerary, accommodation, transport, meals and experiences,
                dates and duration, total price, payment schedule, and
                cancellation and refund terms for your specific Journey.
              </p>
              <p>
                If information on Sairr’s website, social media, marketing
                material or earlier communications differs from your Booking
                Confirmation, the Booking Confirmation will govern. Any changes
                after confirmation will be subject to Section 6 (Changes to
                Your Journey).
              </p>
              <p>
                You should review your Booking Confirmation promptly and notify
                Sairr of any error or discrepancy.
              </p>
            </Section>

            <Section number={4} title="Prices & Payments">
              <SubHead title="Prices" />
              <p>
                Prices shown on Sairr’s website are indicative. The final price
                may vary based on dates, seasonality, occupancy and flight fare
                movements between the time of your enquiry and confirmation.
                Except for flight-fare-driven movement, changes you request, or
                government-imposed taxes and levies, the final price will not
                vary by more than 10% from the indicative price shown to you at
                the time of your enquiry.
              </p>
              <p>
                Once your booking is confirmed, the price stated in your
                Booking Confirmation is final, except for changes permitted
                under these Terms, including changes requested by you under
                Section 6 (Changes to Your Journey) or government-imposed
                taxes, levies or charges that become applicable after
                confirmation.
              </p>
              <p>
                Prices are quoted in INR unless your Booking Confirmation
                states otherwise. The confirmed price includes the stated
                inclusions and excludes the stated exclusions.
              </p>
              <SubHead title="Payment" />
              <p>
                You can express interest in a Journey and reserve a spot at no
                cost. Once the departure meets the applicable minimum group
                size and is confirmed to run, as described in Section 3, a 50%
                advance is due to secure your flights, accommodation, transport
                and other arrangements. The remaining 50% is due 21 days before
                departure. If you book within 21 days of departure, full
                payment is required upfront.
              </p>
              <p>
                If a departure cannot be confirmed because the minimum group
                size is not met, you will not be charged. You may choose
                another available departure for the same Journey, subject to
                availability and the applicable price.
              </p>
              <p>
                Your Booking Confirmation will state the applicable payment
                schedule and due dates. If a payment is not received by its due
                date, the booking will be treated as cancelled and the
                applicable cancellation charges under Section 5 (Cancellations
                & Refunds) will apply.
              </p>
              <p>
                Sairr currently accepts UPI, NEFT and RTGS, and may introduce
                other payment methods, including third-party payment gateways.
                Where a gateway is used, the provider’s own terms will also
                apply to the payment transaction.
              </p>
            </Section>

            <Section number={5} title="Cancellations & Refunds">
              <p>
                If you wish to cancel a confirmed booking, the following
                cancellation charges apply based on how many days remain before
                departure, unless your Booking Confirmation expressly specifies
                a different cancellation schedule for your Journey:
              </p>
              <Bullets
                items={[
                  "30 days or more before departure: Full refund, minus any applicable flight cancellation charges.",
                  "15–29 days before departure: 50% of the trip cost is retained as a cancellation charge.",
                  "8–14 days before departure: 75% of the trip cost is retained as a cancellation charge.",
                  "7 days or less before departure: The trip cost is non-refundable.",
                ]}
              />
              <p>
                In no case will the cancellation charge exceed the amount you
                have actually paid.
              </p>
              <p>
                The applicable cancellation tier is determined by the date
                Sairr receives your written cancellation request. “Departure”
                means the scheduled departure date stated in your Booking
                Confirmation.
              </p>
              <p>
                Any refund due will be processed to your original payment
                source within 7–10 working days of your cancellation being
                confirmed.
              </p>
              <p>
                This Section does not apply to cancellations arising from a
                Force Majeure Event, which are governed by Section 14 (Force
                Majeure & Unavoidable Events).
              </p>
              <p>
                If a Traveller does not show up for departure without prior
                cancellation, this will be treated as a cancellation received
                on the date of departure, and the applicable cancellation
                charge under this Section will apply.
              </p>
              <p>
                If Sairr cancels a confirmed Journey for reasons within Sairr’s
                control, you can choose a full refund of all amounts paid, or
                reschedule to another available date at no extra cost.
              </p>
            </Section>

            <Section number={6} title="Changes & Rescheduling">
              <SubHead title="Changes requested by you" />
              <p>
                If you’d like to reschedule your travel dates, change the
                number of travellers, or request another change to a confirmed
                booking, please let Sairr know as soon as possible. We’ll do
                our best to accommodate your request, subject to availability
                and feasibility.
              </p>
              <p>
                A requested change may affect the price, itinerary, inclusions
                or other arrangements for your Journey. Any additional costs,
                including fare differences, rebooking charges or other
                applicable charges, will be communicated to you before the
                change is confirmed.
              </p>
              <p>
                If we’re unable to accommodate your requested change and you
                choose not to proceed with your existing booking, the
                cancellation terms in Section 5 (Cancellations & Refunds) will
                apply.
              </p>
              <SubHead title="Changes made by Sairr" />
              <p>
                While we aim to deliver your Journey as confirmed,
                circumstances may sometimes require us to make changes to the
                itinerary, accommodation, transport, activities, timings or
                other arrangements. If we need to make a material change, we
                will maintain the same or a higher standard of experience at no
                extra cost to you, and will inform you as soon as possible.
              </p>
              <p>
                Sairr may make minor adjustments to the itinerary for safety or
                operational reasons, such as weather conditions, without this
                being treated as a material change under this Section. No
                refund or compensation applies for such adjustments, as these
                are made for your safety and are outside Sairr’s control.
              </p>
              <p>
                If you don’t wish to proceed after such a change, the standard
                cancellation terms in Section 5 (Cancellations & Refunds) will
                apply.
              </p>
              <p>
                We will always do our best to minimise any disruption to your
                plans.
              </p>
              <p>
                If your Journey needs to change or is disrupted due to
                circumstances beyond reasonable control, including weather,
                government restrictions or other Force Majeure Events, Section
                14 (Force Majeure & Unavoidable Events) will apply.
              </p>
            </Section>

            <Section number={7} title="Third-Party Suppliers">
              <p>
                Sairr carefully curates a trusted network of high-quality
                Suppliers, including airlines, hotels, transportation
                providers, activity operators, guides and restaurants. We
                select Suppliers based on factors such as quality,
                reliability, service standards and suitability for the
                travellers we serve. Sairr sets clear service expectations with
                each Supplier for the travellers we bring them, and stays
                closely engaged with them throughout your Journey.
              </p>
              <p>
                Each Supplier operates its own business and may have its own
                terms, conditions, policies and requirements that apply to the
                specific service it provides.
              </p>
              <p>
                Where a Supplier’s own terms apply to a specific component of
                your Journey, for example an airline’s baggage policy or a
                hotel’s check-in policy, those terms will apply in addition to
                these Terms and govern that specific operational matter.
              </p>
              <p>
                Sairr remains your single point of contact throughout your
                Journey. If a problem arises with a Supplier, we will
                coordinate with them on your behalf and work to resolve the
                issue and help you pursue an appropriate remedy.
              </p>
              <p>
                Sairr’s responsibility and liability in relation to services
                provided by independent Suppliers are set out in Section 15
                (Liability).
              </p>
            </Section>

            <Section number={8} title="Group, Private & Gifted Journeys">
              <SubHead title="Group journeys">
                Group Journeys follow a fixed itinerary and shared inclusions
                for all Travellers on that departure, as set out in the Booking
                Confirmation.
              </SubHead>
              <SubHead title="Private journeys">
                Private Journeys are customised to your requirements, dates and
                preferences, with the itinerary, inclusions and price agreed
                with you in advance.
              </SubHead>
              <SubHead title="Gifted journeys">
                For gifted Journeys, the person making and paying for the
                booking may be different from the Traveller; unless otherwise
                authorised, Sairr will treat the Purchaser as the Customer for
                booking, payment, changes, cancellations and refunds.
              </SubHead>
            </Section>

            <Section
              number={9}
              title="Travel Documents, Visas & International Travel"
            >
              <p>
                Each Traveller is responsible for holding valid identification
                proof, such as an Aadhaar card or driving licence, and any
                other documents required for travel, including by airlines,
                hotels or local authorities. Where a Journey involves
                international travel, additional requirements including
                passports and visas may apply, and travel insurance may be
                required for certain Journeys, as stated in your Booking
                Confirmation. Sairr will share the specific document and travel
                requirements at the time of booking.
              </p>
            </Section>

            <Section number={10} title="Traveller Responsibilities & Conduct">
              <p>Each Traveller is responsible for:</p>
              <Bullets
                items={[
                  "providing accurate and complete information to Sairr, and informing us promptly if any information relevant to their Journey changes;",
                  "making payments on time, in accordance with the Booking Confirmation;",
                  "holding valid travel documents as described in Section 9;",
                  "taking care of their personal belongings and valuables during the Journey;",
                  "following safety instructions given by the Sairr Host or a Supplier during the Journey;",
                  "being ready and on time for scheduled departures, transfers and activities;",
                  "making their own decisions about participation in optional activities or activities outside the confirmed itinerary;",
                  "behaving in a manner that does not endanger, harass or materially disrupt other Travellers, the Sairr Host or Supplier staff; and",
                  "complying with applicable local laws, customs regulations and relevant codes of conduct at the destination.",
                ]}
              />
              <p>
                If a Traveller’s conduct seriously endangers others, materially
                disrupts the Journey or seriously breaches applicable rules,
                Sairr may restrict their participation in the affected part of
                the Journey where genuinely necessary to protect the safety or
                experience of others. Sairr will exercise this only reasonably,
                and will communicate clearly with the Traveller concerned.
              </p>
            </Section>

            <Section
              number={11}
              title="Health, Accessibility, Dietary & Special Requirements"
            >
              <p>
                Travellers should inform Sairr of any medical, mobility,
                accessibility, dietary or other requirement that is relevant to
                their safe and comfortable participation in the Journey or to
                arrangements Sairr needs to make on their behalf.
              </p>
              <p>
                Sairr will do its best to accommodate disclosed requirements
                and, where needed, coordinate with relevant Suppliers to make
                the necessary arrangements.
              </p>
              <p>
                If a requirement makes a particular activity or arrangement
                unsafe or impractical for a Traveller, Sairr may modify or
                decline that specific activity or arrangement for that
                Traveller and, where possible, offer a suitable alternative.
              </p>
              <p>
                Sairr Hosts are not medical professionals and should not be
                relied upon for medical care. However, if a health-related
                situation arises during your Journey, your Sairr Host will do
                their best to assist you and help you access appropriate
                medical support.
              </p>
              <p>
                If a Traveller deliberately withholds or materially misstates
                information that is relevant to their safe participation or the
                arrangements required for their Journey, Sairr will not be
                responsible for consequences that could reasonably have been
                avoided had accurate information been provided.
              </p>
            </Section>

            <Section number={12} title="Sairr Host & On-Journey Support">
              <p>
                A Sairr Host travels with the group throughout the Journey,
                walking alongside you every step of the way. The Host takes
                care of you from pickup to drop-off, looks after the details
                along the way, guides you through the Journey, coordinates
                day-to-day arrangements and helps ensure everything runs
                smoothly.
              </p>
              <p>
                The Host also manages exceptions and escalations, coordinates
                with the Sairr team and relevant Suppliers when needed, and
                helps when something doesn’t go as planned. They may also
                capture moments from the Journey with your permission, as set
                out in Sairr’s{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                A Sairr Host is not a medical or security professional, but
                will always do their best to assist you and help you access
                appropriate professional or emergency support when needed.
              </p>
            </Section>

            <Section number={13} title="Travel Insurance">
              <p>
                Sairr recommends that every Traveller have appropriate travel
                insurance for their Journey, including cover for matters such
                as medical emergencies, trip cancellation, evacuation and
                personal belongings, as applicable.
              </p>
              <p>
                Sairr may include travel insurance in the price of a Journey or
                offer it as an optional add-on. Where insurance is included or
                purchased through Sairr, the applicable coverage, terms and
                price will be communicated before booking, and Sairr will
                assist with coordinating a claim if needed. Where a Traveller
                arranges their own insurance independently, any claim is
                between the Traveller and their insurer directly. For certain
                Journeys, particularly international Journeys, valid travel
                insurance may be required as a condition of booking or travel,
                as stated in your Booking Confirmation.
              </p>
              <p>
                Sairr is not an insurer. Any insurance provided or arranged
                through Sairr is issued by the relevant insurance company and
                is governed by its terms and conditions. Any claim must be made
                directly with the insurer, and Sairr cannot guarantee the
                outcome of any claim.
              </p>
            </Section>

            <Section number={14} title="Force Majeure & Unavoidable Events">
              <p>
                Neither Sairr nor a Supplier is responsible for a failure or
                delay caused by circumstances beyond their control, including
                natural disasters, extreme weather, pandemics, government
                action or travel restrictions, strikes, war, terrorism, or
                major unscheduled transport disruption (each, a “Force Majeure
                Event”).
              </p>
              <p>
                If a Force Majeure Event affects your Journey, Sairr will
                inform you as soon as possible and work to find suitable
                alternatives or minimise the impact on your plans.
              </p>
              <p>
                Where a Journey is cancelled or cannot proceed due to a Force
                Majeure Event, Sairr will refund whatever amount can be
                recovered, released or refunded in the circumstances, and will
                explore rescheduling your Journey as an alternative where
                possible. In some cases, no amount may be recoverable. Sairr
                will keep you informed either way.
              </p>
              <p>Sairr will handle every situation fairly and in good faith.</p>
            </Section>

            <Section number={15} title="Liability">
              <SubHead title="How responsibility is shared" />
              <p>
                Sairr is responsible for the services it directly provides,
                including planning, coordination and the Sairr Host’s role, and
                for exercising reasonable care in selecting and coordinating
                Suppliers, communicating material changes promptly, and helping
                resolve problems that arise with a Supplier during your
                Journey.
              </p>
              <p>
                Each Traveller is responsible for the matters set out in
                Sections 9, 10 and 11, principally accurate information, valid
                documents, timely payment, personal decisions and belongings,
                and disclosure of relevant requirements.
              </p>
              <p>
                Suppliers remain responsible for the services they
                independently operate and the policies that apply to those
                services, while Sairr remains responsible for its own role in
                arranging and coordinating them.
              </p>
              <p>
                Neither Sairr nor a Supplier is responsible for Force Majeure
                Events, which are covered separately in Section 14.
              </p>
              <SubHead title="Legal position" />
              <p>
                To the maximum extent permitted by law, Sairr’s liability to
                you in connection with a Journey, whether for a service Sairr
                directly provides or for its role in arranging and coordinating
                a Supplier’s service, is limited to the amount you paid to
                Sairr for the Journey giving rise to the claim.
              </p>
              <p>
                To the maximum extent permitted by law, Sairr is not liable for
                indirect or consequential loss, including loss of enjoyment,
                except where this arises from Sairr’s own fraud, wilful default
                or gross negligence.
              </p>
              <p>
                Nothing in these Terms excludes or limits any liability, right
                or remedy that cannot lawfully be excluded or limited under
                applicable law, including under the Consumer Protection Act,
                2019. Where any provision of these Terms would otherwise have
                that effect, it applies only to the extent permitted by law,
                and the remainder of this Section continues to apply.
              </p>
            </Section>

            <Section number={16} title="Complaints & Customer Support">
              <p>
                If an issue arises during your Journey, please raise it with
                your Sairr Host as soon as possible, so we have an opportunity
                to help resolve it while you’re still travelling. If something
                doesn’t feel right, tell us; you can reach Sairr directly at
                any time.
              </p>
              <p>
                If you’d like to raise a complaint after your Journey, contact
                us at{" "}
                <a
                  href="mailto:hello@sairr.in"
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                >
                  hello@sairr.in
                </a>{" "}
                or on WhatsApp/phone at{" "}
                <a
                  href="tel:+919971737186"
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                >
                  +91 99717 37186
                </a>
                . We encourage you to raise complaints within 30 days of the
                Journey ending so that we can review them promptly. We’ll
                acknowledge your complaint, review it in good faith and respond
                as soon as possible.
              </p>
              <p>
                If a complaint isn’t resolved to your satisfaction, you retain
                any right or remedy available to you under applicable law,
                including the Consumer Protection Act, 2019.
              </p>
            </Section>

            <Section number={17} title="Intellectual Property">
              <p>
                The Sairr name, logo, brand assets, itinerary designs, written
                content and other materials Sairr provides to you belong to
                Sairr or its licensors, and are protected under applicable
                intellectual property laws.
              </p>
              <p>
                You may use materials Sairr gives you, such as your itinerary
                or Booking Confirmation, for your own personal use in
                connection with your Journey. You may not reproduce,
                distribute, publicly display or create derivative works from
                Sairr’s materials for any other purpose without Sairr’s prior
                written consent.
              </p>
              <p>
                Any photographs, videos or other content Sairr creates during
                your Journey remain Sairr’s content. Where such content
                identifies you, Sairr’s use of it for marketing, social media
                or other public purposes will be subject to your permission, as
                set out in Sairr’s{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                >
                  Privacy Policy
                </a>
                . Photographs, videos or other content you voluntarily share
                with Sairr will be used only as described in the Privacy
                Policy.
              </p>
            </Section>

            <Section number={18} title="Privacy Policy Reference">
              <p>
                Sairr’s collection, use, sharing and retention of your personal
                information is governed by Sairr’s{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                >
                  Privacy Policy
                </a>
                , available at sairr.in, which forms part of the contractual
                framework between you and Sairr in relation to how Sairr
                handles your personal information.
              </p>
              <p>
                Where these Terms and the Privacy Policy address the same
                subject, the Privacy Policy governs matters relating to the
                handling of your personal information, while these Terms govern
                the commercial and travel relationship between you and Sairr.
              </p>
            </Section>

            <Section
              number={19}
              title="General Terms, Governing Law & Contact"
            >
              <SubHead title="Indemnity">
                You agree to indemnify Sairr against losses, costs and expenses
                Sairr reasonably incurs as a direct result of your unlawful
                conduct, fraud, deliberate misconduct, or material breach of
                these Terms. This indemnity does not apply to losses arising
                from Sairr’s own negligence or breach of these Terms.
              </SubHead>
              <SubHead title="Fraud & Misrepresentation">
                You must provide Sairr with accurate and complete information
                for your booking. If Sairr reasonably believes that a booking
                involves fraudulent information, unauthorised use of payment
                details, or a material misrepresentation of fact, Sairr may
                cancel the affected booking, subject to applicable law. Where a
                booking is cancelled under this provision, Sairr will return
                amounts paid, less any costs Sairr has reasonably and
                unavoidably incurred in connection with that booking.
              </SubHead>
              <SubHead title="Changes to These Terms">
                Sairr may update these Terms from time to time to reflect
                changes in its services, operating practices or applicable law.
                The updated Terms will be published at sairr.in with a revised
                effective date. Changes apply prospectively to bookings made
                after the update; a Journey already confirmed remains governed
                by the Terms in effect on the date its Booking Confirmation was
                issued, unless a change is required by law or necessary for
                safety.
              </SubHead>
              <SubHead title="Assignment">
                Sairr may assign or transfer its rights and obligations under
                these Terms to a successor entity in connection with a merger,
                acquisition, restructuring or sale of substantially all of its
                business, provided that this does not materially reduce your
                rights under these Terms. Sairr will notify you of any such
                assignment that affects your Journey. You may not assign your
                rights or obligations under these Terms without Sairr’s prior
                written consent.
              </SubHead>
              <SubHead title="Severability">
                If any provision of these Terms is found to be invalid or
                unenforceable, that provision will apply to the minimum extent
                necessary to remove the invalidity, and the remaining
                provisions will continue in full force and effect.
              </SubHead>
              <SubHead title="Waiver">
                Sairr’s failure to enforce any provision of these Terms on a
                particular occasion does not waive its right to enforce that
                provision, or any other provision, on a later occasion.
              </SubHead>
              <SubHead title="Entire Agreement">
                For a specific Journey, these Terms and your Booking
                Confirmation together constitute the agreement between you and
                Sairr in relation to that Journey. Any applicable Supplier
                terms referenced under Section 7 apply separately to the
                specific Supplier service to which they relate. These Terms and
                the Booking Confirmation supersede prior discussions or
                representations on the same subject.
              </SubHead>
              <SubHead title="Relationship Between Parties">
                Nothing in these Terms creates a partnership, joint venture, or
                employment relationship between you and Sairr, or between Sairr
                and any Supplier. Each Supplier operates as an independent
                business and is not Sairr’s agent or employee.
              </SubHead>
              <SubHead title="Notices & Communication">
                Sairr may communicate with you regarding your booking and
                Journey through WhatsApp, email, telephone, or other contact
                details you have provided to Sairr, and such communication will
                be treated as valid notice for the purposes of these Terms. You
                are responsible for ensuring that the contact details you
                provide to Sairr remain accurate and accessible.
              </SubHead>
              <SubHead title="Governing Law & Jurisdiction">
                These Terms are governed by the laws of India. Subject to any
                mandatory jurisdiction available to you under applicable law,
                courts at Nagpur, Maharashtra shall have jurisdiction over
                disputes arising out of or in connection with these Terms. This
                does not affect any right or remedy you may have under
                applicable law, including the Consumer Protection Act, 2019.
              </SubHead>
              <SubHead title="Contact Details" />
              <address className="not-italic">
                <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
                  <div className="space-y-2 text-sm leading-relaxed text-slate sm:text-base">
                    <p>
                      Meenadeep Experiences Private Limited, operating as
                      Sairr.
                    </p>
                    <p>
                      Website:{" "}
                      <a
                        href="https://sairr.in"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        sairr.in
                      </a>
                      .
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:hello@sairr.in"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        hello@sairr.in
                      </a>
                      .
                    </p>
                    <p>
                      Phone / WhatsApp:{" "}
                      <a
                        href="tel:+919971737186"
                        className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
                      >
                        +91 99717 37186
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </address>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
