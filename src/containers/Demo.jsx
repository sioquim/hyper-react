import React, { useEffect, useMemo, useCallback, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CharacterList from '../components/CharacterList'
import Selector from '../components/Selector'
import { getCharacters } from '../store/characters/actions'
import { getMovies } from '../store/movies/actions'

export const Container = styled.div`
  text-align: center;
`
const Title = styled(Typography)`
  && {
    margin-bottom: ${({ theme }) => `${theme.spacing.lg}px`};
  }
`

const Demo = ({ actions, movies }) => {
  const { apiGetMovies } = actions
  const [selectedMovieId, setSelectedMovie] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      await apiGetMovies()
    }
    fetchMovies()
  }, [apiGetMovies])

  useEffect(() => {
    const fetchCharacters = async () => {
      console.log('fetchCharacters', selectedMovieId)
    }
    fetchCharacters()
  }, [selectedMovieId])

  const movieList = useMemo(
    () => movies.map(({ episode_id: value, title: name }) => ({ value, name })),
    [movies]
  )

  const changeMovie = useCallback((event) => {
    setSelectedMovie(event.target.value)
  }, [])

  return (
    <Container>
      <Title variant="h1" align="center">
        Welcome to Super React
      </Title>
      <Selector
        onChange={changeMovie}
        value={selectedMovieId}
        list={movieList}
        label="Starwars Movie"
        labelWidth={114}
      />
      <CharacterList />
    </Container>
  )
}

Demo.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
}

export default compose(
  connect(
    (state) => {
      return {
        movies: Object.values(state.movies),
      }
    },
    (dispatch) => {
      const actions = {
        apiGetCharacters: getCharacters,
        apiGetMovies: getMovies,
      }
      return {
        actions: bindActionCreators(actions, dispatch),
      }
    }
  ),
  React.memo
)(Demo)
