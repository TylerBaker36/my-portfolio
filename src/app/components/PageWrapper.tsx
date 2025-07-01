'use client';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-900 text-white p-8 min-h-screen max-w-6xl mx-auto">
      {children}
    </section>
  );
}
