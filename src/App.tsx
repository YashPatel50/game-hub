import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, //Bigger than 1024 pixels
      }}
    >
      <GridItem area="nav" bg="blue.200">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" bg="gray.400" hideBelow="lg">
        {/*Hides this area if not in large screen*/}
        Aside
      </GridItem>
      <GridItem area="main" bg="purple.400">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
