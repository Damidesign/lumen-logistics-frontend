import React from 'react';

type Feature = {
  icon: React.ReactNode;
  header: string;
  description: string;
  tag?: string;
};

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L4 6.5v8c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12v-8L14 2Z" stroke="#00d4c8" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M9 14l3.5 3.5L19 11" stroke="#00d4c8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17l6-6M8.5 13.5l-2 2a4 4 0 005.6 5.7l2-2M16.5 8.5l2-2a4 4 0 015.6 5.7l-2 2" stroke="#00d4c8" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L6 16h8l-2 9 12-13h-8l2-9Z" stroke="#00d4c8" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" stroke="#00d4c8" strokeWidth="1.6"/>
    <ellipse cx="14" cy="14" rx="5" ry="11" stroke="#00d4c8" strokeWidth="1.3"/>
    <path d="M3 14h22M5 8h18M5 20h18" stroke="#00d4c8" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="13" width="18" height="13" rx="2" stroke="#00d4c8" strokeWidth="1.6"/>
    <path d="M9 13V9a5 5 0 0110 0v4" stroke="#00d4c8" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="14" cy="19.5" r="1.5" fill="#00d4c8"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22l6-8 5 4 5-7 4-3" stroke="#00d4c8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="4" y="4" width="20" height="18" rx="2" stroke="#00d4c8" strokeWidth="1.3"/>
  </svg>
);

const features: Feature[] = [
  {
    icon: <ChainIcon />,
    header: 'On-Chain Milestone Verification',
    description: 'Every transit event — pickup, customs clearance, handoff, delivery — is recorded as an immutable transaction on Stellar. No disputes, no data manipulation.',
    tag: 'Blockchain',
  },
  {
    icon: <BoltIcon />,
    header: 'Automated Escrow Settlements',
    description: 'Soroban smart contracts hold payment in escrow and release funds atomically on delivery confirmation. Cut payment cycles from 30 days to under 3 seconds.',
    tag: 'Soroban',
  },
  {
    icon: <GlobeIcon />,
    header: 'Global Route Intelligence',
    description: 'Real-time IoT sensors feed GPS, temperature, humidity, and shock data into a live map. Anomalies trigger automated alerts and contract penalties instantly.',
    tag: 'IoT + AI',
  },
  {
    icon: <ShieldIcon />,
    header: 'Tokenized Cargo Assets',
    description: 'Physical shipments become digital tokens transferable on-chain. Split shipments, assign ownership, or fractionalize cargo financing — all natively.',
    tag: 'Tokenization',
  },
  {
    icon: <LockIcon />,
    header: 'Role-Based Access & Compliance',
    description: 'Enterprise-grade RBAC with JWT + 2FA, audit logs anchored to blockchain, and built-in GDPR data controls. SOC 2 Type II compliant.',
    tag: 'Security',
  },
  {
    icon: <ChartIcon />,
    header: 'Performance Analytics',
    description: 'Revenue dashboards, on-time delivery scoring, carrier performance benchmarks, and exception heatmaps give your ops team an edge over the competition.',
    tag: 'Analytics',
  },
];

function WhyOrbitHaul() {
  return (
    <section id="why-orbithaul" className="py-24">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,212,200,0.3)] bg-[rgba(0,180,160,0.07)] text-[#00d4c8] text-xs font-medium tracking-widest uppercase">
          Platform Advantages
        </div>
        <h2 className="font-display font-normal text-[1.5rem] md:text-[2.25rem] lg:text-[3.25rem]">
          Why <span className="text-[#62ffff]">OrbitHaul?</span>
        </h2>
        <p className="text-[rgba(200,230,240,0.6)] max-w-[560px] text-base leading-relaxed">
          We didn't bolt blockchain onto existing logistics software. We built a supply chain platform where decentralization is the core architecture.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.header}
            className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-[rgba(0,180,160,0.15)] text-left overflow-hidden transition-all duration-300 hover:border-[rgba(0,212,200,0.4)] hover:-translate-y-1"
            style={{
              background: 'rgba(4, 20, 22, 0.7)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,180,160,0.08) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="flex items-start justify-between">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-[rgba(0,212,200,0.25)]"
                style={{ background: 'rgba(0,140,130,0.12)' }}
              >
                {f.icon}
              </div>
              {f.tag && (
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[rgba(0,212,200,0.25)] text-[#00d4c8] bg-[rgba(0,212,200,0.06)]">
                  {f.tag}
                </span>
              )}
            </div>

            <div>
              <h3 className="font-display font-semibold text-[#f0ffff] mb-2 text-base">{f.header}</h3>
              <p className="text-[rgba(180,220,230,0.65)] text-sm leading-relaxed">{f.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyOrbitHaul;
