// tabs.js
import { CommunityChat, MarketIntelligence, WeatherForecast, AgroBot } from "../Screens";
import { HomeStack } from "./AppStacks/HomeStack";
import {DukaanStack} from './AppStacks/DukaanStack';

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
    Component: DukaanStack,
  },
  {
    id: 3,
    title: "Home Tab",
    screen: "Home Tab",
    icon: "home",
    Component: HomeStack,
  },
  {
    id: 4,
    title: "Price",
    screen: "Market",
    icon: "currency-inr",
    Component: MarketIntelligence,
  },
  {
    id: 5,
    title: "Agro Bot",
    screen: "Agro Bot",
    icon: "robot-outline",
    Component: AgroBot,
  },
];
