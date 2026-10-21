import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactConfig, profile } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const inputCls =
  'w-full rounded-xl border border-white/10 bg-ink-2 px-4 py-3 text-sm text-bone placeholder:text-smoke outline-none transition focus:border-crimson-2/60 focus:ring-2 focus:ring-crimson-2/20';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: contactConfig.subjects[0], message: '' });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setSent(true);
  };

  const details = [
    { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
    { k: 'Projects', v: profile.projectEmail, href: `mailto:${profile.projectEmail}` },
    { k: 'LinkedIn', v: 'codeforge', href: profile.links.linkedin },
    { k: 'GitHub', v: 'codeforge', href: profile.links.github },
  ];

  return (
    <>
      <SectionHeading
        kicker="Let's talk"
        title="Start a Project"
        aside={
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <span className="rounded-full border border-crimson-2/40 bg-crimson-2/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-crimson-2">
              {contactConfig.availability}
            </span>
          </div>
        }
      />

      <div className="gutter grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson-2/15 text-2xl text-crimson-2 ring-1 ring-crimson-2/40">✓</span>
              <h3 className="mt-5 font-sans text-xl font-semibold text-bone">Message ready</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">{contactConfig.success}</p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: '', email: '', subject: contactConfig.subjects[0], message: '' });
                }}
                className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-bone transition hover:border-bone"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-mist">Name</span>
                  <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-mist">Email</span>
                  <input className={inputCls} type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-mist">Subject</span>
                <select className={inputCls} value={form.subject} onChange={set('subject')}>
                  {contactConfig.subjects.map((s) => (
                    <option key={s} value={s} className="bg-ink-2">
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-mist">Project details</span>
                <textarea className={`${inputCls} min-h-32 resize-y`} value={form.message} onChange={set('message')} placeholder="Tell us about your idea, goals and timeline." />
              </label>

              {error && <p className="text-sm text-crimson-2">{error}</p>}

              <button
                type="submit"
                data-cursor="play"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ Send message
              </button>
            </form>
          )}
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10">
            <p className="text-sm leading-relaxed text-mist">Prefer to reach out directly? Here&apos;s where to find us.</p>
            <dl className="mt-5 space-y-4">
              {details.map((d) => (
                <div key={d.k} className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-smoke">{d.k}</dt>
                  <dd>
                    <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel={d.href.startsWith('http') ? 'noreferrer' : undefined} className="text-sm font-medium text-bone transition hover:text-crimson-2">
                      {d.v}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-smoke">{profile.location} · Remote-first</p>
        </div>
      </div>
    </>
  );
}
