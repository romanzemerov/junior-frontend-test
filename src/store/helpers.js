export const fetchData = (url, dispatch, { onRequest, onSuccess, onError }) => {
  dispatch(onRequest())
  fetch(url)
    .then(res => {
      if (!res.ok || res.status !== 200) {
        throw new Error(`Request failed with status code ${res.status}`)
      }

      return res.json()
    })
    .then(data => dispatch(onSuccess(data)))
    .catch(error => {
      console.error(error)
      dispatch(onError())
    })
}
