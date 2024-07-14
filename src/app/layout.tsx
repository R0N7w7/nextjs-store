import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";
import { Roboto } from "next/font/google";
import './global.css';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin-ext']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + " bg-[#02020c]"} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
