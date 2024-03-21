import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import { Absolute, Container, Flex, Grid, Hero, Logo, Relative, Text } from "@/Components/Tags/Tags";
import { List, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import "react-tooltip/dist/react-tooltip.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import IconButton from "@/Components/IconButton/IconButton";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import { useMainContext } from "@/Context";

const { open } = useWeb3Modal();
const GatewayIndex = () => {
  const { setIsMenuOpen } = useMainContext(false);

  return (
    <>
      <MainLayout>
        <Container className="p-5 h-dvh bg-pep">
          <header>
            <Flex className="items-center justify-between">
              <Flex className="gap-2 items-center">
                <IconButton>
                  <TelegramLogo size={24} weight="fill" />
                </IconButton>
                <IconButton>
                  <TwitterLogo size={24} weight="fill" />
                </IconButton>
              </Flex>
              <IconButton onClick={()=>setIsMenuOpen(true)}>
                <List size={24} weight="fill" />
              </IconButton>
            </Flex>
          </header>
          <Hero>
            <Grid className="place-items-center px-4">
              <Logo>
                <img src="./img/logo-xl.png" alt="Pepoleon Logo"></img>
              </Logo>
              <h1 className="text-6xl font-impact text-pep">Pepoleon</h1>
              <h2 className="text-2xl font-impact text-pep mt-1">Presale</h2>
              <Text className="text-center text-xs mt-2">
                A fantastic growing collection of sleek, high-quality icons that are organized into different categories. You can use them on your project right away, and the best part is, a lot of
                them are completely free! Unlock them all for per
              </Text>
              <div className="w-full">
                <ProgressBar className="w-full mt-4"></ProgressBar>
              </div>
              <button onClick={() => open()} className="mt-16">
                <img src="./img/connectButton.svg" />
              </button>
            </Grid>
          </Hero>
          <footer className="absolute bottom-0">
            <Flex className="gap-6 opacity-80 hover:opacity-100 py-4 text-xs">
              <div>Terms</div>
              <div>Support</div>
            </Flex>
          </footer>
        </Container>
      </MainLayout>
    </>
  );
};
export default GatewayIndex;
