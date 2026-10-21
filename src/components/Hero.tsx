import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, type ProfileId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ onPlay, profileId }: { onPlay: () => void; profileId: ProfileId }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[86svh] items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(circle, #1ed760 0%, #15a04a 25%, #0c6b30 50%, #114a29 75%, #121212 100%)',
      }}
    >
      <video
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div aria-hidden className="absolute inset-0 bg-black/60" />

      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        className="gutter relative z-[4] flex w-full flex-col items-center pb-24 pt-40 text-center sm:pb-28 sm:pt-48"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="font-display leading-[0.85] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
          <span className="shimmer-text">{profile.firstName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-3 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
          {profile.seriesTag}
        </motion.p>

        <motion.p variants={item} className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            data-cursor="play"
            onClick={onPlay}
            className="flex min-h-12 items-center gap-3 rounded-full bg-bone px-6 py-3 text-[15px] font-bold text-ink transition hover:bg-white sm:px-8"
          >
            <span className="text-lg">▶</span> Play Intro
          </button>
          {profileId !== 'founder' && (
            <button
              type="button"
              onClick={() => scrollTo('#originals')}
              className="glass flex min-h-12 items-center gap-3 rounded-full px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
            >
              <span className="text-xl leading-none">＋</span> Our Work
            </button>
          )}
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More info"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}
