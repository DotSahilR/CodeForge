import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

const HOLD_MS = 6000;

export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const t = window.setTimeout(onClose, HOLD_MS);
    return () => clearTimeout(t);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
      role="dialog"
      aria-modal="true"
      aria-label="Studio intro"
    >
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <h1 className="font-display leading-[0.85] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            <span className="shimmer-text">{profile.firstName}</span>
          </h1>
          <p className="mt-3 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
            {profile.seriesTag}
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
            {profile.tagline.join(' • ')}
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8">
        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="rounded-full bg-bone px-5 py-2.5 text-xs font-bold tracking-[0.18em] text-ink transition hover:bg-white"
        >
          BACK TO BROWSE
        </button>
      </div>
    </motion.div>
  );
}
