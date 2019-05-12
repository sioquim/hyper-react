import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ListSubheader from '@material-ui/core/ListSubheader'
import { getCharactersByIds } from '../store/characters/reducer'

const CharacterAvatar = styled(Avatar)`
  && {
    background-color: ${({ theme }) => `${theme.palette.primary.main}`};
  }
`

const CharacterMetrics = ({ metrics }) => {
  const addComma = (index, keys) =>
    index < keys.length - 1 && keys.length > 1 && ', '

  return Object.keys(metrics)
    .filter((metricKey) => !metrics[metricKey].includes('unknown'))
    .map((metricKey, index, filteredMetricKeys) => (
      <span key={index}>
        {metricKey}: <i>{metrics[metricKey]}</i>
        {addComma(index, filteredMetricKeys)}
      </span>
    ))
}

const CharacterList = ({ characters }) => (
  <List
    subheader={
      characters.length ? (
        <ListSubheader component="div">Characters</ListSubheader>
      ) : null
    }
  >
    {characters.map(({ character_id: id, name, height, mass }) => (
      <ListItem key={id} alignItems="flex-start">
        <ListItemAvatar>
          <CharacterAvatar>
            {name.substring(0, 2).toUpperCase()}
          </CharacterAvatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <CharacterMetrics
              metrics={{ height: `${height}cm`, mass: `${mass}kg` }}
            />
          }
        />
      </ListItem>
    ))}
  </List>
)

CharacterList.propTypes = {
  // eslint-disable-next-line
  characterIds: PropTypes.array,
  characters: PropTypes.array,
}

CharacterList.defaultProps = {
  characterIds: [],
  characters: [],
}

export default compose(
  connect(
    (state, ownerProps) => ({
      characters: getCharactersByIds(state)(ownerProps.characterIds),
    }),
    null
  ),
  React.memo
)(CharacterList)
