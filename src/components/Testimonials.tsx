import { testimonials } from '../data/portfolio';
import { SectionHeading } from './fx';

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <>
      <SectionHeading
        kicker={`${testimonials.length} reviews`}
        title="Client Words"
        aside={
          <p className="max-w-xs text-sm text-mist sm:text-right">
            A few notes from teams we&apos;ve worked with - hover to pause.
          </p>
        }
      />

      <div className="marquee marquee-mask gutter relative overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: `${testimonials.length * 6}s` }}>
          {loop.map((t, i) => (
            <figure
              key={`${t.id}-${i}`}
              aria-hidden={i >= testimonials.length}
              className="mr-4 flex w-[84vw] shrink-0 flex-col rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 transition duration-500 hover:bg-ink-3 hover:ring-white/20 sm:mr-5 sm:w-[400px]"
            >
              <span className="font-display text-5xl leading-none text-crimson-2">“</span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-bone">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-bone">{t.author}</p>
                <p className="text-xs text-mist">
                  {t.role} · <span className="text-smoke">{t.org}</span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
