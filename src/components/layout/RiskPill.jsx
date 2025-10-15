export default function RiskPill({ level }) {
  const map = {
    Low: { color: 'bg-green-100 text-green-700', symbol: '●' },
    Medium: { color: 'bg-amber-100 text-amber-700', symbol: '▲' },
    High: { color: 'bg-red-100 text-red-700', symbol: '✱' },
  };

  const { color, symbol } = map[level] || map.Low;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full ${color}`}
    >
      <span className="mr-1">{symbol}</span>
      {level}
    </span>
  );
}
