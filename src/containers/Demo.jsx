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
import {
  getCharacters,
  cancelGetCharacters,
  API_GET_CHARACTERS,
} from '../store/characters/actions'
import { getMovies, API_GET_MOVIES } from '../store/movies/actions'
import { getProgress } from '../store/progress/reducer'

const Container = styled.div`
  text-align: center;
  flex-grow: 1;
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const Demo = ({ actions, movies, isLoadingMovies, isLoadingCharacters }) => {
  const { apiGetMovies, apiGetCharacters, apiCancelGetCharacters } = actions
  const [selectedMovieId, setSelectedMovie] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      await apiGetMovies()
    }
    fetchMovies()
  }, [apiGetMovies])

  useEffect(
    () => {
      const fetchCharacters = async () => {
        if (movies[selectedMovieId]) {
          // Cancel any running async calls
          if (isLoadingCharacters) {
            apiCancelGetCharacters()
          }
          apiGetCharacters(movies[selectedMovieId].characters)
        }
      }
      fetchCharacters()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [movies, selectedMovieId]
  )

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
        <Grid item>
          {(isLoadingMovies || isLoadingCharacters) && (
            <Progress color="secondary" />
          )}
        </Grid>
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
  isLoadingMovies: PropTypes.bool.isRequired,
  isLoadingCharacters: PropTypes.bool.isRequired,
}

export default compose(
  connect(
    (state) => {
      return {
        movies: state.movies || {},
        isLoadingMovies: getProgress(state, API_GET_MOVIES),
        isLoadingCharacters: getProgress(state, API_GET_CHARACTERS),
      }
    },
    (dispatch) => {
      const actions = {
        apiGetCharacters: getCharacters,
        apiGetMovies: getMovies,
        apiCancelGetCharacters: cancelGetCharacters,
      }
      return {
        actions: bindActionCreators(actions, dispatch),
      }
    }
  ),
  React.memo
)(Demo)
