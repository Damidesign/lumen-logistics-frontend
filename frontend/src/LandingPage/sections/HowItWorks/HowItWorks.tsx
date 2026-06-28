
const steps = [
  {
    num: '01',
    title: 'Connect Your Wallet',
    description: 'Link a Stellar-compatible wallet (Freighter, Lobstr, or Solar). Your wallet becomes your identity — no passwords, no central accounts.',
    detail: 'Supports Freighter · Lobstr · Solar Wallet',
  },
  {
    num: '02',
    title: 'Tokenize the Shipment',
    description: 'Create a shipment on-chain. Cargo details, route, and payment terms are encoded into a Soroban smart contract deployed to Stellar Mainnet.',
    detail: 'Immutable · Auditable · Programmable',
  },
  {
    num: '03',
    title: 'Track Every Milestone',
    description: 'IoT sensors broadcast real-time GPS, temperature, and condition data. Each milestone is signed and written to the ledger as the cargo moves.',
    detail: 'GPS · Temperature · Humidity · Shock',
  },
  {
    num: '04',
    title: 'Auto-Settle on Delivery',
    description: 'When delivery is confirmed and proof is uploaded, the Soroban contract releases escrowed funds to the carrier atomically — in under 3 seconds.',
    detail: 'Escrow → Instant Settlement · No Intermediaries',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,212,200,0.3)] bg-[rgba(0,180,160,0.07)] text-[#00d4c8] text-xs font-medium tracking-widest uppercase">
          The Process
        </div>
        <h2 className="font-display font-normal text-[1.5rem] md:text-[2.25rem] lg:text-[3.25rem]">
          <span className="text-[#62ffff]">How LumenLogistics</span> Works
        </h2>
        <p className="text-[rgba(200,230,240,0.6)] max-w-[520px] text-base leading-relaxed">
          Four steps from wallet connect to settled payment — entirely on-chain.
        </p>
      </div>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,180,160,0.3) 15%, rgba(0,180,160,0.3) 85%, transparent)' }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={step.num}
                className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content card */}
                <div
                  className="lg:w-[calc(50%-3rem)] w-full p-6 rounded-2xl border border-[rgba(0,180,160,0.18)] text-left"
                  style={{ background: 'rgba(4,20,22,0.75)', backdropFilter: 'blur(10px)' }}
                >
                  <p className="text-[rgba(0,212,200,0.5)] text-xs font-bold tracking-[0.2em] uppercase mb-2">{step.detail}</p>
                  <h3 className="font-display font-semibold text-[#f0ffff] text-lg mb-2">{step.title}</h3>
                  <p className="text-[rgba(180,220,230,0.65)] text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Step badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-[#00d4c8] text-sm border-2 border-[rgba(0,212,200,0.5)]"
                    style={{
                      background: 'rgba(0,140,130,0.15)',
                      boxShadow: '0 0 20px rgba(0,180,160,0.3)',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.3rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Spacer on opposite side (desktop) */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
