import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Customer Support",
  description: "Welcome to Headstarter AI customer support service",
};

// export function IndexPage() {
//   return (
//     <div>
//       <Head>
//         <title>My page title</title>
//       </Head>
//       <p>Hello world!</p>
//     </div>
//   )
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
