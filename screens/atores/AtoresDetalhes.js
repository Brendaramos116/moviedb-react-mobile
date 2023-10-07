import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Image, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'

const AtoresDetalhes = ({ navigation, route }) => {
    const [atores, setAtores] = useState({})
    const [filme, setFilme] = useState([])

    useEffect(() => {
        const id = route.params.id
        
        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtores(resultado.data)
        })
        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setFilme(resultado.data.cast)
        })
    }, [])

    return (
        <>
            <ScrollView>
                <Card
                    style={{ marginBottom: 15 }}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + atores.profile_path }} />
                    <Card.Content>
                        <Text variant='titleLarge'>{atores.title}</Text>
                        <Text variant='bodyMedium'>{atores.overview}</Text>
                    </Card.Content>
                </Card>
                <Card style={{ marginBottom: 15 }}>
                    <Card.Content>
                        <Text variant='titleLarge'><strong>Detalhes</strong></Text>
                        <Text variant='bodyMedium'><strong>Lançamento:</strong> {atores.release_date}</Text>
                        <Text variant='bodyMedium'><strong>Duração:</strong> {atores.runtime} min</Text>
                        <Text variant='bodyMedium'><strong>Popularidade:</strong> {atores.popularity}</Text>
                        <Text variant='bodyMedium'><strong>Votos:</strong> {atores.vote_average}</Text>
                        <Text variant='bodyMedium'><strong>Orçamento:</strong> {atores.budget}</Text>
                    </Card.Content>
                </Card>
                <Text variant='titleLarge'>Fimes</Text>
                {filme.map(item => (
                    <Card
                        key={item.id}
                        onPress={() => navigation.push('filmes-detalhes', { id: item.id })}
                        style={{ marginBottom: 15 }}>
                        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
                        <Card.Content>
                            <Text variant='titleLarge'>{item.title}</Text>
                            <Text variant='bodyMedium'>{item.overview}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </>
    )
}

export default AtoresDetalhes