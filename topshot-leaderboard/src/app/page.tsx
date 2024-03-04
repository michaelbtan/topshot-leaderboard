import Head from 'next/head'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Footer from "@/components/footer";

const data = [
  { id: 1, name: "MrYoungB1988", strats: 106 },
  { id: 2, name: "Jeremy", strats: 65 },
  { id: 3, name: "Zazu2.0", strats: 60 },
  { id: 4, name: "AlexPDV", strats: 50 },
  { id: 5, name: "JayBKMB", strats: 50 },
  { id: 6, name: "Td808486", strats: 50 },
  { id: 7, name: "Tetris block", strats: 50 },
  { id: 8, name: "Cartpig", strats: 50 },
  { id: 9, name: "Whodat", strats: 50 },
  { id: 10, name: "Scyforce", strats: 50 },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BlockApps Strat Leaderboard</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-900 text-white">
        <h1 className="text-4xl font-bold animate-bounce">
          BlockApps Airdrop 1 🚀
        </h1>
        <h2 className="text-l mt-4">1pt = 1 strat</h2>
        <p className="p-8">
          In Airdrop 1, users earned STRATs based on signing up, buying items,
          and participating in a scavenger hunt. Additionally, certain actions
          boosted your points. @everyone who has signed up also has 50 STRATs
          even if you arent on the leaderboard! If you arent signed up for
          Mercata yet you are still eligible for Airdrop 1 and the future
          airdrops. Claim Your STRATs:{" "}
          <a
            className="underline "
            href="https://marketplace.mercata.blockapps.net/marketplace/"
          >
            https://marketplace.mercata.blockapps.net/marketplace/
          </a>{" "}
          STRAT Airdrop 1 has concluded. Stay tuned for the announcement of
          Airdrop 2. In the meantime, sign up to claim your STRATs!
        </p>
        <p>Airdrop 2 Details coming soon..</p>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Table>
            <TableCaption>Mercata Topshot Leaderboard</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead className="w-[800px]">Name</TableHead>
                <TableHead className="w-[100px]">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.strats}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Footer />
      </main>
    </>
  );
}
