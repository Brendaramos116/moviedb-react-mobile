import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Image } from 'react-native'

const FilmeAtores = ({ navigation, route }) => {
  const [ator, setAtor] = useState({})
  const [filmes, setFilmes] = useState([])



  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/person/${id}`).then(resultado => {
      setAtor(resultado.data)
    })
    apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
      setFilmes(resultado.data.cast)
    })
  }, [])
  return (
    <>
      <Card mode='outlined' key={ator.id}>
        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} style={{ width: 280, height: 400 }} />
        <Card.Content>
          <Text variant='titleLarge'><strong>{ator.name}</strong></Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          
          <Text variant='bodyMedium'><strong>Sexo:</strong> {ator.gender}</Text>
          <Text variant='bodyMedium'><strong>Nascimento:</strong> {ator.birthday}</Text>
          <Text variant='bodyMedium'><strong>Cidade Natal:</strong> {ator.place_of_birth}</Text>
          <Text variant='bodyMedium'><strong>Popularidade:</strong> {ator.popularity}</Text>
          <Text variant='bodyMedium'><strong>Biografia:</strong> {ator.biography}</Text>
        </Card.Content>
      </Card>
      <Text>Filmes</Text>
      {filmes.map(item => (
        <Card
          mode='outlined' key={item.id}
          style={{ marginBottom: 15 }}>
          <Card.Title
            title={item.title}
            subtitle={item.release_date}
            left={(props) => <Image source={{uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path}}
          style={{ width: 40, height: 40, borderRadius: 80 }}
            />}
            />
        </Card>
      ))}


    </>
  )
}

export default FilmeAtores