export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, children }) {
  return <button className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm">{children}</button>;
}

export function TabsContent({ value, children }) {
  return <div className="mb-4">{children}</div>;
}