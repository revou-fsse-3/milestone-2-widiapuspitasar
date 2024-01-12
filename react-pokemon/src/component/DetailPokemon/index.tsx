import { Link, useParams } from 'react-router-dom';
import usePokemon from "../../hooks/usePokemon";
import { Container, Grid, Box, Button } from '@mui/material';
import { AvatarPokemon, BasicInfoPokemon, StatusPokemon } from '..';

const DetailPokemon = () => {
    let { pokemonName } = useParams();
    const { pokemon, isLoading } = usePokemon({ pokemonName });

    return (
        <Container>
            <Grid 
                container 
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                >
                    {isLoading ? (
                        <Box>Loading....</Box>
                    ) : pokemon ? (
                        <>
                            <Box>
                                <AvatarPokemon pokemon={pokemon} />
                                <BasicInfoPokemon pokemon={pokemon} />
                                <StatusPokemon pokemon={pokemon} />
                                <Box sx={{ textAlign: 'center' }}>
                                <Button
                                    component={Link}
                                    to={"/"}
                                    variant="contained"
                                    sx={{
                                        display: 'inline-block',
                                        margin: '1rem 0 2rem',
                                        backgroundColor: 'orange',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            color: 'black',
                                        },
                                    }}
                                >
                                    Go To Pokemon List
                                </Button>
                            </Box> 
                            </Box>
                        </>
                    ) : (
                        <Box>Pokemon not Found</Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default DetailPokemon;
