import useSWR from 'swr'

let API_HOST = 'https://fake-api.tractian.com'

export default function useTractianApiData(path: string) {
  if (!path) throw 'Path cannot be falsy.'
  const resp = useSWR(getApiFullEndpoint(path), fetcher)
  return resp
}

function getApiFullEndpoint(path: string) {
  return API_HOST + path
}

export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(1000)
      return res
    })

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
