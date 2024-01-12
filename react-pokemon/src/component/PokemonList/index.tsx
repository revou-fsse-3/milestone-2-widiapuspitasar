import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { CardPokemon } from '..';
import { ListPokemon } from '../../interface';

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }: PokemonListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={2}>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((p) => (
            <Grid item xs={4} key={p.name}>
              <CardPokemon pokemon={p} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No matching Pokemon found.</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PokemonList;
