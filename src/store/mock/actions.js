import { delay, map, mergeMap, takeUntil } from 'rxjs/operators'

import { of } from 'rxjs'
import { ofType } from 'redux-observable'

export const API_MOCK_REQUEST = 'API_MOCK_REQUEST'
export const API_MOCK_SUCCESS = 'API_MOCK_SUCCESS'
export const API_MOCK_ERROR = 'API_MOCK_ERROR'
export const API_MOCK_CANCEL = 'API_MOCK_CANCEL'

export const mockCall = (seconds) => ({
  type: API_MOCK_REQUEST,
  delay: seconds * 1000,
})

const completeMockCall = (response) => ({
  type: API_MOCK_SUCCESS,
  delay: response.delay,
})

export function cancelMockCall() {
  return async function dispatcher(dispatch) {
    dispatch({
      type: API_MOCK_CANCEL,
    })
  }
}

const fakeAsyncCall = (action) => of(action).pipe(delay(action.delay))

export const mockCallEpic = (action$) =>
  action$.pipe(
    ofType(API_MOCK_REQUEST),
    mergeMap((action) =>
      fakeAsyncCall(action).pipe(
        map((response) => completeMockCall(response)),
        takeUntil(action$.pipe(ofType(API_MOCK_CANCEL)))
      )
    )
  )
