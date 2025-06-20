import React from 'react';
import { Star, Feather, Brush } from 'lucide-react';

const capsuleClass = 'px-10 py-3 rounded-full font-bold text-lg whitespace-nowrap';
const iconClass = 'w-12 h-12 rounded-full border-2 border-[--border] shadow-md flex items-center justify-center';

const CreativeTriad: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;

  return (
    <div
      className={`relative ${isMobile ? 'w-full py-10 px-5 flex flex-col items-center gap-5' : 'w-[420px] h-[320px] mx-auto'}`}
    >
      {/* Icon Left */}
      <div
        className={iconClass}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          top: isMobile ? undefined : '0',
          left: isMobile ? undefined : '35px',
          backgroundColor: 'var(--card)',
        }}
      >
        <Star size={20} className="text-[--color-accent-foreground]" />
      </div>

      {/* Capsule Left */}
      <div
        className={capsuleClass}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          transform: isMobile ? 'none' : 'rotate(-35deg)',
          top: isMobile ? undefined : '50px',
          left: isMobile ? undefined : '0',
          marginLeft: isMobile ? 0 : '20px',
  backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-secondary-foreground)',
        }}
      >
        Inspiration
      </div>

      {/* Center Icon */}
      <div
        className={iconClass}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          top: isMobile ? undefined : '90px',
          left: isMobile ? undefined : '50%',
          transform: isMobile ? undefined : 'translateX(-50%)',
          backgroundColor: 'var(--card)',
        }}
      >
        <Brush size={20} className="text-[--color-primary-foreground]" />
      </div>

      {/* Capsule Right */}
      <div
        className={capsuleClass}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          transform: isMobile ? 'none' : 'rotate(35deg)',
          top: isMobile ? undefined : '50px',
          right: isMobile ? undefined : '0',
          marginRight: isMobile ? 0 : '20px',
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-secondary-foreground)',
        }}
      >
        Signature
      </div>

      {/* Icon Right */}
      <div
        className={iconClass}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          top: isMobile ? undefined : '0',
          right: isMobile ? undefined : '35px',
          backgroundColor: 'var(--card)',
        }}
      >
        <Feather size={20} className="text-[--color-secondary-foreground]" />
      </div>

      {/* Bottom Capsule */}
      <div
        className={`${capsuleClass} px-10 py-4`}
        style={{
          position: isMobile ? 'relative' : 'absolute',
          top: isMobile ? undefined : '170px',
          left: isMobile ? undefined : '50%',
          transform: isMobile ? undefined : 'translateX(-50%)',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-primary-foreground)',
        }}
      >
        Brand Identity
      </div>
    </div>
  );
};

export default CreativeTriad;
