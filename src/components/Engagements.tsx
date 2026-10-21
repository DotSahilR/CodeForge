import { engagements } from '../data/portfolio';
import { SectionHeading } from './fx';
import { NotchedProjectCard } from './ui/notched-project-card';

export default function Engagements() {
  return (
    <>
      <SectionHeading
        kicker={`${engagements.length} models`}
        title="How We Work Together"
        aside={
          <p className="max-w-md text-sm text-mist">
            Whether you're validating a new idea, building a complete product or improving existing software, we offer
            flexible ways to work together.
          </p>
        }
      />

      <div className="gutter mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {engagements.map((e) => (
          <NotchedProjectCard
            key={e.id}
            overlay
            monochrome
            href="#contact"
            image={e.image}
            imageAlt={e.title}
            badge={e.badge}
            title={e.title}
            description={e.summary}
            tags={e.deliverables}
          />
        ))}
      </div>
    </>
  );
}
