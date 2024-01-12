
import { PokemonDetail } from "../../interface";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface AvatarPokemonProps {
    pokemon: PokemonDetail;
}

const AvatarPokemon = ({ pokemon }: AvatarPokemonProps) => {
    
   
    return (
        <>
        <Typography 
            variant="h3" 
            align="center" 
            fontWeight="bold" 
            textTransform="uppercase"
            sx={{ mt: 2 }}
            >
            Detail Pokemon
        </Typography>

        <Card sx={{backgroundColor: pokemon.color, mt: 10}}>
            <CardMedia 
                component="img"
                image={pokemon.sprites.other["official-artwork"].front_default}
                title={pokemon.name}
                sx={{ height: 100, objectFit: "contain" }}/>
            <CardContent>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                }}>
                <Typography sx={{textTransform: "capitalize"}}>
                    #{pokemon.id}
                </Typography>
                <Typography sx={{textTransform: "capitalize"}}>
                    {pokemon.name}
                </Typography>
                </Box>
            </CardContent>
        </Card>
        </>
        
    );
};

export default AvatarPokemon;
