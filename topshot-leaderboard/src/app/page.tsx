import Head from "next/head";
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
  { id: 1, name: "dawgfan122@gmail.com", strats: 251 },
  { id: 2, name: "zazu", strats: 200 },
  { id: 3, name: "tennisplayer12@gmail.com", strats: 65 },
  { id: 4, name: "wrightkdarius3@gmail.com", strats: 64 },
  { id: 5, name: "AlexPDV", strats: 50 },
  { id: 6, name: "ashtonholley@gmail.com", strats: 50 },
  { id: 7, name: "byrd_up", strats: 50 },
  { id: 8, name: "cartpig", strats: 50 },
  { id: 9, name: "cbass47", strats: 50 },
  { id: 10, name: "daniel.maltzman@gmail.com", strats: 50 },
  { id: 11, name: "embeuu", strats: 50 },
  { id: 12, name: "gabass02@gmail.com", strats: 50 },
  { id: 13, name: "ghost", strats: 50 },
  { id: 14, name: "jamftils", strats: 50 },
  { id: 15, name: "jaykidd@gmail.com", strats: 50 },
  { id: 16, name: "jmetz.ny@gmail.com", strats: 50 },
  { id: 17, name: "josey03", strats: 50 },
  { id: 18, name: "kidbamboo73", strats: 50 },
  { id: 19, name: "ljdudmarie", strats: 50 },
  { id: 20, name: "oldhazeleyes@aol.com", strats: 50 },
  { id: 21, name: "runitupclay@gmail.com", strats: 50 },
  { id: 22, name: "scyforce", strats: 50 },
  { id: 23, name: "sutych", strats: 50 },
  { id: 24, name: "td808486", strats: 50 },
  { id: 25, name: "tetrislblock", strats: 50 },
  { id: 26, name: "who_dat", strats: 50 },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BlockApps Strat Leaderboard</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-blue-900 text-white">
        <h1 className="text-3xl md:text-4xl font-bold animate-bounce">
          BlockApps Airdrop 1 🚀
        </h1>
      <div className="z-10 max-w-5xl w-full overflow-x-auto px-4 md:px-0">
        <h2 className="text-base mt-4 text-center">1pt = 1 strat</h2>
        <p className="p-4 md:p-8">
          In Airdrop 1, users earned STRATs based on signing up, buying items,
          and participating in a scavenger hunt. Additionally, certain actions
          boosted your points. @everyone who has signed up also has 50 STRATs
          even if you aren't on the leaderboard! If you aren't signed up for
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
        <p className="mb-6 px-4 md:px-8">Airdrop 2 Details coming soon..</p>
        </div>
        <div className="z-10 max-w-5xl w-full overflow-x-auto px-4 md:px-0">
          <div className="inline-block min-w-full overflow-hidden align-middle">
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
        </div>
        <Footer />
      </main>
    </>
  );
}
