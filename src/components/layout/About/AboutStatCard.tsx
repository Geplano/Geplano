interface AboutStatCardProps {
  value: string;
  label: string;
}

export function AboutStatCard({ value, label }: AboutStatCardProps) {
  return (
    <div className="p-4">
      <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-geplano-gold">
        {value}
      </p>
      <p className="mt-2 text-gray-500">{label}</p>
    </div>
  );
}
