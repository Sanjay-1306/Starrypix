import Reveal, { RevealGroup, RevealItem } from "../ui/Reveal";
import Counter from "../ui/Counter";
import { stats } from "../../data/content";
import { GlowOrbs } from "../ui/GlowBackground";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <GlowOrbs />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            About Us
          </span>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Passionate About <span className="gradient-text">Creative</span>{" "}
            Work
          </h2>
          <p className="mt-6 max-w-lg text-white/60">
            We are a creative digital marketing agency focused on helping brands
            grow in the online world. From startups to established businesses,
            we combine creativity, strategy, and technology to build strong
            brand identities and meaningful customer connections. Our goal is
            simple - help your business attract, engage, and convert.
          </p>

          <RevealGroup className="mt-10 grid grid-cols-3 gap-6" stagger={0.12}>
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-white/50 sm:text-sm">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal delay={0.15} className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] bg-violet-500/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-violet-300/40 bg-violet-400/10 p-1.5 shadow-[0_0_45px_rgba(139,92,246,0.28)]">
              <video
                className="aspect-video w-full rounded-[1.25rem] bg-black/40 object-cover"
                src="/starrypixx.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="StarryPix studio video"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
