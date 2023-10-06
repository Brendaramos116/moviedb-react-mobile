import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView } from 'react-native-paper'
import { Image } from 'react-native'

const SeriesDetalhes = ({navigation, route}) => {
    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/tv/${id}`).then(resultado => {
            setSerie(resultado.data)
        })

        apiFilmes.get(`/tv/${id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])

    return (
        <>
            <ScrollView>
                <Card
                    style={{ marginBottom: 15 }}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + serie.backdrop_path }} />
                    <Card.Content>
                        <Text variant='titleLarge'>{serie.name}</Text>
                        <Text variant='bodyMedium'>{serie.overview}</Text>
                    </Card.Content>
                </Card>
                <Card style={{ marginBottom: 15 }}>
                    <Card.Content>
                        <Text variant='titleLarge'><strong>Detalhes</strong></Text>
                        <Text variant='bodyMedium'><strong>Lançamento:</strong> {serie.first_air_date}</Text>
                        <Text variant='bodyMedium'><strong>Duração:</strong> {serie.runtime} min</Text>
                        <Text variant='bodyMedium'><strong>Popularidade:</strong> {serie.popularity}</Text>
                        <Text variant='bodyMedium'><strong>Votos:</strong> {serie.vote_average}</Text>
                        <Text variant='bodyMedium'><strong>Orçamento:</strong> {serie.budget}</Text>
                    </Card.Content>
                </Card>
                <Text variant='titleLarge'>Atores</Text>
                {atores.map(item => (
                    <Card
                        mode='outlined' key={item.id}
                        onPress={() => navigation.push('series-atores', { id: item.id })}
                        style={{ marginBottom: 15 }}>

                        <Card.Title
                            title={item.character}
                            subtitle={item.name}
                            left={(props) => <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }}
                                style={{ width: 40, height: 40, borderRadius: 80 }} />}
                        />
                    </Card>
                ))}
            </ScrollView>
        </>
    )
}

export default SeriesDetalhes