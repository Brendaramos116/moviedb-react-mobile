import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Image } from 'react-native-web'


const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}`).then(resultado => {
            setFilme(resultado.data)
        })

        apiFilmes.get(`/movie/${id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])

    return (
        <>
            <Card
                style={{ marginBottom: 15 }}>
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                <Card.Content>
                    <Text variant='titleLarge'>{filme.title}</Text>
                    <Text variant='bodyMedium'>{filme.overview}</Text>
                </Card.Content>
            </Card>
            <Card style={{ marginBottom: 15 }}>
                <Card.Content>
                    <Text variant='titleLarge'><strong>Detalhes</strong></Text>
                    <Text variant='bodyMedium'><strong>Lançamento:</strong> {filme.release_date}</Text>
                    <Text variant='bodyMedium'><strong>Duração:</strong> {filme.runtime} min</Text>
                    <Text variant='bodyMedium'><strong>Popularidade:</strong> {filme.popularity}</Text>
                    <Text variant='bodyMedium'><strong>Votos:</strong> {filme.vote_average}</Text>
                    <Text variant='bodyMedium'><strong>Orçamento:</strong> {filme.budget}</Text>
                </Card.Content>
            </Card>
            <Text variant='titleLarge'>Atores</Text>
            {atores.map(item => (
                <Card
                    mode='outlined' key={item.id}
                    onPress={() => navigation.push('filmes-atores', { id: item.id })}
                    style={{ marginBottom: 15 }}>

                    <Card.Title
                        title={item.character}
                        subtitle={item.name}
                        left={(props) => <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }}
                            style={{ width: 40, height: 40, borderRadius: 80 }}/>}
                        />
                </Card>
            ))}
        </>
    )
}

export default FilmesDetalhes