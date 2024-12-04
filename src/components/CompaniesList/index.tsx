import { useState, useEffect } from 'react'

export default () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const resp = await fetchData()
      setData(resp)
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.map((item, index) => (
            <div key={'item-' + index}>{JSON.stringify(item)}</div>
          ))
        )}
      </ul>
    </div>
  )
}

async function fetchData() {
  try {
    const response = await fetch('https://fake-api.tractian.com/companies')
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
