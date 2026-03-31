import Carousel from "./Carousel";
import {
  Users,
  Target,
  TrendingUp,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const carouselItems = [
  {
    id: "experts",
    title: "Advisory Experts",
    description:
      "Meet our team of seasoned advisors with deep expertise across strategy, operations, and leadership development. Each brings 15+ years of experience scaling organizations.",
    icon: <Users className="text-sage-600" />,
  },
  {
    id: "potential",
    title: "Your Potential",
    description:
      "Discover what's possible for your organization. We help you identify untapped opportunities, clarify your competitive advantage, and build a roadmap to sustainable growth.",
    icon: <Target className="text-sage-600" />,
  },
  {
    id: "benchmarking",
    title: "Benchmarking Tool",
    description:
      "Compare your performance against industry standards. Our proprietary tool reveals where you stand on key metrics and highlights opportunities for improvement.",
    icon: <TrendingUp className="text-sage-600" />,
  },
  {
    id: "development",
    title: "Team Development",
    description:
      "Build capability within your organization. We design and deliver customized leadership programs, workshops, and coaching to strengthen your team.",
    icon: <Briefcase className="text-sage-600" />,
  },
  {
    id: "voices",
    title: "Client Voices",
    description:
      "Hear from organizations we've worked with. Their stories reveal the impact of strategic clarity, operational excellence, and aligned leadership.",
    icon: <MessageSquare className="text-sage-600" />,
  },
];

export default function CarouselContent() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Explore Our Capabilities
        </h2>
        <Carousel items={carouselItems} autoScroll={true} scrollInterval={6000} />
      </div>
    </section>
  );
}
