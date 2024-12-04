let API_HOST = 'https://fake-api.tractian.com'

export default async function fetchData(path: string, delay: number | null) {
  try {
    const response = await fetch(API_HOST + path)
    const result = await response.json()
    if (delay) {
      await sleep(delay)
    }
    return result
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
