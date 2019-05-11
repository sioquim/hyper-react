import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const CharacterList = () => (
  <List>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://media.istockphoto.com/photos/toned-portrait-of-darth-vader-mask-and-helmet-picture-id585592844?k=6&m=585592844&s=612x612&w=0&h=0EwLzzIO4jYxoDItMuhGnPQkwAwXFui0e4pOsDYF6-E="
        />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://media.istockphoto.com/photos/toned-portrait-of-darth-vader-mask-and-helmet-picture-id585592844?k=6&m=585592844&s=612x612&w=0&h=0EwLzzIO4jYxoDItMuhGnPQkwAwXFui0e4pOsDYF6-E="
        />
      </ListItemAvatar>
      <ListItemText
        primary="Summer BBQ"
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              to Scott, Alex, Jennifer
            </Typography>
            {" — Wish I could come, but I'm out of town this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://media.istockphoto.com/photos/toned-portrait-of-darth-vader-mask-and-helmet-picture-id585592844?k=6&m=585592844&s=612x612&w=0&h=0EwLzzIO4jYxoDItMuhGnPQkwAwXFui0e4pOsDYF6-E="
        />
      </ListItemAvatar>
      <ListItemText
        primary="Oui Oui"
        secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              Sandra Adams
            </Typography>
            {' — Do you have Paris recommendations? Have you ever…'}
          </React.Fragment>
        }
      />
    </ListItem>
  </List>
)

export default CharacterList
