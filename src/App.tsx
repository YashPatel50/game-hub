import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, //Bigger than 1024 pixels
      }}
    >
      <GridItem area="nav" bg="blue.200">
        Nav
      </GridItem>
      <GridItem area="aside" bg="gray.400" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area="main" bg="purple.400">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
