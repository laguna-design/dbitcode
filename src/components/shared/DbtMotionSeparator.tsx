export const DbtMotionSeparator = () => {
  const items = [
    '{Atención directa}',
    '{Desarrollo de productos}',
    '{Mantenimiento de sistemas linux}',
    '{Calidad técnica}',
    '{Transparencia}',
    '{Solvencia técnica}',
    '{Empatía operativa}',
  ];

  return (
    <div className="separator-wrapper">
      <ul className="separator">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        {items.map((item, i) => (
          <li key={`dup-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};