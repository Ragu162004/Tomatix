// tabs.js
import { CommunityChat, HealthCare, MarketIntelligence, WeatherForecast } from "../Screens";
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
    screen: "Weather",
    icon: "robot-outline",
    Component: HealthCare,
  },
];
