import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import FilmeAtores from './FilmeAtores';

const Stack = createNativeStackNavigator();

const FilmesStack = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="filmes-populares" component={FilmesPopulares} options={{ title: 'Filmes Populares' }} />
                <Stack.Screen name="filmes-detalhes" component={FilmesDetalhes} options={{ title: 'Detalhes' }} />
                <Stack.Screen name="filmes-atores" component={FilmeAtores} options={{ title: 'Atores' }} />
            </Stack.Navigator>
        </>
    )
}

export default FilmesStack