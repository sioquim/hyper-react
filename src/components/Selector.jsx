import React from 'react'
import PropTypes from 'prop-types'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Selector = ({ onChange, list, label, labelWidth, value }) => (
  <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="outlined-age-simple">{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      input={
        <OutlinedInput
          labelWidth={labelWidth}
          name="age"
          id="outlined-age-simple"
        />
      }
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {list &&
        list.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
)

Selector.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.string,
  labelWidth: PropTypes.number,
}

Selector.defaultProps = {
  onChange: () => {},
  list: [],
  label: '',
  value: '',
  labelWidth: 48,
}

export default Selector
