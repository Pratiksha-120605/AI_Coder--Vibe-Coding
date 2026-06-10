export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <div key={idx} className="flex gap-4 items-start">
          <div className="w-10 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
              {idx + 1}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-300 font-semibold">
              {it.role}{" "}
              <span className="text-xs text-gray-400">@ {it.company}</span>
            </div>
            <div className="text-xs text-gray-400">{it.range}</div>
            <p className="mt-2 text-gray-300">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
