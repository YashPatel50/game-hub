import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useTheme } from "next-themes";
import GameGrid from "./components/GameGrid";

function App() {
  const { resolvedTheme } = useTheme();

  console.log({ resolvedTheme });

  return (
    <Grid
      _dark={{ bg: "Gray.800" }}
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, //Bigger than 1024 pixels
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" bg="gray.400" hideBelow="lg">
        {/*Hides this area if not in large screen*/}
        Aside
      </GridItem>
      <GridItem area="main" bg="purple.400">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
