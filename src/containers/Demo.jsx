import React, { useEffect, useCallback, useMemo, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import CharacterList from './CharacterList'
import Selector from '../components/Selector'
import { getCharacters } from '../store/characters/actions'
import { getMovies } from '../store/movies/actions'
import { getProgress } from '../store/progress/reducer'

export const Container = styled.div`
  text-align: center;
  flex-grow: 1;
`
export const ListWrapper = styled.div`
  margin: 0 auto;
`
const Title = styled(Typography)`
  && {
    margin-bottom: ${({ theme }) => `${theme.spacing.lg}px`};
  }
`
const Progress = styled(CircularProgress)`
  && {
    margin-left: ${({ theme }) => `${theme.spacing.sm}px`};
  }
`

const Demo = ({ actions, movies, isLoading }) => {
  const { apiGetMovies, apiGetCharacters } = actions
  const [selectedMovieId, setSelectedMovie] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      await apiGetMovies()
    }
    fetchMovies()
  }, [apiGetMovies])

  useEffect(() => {
    const fetchCharacters = async () => {
      if (movies[selectedMovieId]) {
        apiGetCharacters(movies[selectedMovieId].characters)
      }
    }
    fetchCharacters()
  }, [apiGetCharacters, movies, selectedMovieId])

  const changeMovie = useCallback((event) => {
    setSelectedMovie(event.target.value)
  }, [])

  const movieList = useMemo(
    () =>
      Object.keys(movies).length
        ? Object.values(movies).map(({ episode_id: value, title: name }) => ({
            value,
            name,
          }))
        : [],
    [movies]
  )

  const characterIds = useMemo(
    () => (movies[selectedMovieId] && movies[selectedMovieId].characters) || [],
    [movies, selectedMovieId]
  )
  return (
    <Container>
      <Title variant="h1" align="center">
        Hyper React
      </Title>
      <Grid container wrap="nowrap" spacing={0}>
        <Grid item xs={12}>
          <Selector
            onChange={changeMovie}
            value={selectedMovieId}
            list={movieList}
            label="Starwars Movie"
            labelWidth={114}
          />
        </Grid>
        <Grid item>{isLoading && <Progress color="secondary" />}</Grid>
      </Grid>
      <ListWrapper>
        <CharacterList characterIds={characterIds} />
      </ListWrapper>
    </Container>
  )
}

Demo.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default compose(
  connect(
    (state) => {
      return {
        movies: state.movies || {},
        isLoading:
          getProgress(state, 'API_GET_MOVIES') ||
          getProgress(state, 'API_GET_CHARACTERS'),
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
