import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, CalendarDays, Check, HandHeart, MapPin, Sun } from 'lucide-react';
import heroImage from '@assets/marcos-paulo-prado-v94pG3exjmc-unsplash.jpg';

function App() {
  const [confirmed, setConfirmed] = useState(false);

  const confirmPresence = () => {
    setConfirmed(true);
    window.setTimeout(() => document.getElementById('presence-feedback')?.focus(), 40);
  };

  return (
    <main className="festa-page min-h-[100dvh]">
      <nav className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12" aria-label="Navegação principal">
        <a href="#top" className="display-font text-[1.35rem] font-extrabold tracking-[-.08em] text-[#1736b8]" data-testid="link-logo">
          festa<span className="text-[#f36c38]">_</span>free
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.16em] text-[#1736b8] sm:flex">
          <a href="#sobre" className="transition-opacity hover:opacity-60" data-testid="link-about">o encontro</a>
          <a href="#programacao" className="transition-opacity hover:opacity-60" data-testid="link-schedule">a tarde</a>
          <a href="#presenca" className="transition-opacity hover:opacity-60" data-testid="link-confirm">presença</a>
        </div>
        <span className="mono-font rounded-full border border-[#1736b8] px-3 py-2 text-[10px] font-medium uppercase tracking-[.12em] text-[#1736b8]">RJ · aberto</span>
      </nav>

      <section id="top" className="hero-grid relative mx-4 mt-2 overflow-hidden rounded-[1.75rem] border-2 border-[#1736b8] px-5 pb-10 pt-12 sm:mx-8 sm:px-10 sm:pb-16 sm:pt-16 lg:mx-auto lg:min-h-[670px] lg:max-w-[1340px] lg:px-16 lg:pt-20">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[1px] border-[#1736b8]/40 sm:h-96 sm:w-96" />
        <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border-[1px] border-[#1736b8]/30 sm:h-72 sm:w-72" />
        <div className="relative z-10 max-w-[670px]">
          <div className="reveal mb-8 flex items-center gap-3 text-[#1736b8]">
            <span className="h-3 w-3 animate-pulse rounded-full bg-[#f36c38]" />
            <span className="mono-font text-[10px] font-medium uppercase tracking-[.2em]">um encontro colaborativo ao ar livre</span>
          </div>
          <h1 className="display-font reveal reveal-delay-1 text-[clamp(4.4rem,14vw,10.8rem)] font-extrabold leading-[.78] tracking-[-.1em] text-[#1736b8]">
            festa<br /><span className="ml-[.16em] text-[#f36c38]">free</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-9 max-w-[410px] text-base font-semibold leading-[1.45] text-[#1736b8] sm:text-lg">
            O carnaval pode estar longe.... mas a gente, não! Traga seu corpo, sua música e o que puder somar!
          </p>
          <a href="#presenca" className="button-confirm reveal reveal-delay-3 mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#1736b8] bg-[#f36c38] px-6 py-4 text-sm font-extrabold text-[#fff3bb] shadow-[3px_4px_0_#1736b8]" data-testid="link-hero-confirm">
            confirme presença aqui <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="relative mt-14 lg:absolute lg:bottom-10 lg:right-14 lg:mt-0 lg:w-[46%]">
          <div className="tape -top-4 left-10 z-20" />
          <div className="hero-image-wrap relative z-10 aspect-[4/3] overflow-hidden rounded-[1.25rem] border-2 border-[#1736b8] bg-[#bfe6f3]">
            <img src={heroImage} alt="Pessoas dançando juntas em uma praça ensolarada" className="h-full w-full object-cover" data-testid="img-dancers" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#1736b8] px-4 py-3 text-[#f7d34a]">
              <span className="mono-font text-[10px] uppercase tracking-[.16em]">a cidade é nossa pista</span>
              <Sun size={17} aria-hidden="true" />
            </div>
          </div>
          <div className="floating-sticker absolute -bottom-8 -left-7 z-20 flex h-24 w-24 -rotate-6 items-center justify-center rounded-full border-2 border-[#1736b8] bg-[#bfe6f3] text-center text-[11px] font-extrabold uppercase leading-[1.05] text-[#1736b8] shadow-[4px_5px_0_#1736b8] sm:h-28 sm:w-28">
            vem<br />de leve
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b-2 border-[#1736b8] bg-[#1736b8] py-3 text-[#f7d34a]" aria-hidden="true">
        <div className="marquee mono-font text-[11px] font-medium uppercase tracking-[.2em]">
          <span className="mx-5">dança sem ingresso</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
          <span className="mx-5">pague quanto puder</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
          <span className="mx-5">chega junto</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
          <span className="mx-5">dança sem ingresso</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
          <span className="mx-5">pague quanto puder</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
          <span className="mx-5">chega junto</span><span className="mx-5 text-[#f36c38]" aria-hidden="true">/</span>
        </div>
      </div>

      <section id="sobre" className="mx-auto grid max-w-[1340px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24 lg:px-16 lg:py-32">
        <div>
          <p className="mono-font mb-5 text-[10px] font-medium uppercase tracking-[.2em] text-[#1736b8]">01 / por que free?</p>
          <h2 className="display-font max-w-[390px] text-4xl font-extrabold leading-[.98] tracking-[-.07em] text-[#1736b8] sm:text-5xl">A praça fica melhor quando a gente chega junto.</h2>
          <div className="mt-10 line-arrow text-[#1736b8]" />
          <p className="mt-5 max-w-[300px] text-sm font-semibold leading-relaxed text-[#29396c]">Festa Free é encontro, não produto. Uma pista aberta, feita por quem aparece e se dispõe a cuidar dela.</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          <article className="rounded-[1.2rem] border-2 border-[#1736b8] bg-[#bfe6f3] p-6 shadow-[5px_6px_0_#1736b8]">
            <HandHeart className="mb-12 text-[#f36c38]" size={30} strokeWidth={1.8} aria-hidden="true" />
            <h3 className="display-font text-2xl font-bold tracking-[-.06em] text-[#1736b8]">colaborativa</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#29396c]">Cada pessoa traz uma parte: um som, um passo, um lanche, uma ideia.</p>
          </article>
          <article className="mt-8 rounded-[1.2rem] border-2 border-[#1736b8] bg-[#f36c38] p-6 text-[#fff3bb] shadow-[5px_6px_0_#1736b8] sm:mt-16">
            <Sun className="mb-12 text-[#1736b8]" size={30} strokeWidth={1.8} aria-hidden="true" />
            <h3 className="display-font text-2xl font-bold tracking-[-.06em]">ao ar livre</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#fff3bb]">Sol no rosto, chão debaixo do pé e espaço para todo mundo caber.</p>
          </article>
        </div>
      </section>

      <section id="programacao" className="border-y-2 border-[#1736b8] bg-[#bfe6f3]">
        <div className="mx-auto max-w-[1340px] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mono-font mb-5 text-[10px] font-medium uppercase tracking-[.2em] text-[#1736b8]">02 / a tarde</p>
              <h2 className="display-font text-5xl font-extrabold leading-[.86] tracking-[-.08em] text-[#1736b8] sm:text-7xl">chega,<br />fica, dança.</h2>
            </div>
            <p className="max-w-[270px] text-sm font-semibold leading-relaxed text-[#29396c]">Sem programação fechada. A tarde acontece no ritmo de quem estiver ali.</p>
          </div>
          <div className="mt-16 grid border-t-2 border-[#1736b8]">
            <div className="grid gap-3 border-b border-[#1736b8]/50 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <span className="mono-font text-[11px] text-[#f36c38]">14:00</span><strong className="display-font text-2xl tracking-[-.05em] text-[#1736b8]">a praça abre</strong><span className="text-xs font-bold text-[#29396c]">chegada livre</span>
            </div>
            <div className="grid gap-3 border-b border-[#1736b8]/50 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <span className="mono-font text-[11px] text-[#f36c38]">15:30</span><strong className="display-font text-2xl tracking-[-.05em] text-[#1736b8]">o som encontra o corpo</strong><span className="text-xs font-bold text-[#29396c]">pista aberta</span>
            </div>
            <div className="grid gap-3 border-b border-[#1736b8] py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <span className="mono-font text-[11px] text-[#f36c38]">quando der</span><strong className="display-font text-2xl tracking-[-.05em] text-[#1736b8]">a gente se encontra</strong><span className="text-xs font-bold text-[#29396c]">sem hora para acabar</span>
            </div>
          </div>
        </div>
      </section>

      <section id="presenca" className="relative mx-4 my-20 overflow-hidden rounded-[1.75rem] border-2 border-[#1736b8] bg-[#1736b8] px-5 py-16 text-[#f7d34a] sm:mx-8 sm:px-12 lg:mx-auto lg:max-w-[1340px] lg:px-16 lg:py-24">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#bfe6f3]/50 sm:h-96 sm:w-96" />
        <div className="relative z-10 max-w-[760px]">
          <p className="mono-font mb-6 text-[10px] uppercase tracking-[.2em] text-[#bfe6f3]">03 / coloca seu nome na roda</p>
          <h2 className="display-font text-5xl font-extrabold leading-[.85] tracking-[-.08em] sm:text-8xl">vem do jeito<br /><span className="text-[#f36c38]">que der.</span></h2>
          <p className="mt-8 max-w-[440px] text-base font-semibold leading-relaxed text-[#bfe6f3]">A contribuição é livre. Pode ser presença, cuidado, som ou o valor que você puder.</p>
          <button type="button" onClick={confirmPresence} className="button-confirm mt-9 inline-flex items-center gap-3 rounded-full border-2 border-[#f7d34a] bg-[#f36c38] px-7 py-4 text-sm font-extrabold text-[#fff3bb] shadow-[3px_4px_0_#f7d34a]" data-testid="button-confirm-presence">
            {confirmed ? <>presença confirmada <Check size={19} strokeWidth={3} aria-hidden="true" /></> : <>confirme presença aqui <ArrowUpRight size={19} strokeWidth={2.5} aria-hidden="true" /></>}
          </button>
          <p id="presence-feedback" tabIndex={-1} className={`mt-4 text-sm font-bold text-[#bfe6f3] transition-opacity ${confirmed ? 'opacity-100' : 'opacity-0'}`} aria-live="polite" data-testid="status-presence">
            Você está na lista. A praça te espera.
          </p>
        </div>
        <div className="absolute bottom-8 right-8 hidden rotate-6 text-right sm:block">
          <CalendarDays className="ml-auto mb-3 text-[#f36c38]" size={32} strokeWidth={1.7} aria-hidden="true" />
          <p className="display-font text-4xl font-extrabold leading-none tracking-[-.07em]">05<br />set.</p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 pb-8 pt-2 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="display-font text-4xl font-extrabold tracking-[-.08em] text-[#1736b8]">festa<span className="text-[#f36c38]">_</span>free</p>
          <p className="mono-font mt-2 text-[10px] uppercase tracking-[.16em] text-[#29396c]">@festa_free</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold text-[#1736b8] sm:flex-row sm:items-center sm:gap-8">
          <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" /> 5 de setembro · a partir das 14h</span>
          <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Praça Onze</span>
        </div>
        <a href="#top" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#1736b8]" data-testid="link-back-top">
          voltar ao topo <ArrowDownRight className="transition-transform group-hover:-translate-y-1 group-hover:rotate-45" size={17} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}

export default App;
