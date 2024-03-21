import IconButton from "@/Components/IconButton/IconButton";
import numeral from "numeral";
import { List } from "@phosphor-icons/react";
import { Container, Flex, Card, Grid, Label, Relative, Absolute } from "@/Components/Tags/Tags";
import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import { useMainContext } from "@/Context";
import { useState } from "react";

const DashboardIndex = () => {
  const [investAmount, setInvestAmount] = useState(100);
  const { setIsMenuOpen } = useMainContext(false);
  const amounts = [100, 200, 300, 400, 500];
  const conversionRate = 1000000;
  return (
    <MainLayout>
      <Container className="p-5 h-dvh bg-pep">
        <div className="md:max-w-md 2xl:scale-125 xl:scale-[1.15] origin-top flex flex-col mx-auto justify-between h-[75%]">
          <header className="mb-4">
            <Flex className="justify-between items-center">
              <h2 className="text-lg font-black text-pep">Dashboard</h2>
              <w3m-account-button />
              <IconButton onClick={() => setIsMenuOpen(true)}>
                <List size={24} weight="fill" />
              </IconButton>
            </Flex>
          </header>
          <Card>
            <h3 className="font-semibold mb-1 text-sm">Trade</h3>
            <Grid className="gap-2 p-4 rounded border bg-black/20 border-primary-500">
              <Grid>
                <Label className="text-sm mb-1">You Invest</Label>
                <Relative className="w-full">
                  <input
                    type="text"
                    value={numeral(investAmount).format("0,0")}
                    onChange={(e) => setInvestAmount(Number(e.target.value.replace(/,/g, "")))}
                    className="rounded w-full bg-primary-1000 border border-primary-500"
                  />
                  <Absolute className="right-3 top-0 bottom-0 flex items-center justify-center">SOL</Absolute>
                </Relative>
              </Grid>
              <Grid>
                <Label className="text-sm mb-1">You Receive</Label>
                <Relative className="w-full">
                  <input type="text" value={numeral(investAmount * conversionRate).format("0,0")} readOnly className="rounded w-full bg-primary-1000 border border-primary-500" />
                  <Absolute className="right-3 top-0 bottom-0 flex items-center justify-center">PPLON</Absolute>
                </Relative>
              </Grid>
              <Grid className="grid-cols-3 mt-2 gap-2">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestAmount((prev) => prev + amount)}
                    className="border w-full flex flex-col items-center justify-center border-primary-800 bg-primary-500 text-primary-950 font-semibold bar-pep rounded"
                  >
                    {`+${amount} Sol`}
                  </button>
                ))}
                <button
                  onClick={() => setInvestAmount(100)}
                  className="border w-full flex flex-col items-center justify-center border-secondary-800 bg-secondary-300 text-primary-950 font-semibold bar-pep rounded"
                >
                  Reset
                </button>
              </Grid>
              <div>
                <button className="p-4 bg-primary-500 bar-pep font-semibold mt-3 col-span-3 h-10 flex items-center justify-center w-full rounded text-primary-950">Buy</button>
              </div>
            </Grid>
          </Card>
          <Card className="mt-4">
            <h3 className="font-semibold mb-1 text-sm">Stats</h3>
            <Grid className="w-full text-center gap-4 grid-cols-2">
              <div className="border w-full flex flex-col items-center justify-center border-primary-500 bg-black/40 rounded p-4">
                <h3 className="text font-semibold">{numeral(10000).format("0,0")} Sol</h3>
                <Label className="text-xs">Invested</Label>
              </div>
              <div className="border w-full flex flex-col items-center justify-center border-primary-500 bg-black/40 rounded p-4">
                <h3 className="text font-semibold">{numeral(1000000000).format("0,0")} PPLON</h3>
                <Label className="text-xs">Received</Label>
              </div>
            </Grid>
          </Card>
          <ProgressBar className="w-full mt-4" />
        </div>
      </Container>
    </MainLayout>
  );
};

export default DashboardIndex;
