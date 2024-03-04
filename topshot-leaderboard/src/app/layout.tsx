import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockApps Strat Leaderboard",
  description: "In Airdrop 1, users earned STRATs based on signing up, buying items, and participating in a scavenger hunt. Additionally, certain actions boosted your points. @everyone who has signed up also has 50 STRATs even if you aren't on the leaderboard! If you aren't signed up for Mercata yet you are still eligible for Airdrop 1 and the future airdrops.   Claim Your STRATs: https://marketplace.mercata.blockapps.net/marketplace/  STRAT Airdrop 1 has concluded. Stay tuned for the announcement of Airdrop 2. In the meantime, sign up to claim your STRATs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
