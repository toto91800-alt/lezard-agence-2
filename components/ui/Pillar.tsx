import React from 'react';

interface PillarProps {
  label: string;
  color: string;
  icon: React.ReactNode;
  rotate: number;
  position: 'left' | 'right';
}

const Pillar: React.FC<PillarProps> = ({ label, color, icon, rotate, position }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: position === 'left' ? 'flex-start' : 'flex-end',
      transform: `rotate(${rotate}deg)`,
      margin: '0 20px',
    }}>
      <div style={{
        backgroundColor: color,
        padding: '12px 24px',
        borderRadius: '30px',
        color: 'white',
        fontWeight: 'bold',
        writingMode: 'horizontal-tb',
      }}>
        {label}
      </div>
      <div style={{
        marginTop: '8px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 4px rgba(0,0,0,0.2)',
      }}>
        {icon}
      </div>
    </div>
  );
};

export default Pillar;
