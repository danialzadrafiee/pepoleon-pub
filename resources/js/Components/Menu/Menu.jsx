import { useMainContext } from "@/Context";
import "./Menu.scss";
import { Body, Container, Flex, Grid } from "../Tags/Tags";
import { TelegramLogo, TwitterLogo, X } from "@phosphor-icons/react";
import IconButton from "../IconButton/IconButton";
import { Link } from "@inertiajs/react";
const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMainContext();
  return (
    <>
      <div onClick={() => setIsMenuOpen(false)} hidden={!isMenuOpen} className="h-dvh w-screen fixed inset-0 z-10 bg-black/40 cursor-pointer ">
        <Container onClick={(e) => e.stopPropagation()} className="p-5 cursor-default  w-[25vw] bg-pep-nopat h-full absolute right-0 border-l border-primary-800/40">
          <header>
            <Flex className="justify-end">
              <IconButton buttonClass="bg-black/30">
                <X onClick={() => setIsMenuOpen(false)} size={24} weight="bold" />
              </IconButton>
            </Flex>
          </header>
          <Body>
            <Grid className="gap-4 text-xl mt-20 place-items-center">
              <img src="./img/logo-xl.png" alt="" />
              <Link href={route("dashboard.index")}>Dashboard</Link>
              <Link>Roadmap</Link>
              <Link>Tokenomic</Link>
              <Link>Terms</Link>
              <Link>Support</Link>
              <div className="w-[80%] h-[1px] bg-primary-800/40"></div>
              <Flex className="gap-2">
                <IconButton>
                  <TelegramLogo size={24} weight="fill" />
                </IconButton>
                <IconButton>
                  <TwitterLogo size={24} weight="fill" />
                </IconButton>
              </Flex>
            </Grid>
          </Body>
        </Container>
      </div>
    </>
  );
};
export default Menu;
