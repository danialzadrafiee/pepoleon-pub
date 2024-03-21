import "@/bootstrap";
import "@/../css/app.css";
import "@/../css/pepoleon.scss";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainContextProvider } from "./Context";

// 0. Setup queryClient
const queryClient = new QueryClient();

const projectId = "6a1fbd37940215489abd38edd45e9f0a";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob("./Pages/**/*.jsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <div>
        <WagmiProvider config={config}>
          <MainContextProvider>
            <QueryClientProvider client={queryClient}>{<App {...props} />}</QueryClientProvider>
          </MainContextProvider>
        </WagmiProvider>
      </div>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
