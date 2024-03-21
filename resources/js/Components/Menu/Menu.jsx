import { useMainContext } from "@/Context";
import "./Menu.scss";
import { Body, Container, Flex, Grid } from "../Tags/Tags";
import { X } from "@phosphor-icons/react";
import IconButton from "../IconButton/IconButton";
import { Link } from "@inertiajs/react";
const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMainContext();
  return (
    <>
      <div hidden={!isMenuOpen} className="h-dvh w-screen fixed inset-0 z-10 bg-[#07140f]">
        <Container className="p-5">
          <header>
            <Flex className="justify-end">
              <IconButton buttonClass="bg-black/30">
                <X onClick={() => setIsMenuOpen(false)} size={24} weight="bold" />
              </IconButton>
            </Flex>
          </header>
          <Body>
            <Grid className="gap-4 text-xl mt-20 place-items-center">
              <Link>Dashboard</Link>
              <Link>Roadmap</Link>
              <Link>Tokenomic</Link>
              <Link>Terms</Link>
              <Link>Support</Link>
              <div className="w-[80%] h-[1px] bg-primary-200"></div>
              <Link>Telegram Comminuty</Link>
              <Link>Twitter Comminuty</Link>
            </Grid>
          </Body>
        </Container>
      </div>
    </>
  );
};
export default Menu;
