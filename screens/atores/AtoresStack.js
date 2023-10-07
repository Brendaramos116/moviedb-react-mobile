import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AtoresPopulares from './AtoresPopulares';
import AtoresDetalhes from './AtoresDetalhes';

const Stack = createNativeStackNavigator();
const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="atores-populares" component={AtoresPopulares} options={{ title: 'Atores Populares' }} />
                <Stack.Screen name="atores-detalhes" component={AtoresDetalhes} options={{ title: 'Detalhes' }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack