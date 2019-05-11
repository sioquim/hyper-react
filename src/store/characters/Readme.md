# Mock Module

This modules uses [Redux Observable](https://redux-observable.js.org) and [RxJS](https://github.com/reactivex/rxjs) to show an example of a well managed and simplified Redux actions.

### Why should I learn and use this?!

Well, do you remember how you write your actions using thunk? Image that you're doing this for all of your actions, and maybe 30+ of them.

```javascript
export function getEntity() {
  return async function dispatcher(dispatch) {
    dispatch({ type: actions.API_GET_ENTITY_REQUEST })

    try {
      const response = await axios.get(
        `${SAUCE_API_URL}/${SAUCE_API_VERSION}/entity`,
        getAuthorizationHeader()
      )
      const responseData = idx(response, (_) => _.data.data)
      if (responseData) {
        const {
          entities: { myEntity },
        } = normalize(entitiesList, entitiesListSchema)
        dispatch({
          type: actions.API_GET_ENTITY_SUCCESS,
          data: myEntity,
        })
      } else {
        throw Error
      }
    } catch (error) {
      dispatch({
        type: actions.API_GET_ENTITY_ERROR,
        error,
      })
    }
  }
}
```

### Are you saying we need to use Redux Observable just because of this "long code" problem?

Not necessarily...

If the aim is to make those actions look cleaner, there are other libraries that can do that. Like a lot.
This is only one of the many problems that `redux-observable` is solves. Another solution is using `redux-saga` (somehow) but it doesn't have the functionalities that we take advantage from RxJS. Plus, `redux-saga` implements generators which is also another learning curve.

Here are some advantages of using redux-observable:

- A way to cancel your async calls
- A way to compose actions together as a single stream
- It's using RxJS and RxJS is a generic lib you can use everywhere
- A productive way to handle complex async calls (`redux-thunk` does really good job with simple stuff)

### How come this starter project uses both?

Well, we want to offer you a good start on a project so that you don't have to setup the `redux-thunk` or `redux-observable`. We can give you both so why not?

#### I want to use redux-observable and learn as I code

Good call. First think we need to do is remove the remnants of redux-thunk.

1. Remove the redux-thunk middleware

Just delete `thunkMiddleware` from the block below in `src/utils/configureStore.js` file and remove it from your `package.json` too

```javascript
export const middlewares = [
  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  reduxImmutableStateInvariant(),
  observableMiddleware,
  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  thunkMiddleware,
]
```

2. Refactor existing modules that uses thunk

User module in `src/modules/user` is currently using thunk by default so you can simply refactor it by referring to the `src/modules/mock` module.

3. Remove remnants of redux-thunk

Do a quick search in a files and folders or `Ctrl+Shift+F` if you're using VS Code. Look for `redux-thunk` and remove it's dependency in every file.

#### I still love the redux-thunk

1. Remove the redux-observable middleware

Just delete `observableMiddleware` and `observableMiddleware.run(rootEpic)` from the block below in `src/utils/configureStore.js` file and remove it from your `package.json` too

```javascript
export const middlewares = [
  // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  reduxImmutableStateInvariant(),
  observableMiddleware,
  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  thunkMiddleware,
]

...
observableMiddleware.run(rootEpic)

```

2. Remove this module: `(src/modules/mock)`
