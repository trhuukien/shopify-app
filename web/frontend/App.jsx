import Routes from "./Routes";

import {
  NavigationMenu,
} from "./components/index";

export default function App() {
  console.log(11111111)
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <>
      <NavigationMenu />
      <Routes pages={pages} />
    </>
  );
}
