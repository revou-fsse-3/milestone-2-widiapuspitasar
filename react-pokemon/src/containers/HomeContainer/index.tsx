
import {Card, CardMedia, Button, Container  } from '@mui/material';
import usePokemons from '../../hooks/usePokemons';
import { PokemonList } from '../../component';

const HomeContainer = () => {
    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
    

    return(
    <div>
      <Container>
      <h1 className="text-black font-bold text-4xl text-center m-2 ">Welcome to Pokemon Web </h1>
        <PokemonList pokemons={pokemons}></PokemonList>
        {hasMorePokemon ? (
          <Button variant='contained' onClick={fetchNextPage} > 
              NEXT
          </Button>
        ) : null}
      </Container>
        
        

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
    </Card>
    </div>

    )
}

export default HomeContainer