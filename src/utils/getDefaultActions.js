const getDefaultActions = (baseAction) => {
  return [
    `${baseAction}_REQUEST`,
    `${baseAction}_SUCCESS`,
    `${baseAction}_ERROR`,
    `${baseAction}_CANCEL`,
  ]
}

export default getDefaultActions
