// tabs.js
import { Dukaan, AgroBot, CommunityChat, MarketIntelligence } from "../Screens";
import { HomeStack } from "./AppStacks/HomeStack";

export const tabs = [
  {
    id: 1,
    title: "Messages",
    screen: "Chat",
    icon: "message-text",
    Component: CommunityChat,
  },
  {
    id: 2,
    title: "Dukaan",
    screen: "Dukaan",
    icon: "storefront-outline",
    Component: Dukaan,
  },
  {
    id: 3,
    title: "Home",
    screen: "Home",
    icon: "home",
    Component: HomeStack,
  },
  {
    id: 4,
    title: "Price",
    screen: "Price",
    icon: "currency-inr",
    Component: MarketIntelligence,
  },
  {
    id: 5,
    title: "Agro Bot",
    screen: "Bot",
    icon: "robot-outline",
    Component: AgroBot,
  },
];
