import Accordion from "./Accordion";

const accordionItems = [
  {
    title: "Our Purpose",
    content: (
      <div className="space-y-3">
        <p>
          Salt & Sage Advisory Group exists to unlock the potential within
          organizations by providing strategic guidance, operational clarity,
          and leadership alignment. We believe that sustainable growth comes
          from disciplined infrastructure, aligned leadership, and performance
          visibility—not guesswork.
        </p>
        <p>
          Our mission is to reduce the friction between vision and execution,
          enabling leaders to move with confidence and their teams to thrive.
        </p>
      </div>
    ),
  },
  {
    title: "Our Services",
    content: (
      <div className="space-y-3">
        <p>
          We offer a comprehensive suite of advisory services tailored to your
          organization's stage and challenges:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Strategic Planning:</strong> Clarify direction, identify
            key levers, and build executable roadmaps
          </li>
          <li>
            <strong>Operational Excellence:</strong> Design systems that scale,
            reduce friction, and improve visibility
          </li>
          <li>
            <strong>Leadership Development:</strong> Build capability within
            your team through coaching and structured learning
          </li>
          <li>
            <strong>Performance Analytics:</strong> Measure what matters and
            convert data into actionable insights
          </li>
          <li>
            <strong>Organizational Design:</strong> Align structure, roles, and
            accountability to strategy
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Our Process",
    content: (
      <div className="space-y-3">
        <p>
          We follow a disciplined, iterative approach designed for clarity and
          momentum:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              1. Discovery & Diagnosis
            </h4>
            <p className="text-gray-700">
              We listen deeply, ask hard questions, and identify the root
              causes of friction and opportunity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              2. Strategy & Design
            </h4>
            <p className="text-gray-700">
              We co-create solutions with your leadership team, grounded in
              first principles and your unique context.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              3. Implementation & Coaching
            </h4>
            <p className="text-gray-700">
              We walk alongside you through execution, providing coaching,
              accountability, and course correction as needed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              4. Measurement & Iteration
            </h4>
            <p className="text-gray-700">
              We track progress against key metrics and refine approach based on
              results and learning.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AccordionContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        <Accordion items={accordionItems} defaultOpen={0} />
      </div>
    </section>
  );
}
