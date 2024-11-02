import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useTheme } from "next-themes";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const { resolvedTheme } = useTheme();

  console.log({ resolvedTheme });

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, //Bigger than 1024 pixels
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" hideBelow="lg">
        {/*Hides this area if not in large screen*/}
        <GenreList></GenreList>
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
