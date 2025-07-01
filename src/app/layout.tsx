import './globals.css';
import Navbar from './components/Navbar'; // adjust path if needed

export const metadata = {
  title: 'Tyler Baker Portfolio',
  description: 'Game Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}


