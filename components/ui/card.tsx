export function Card({ children }) {
  return <div className="rounded-xl shadow bg-white dark:bg-gray-800 border p-4">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}