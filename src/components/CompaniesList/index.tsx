import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'

import Company from '../../helpers/types'
import fetchData from '../../helpers/fetchData'

import Loading from '../Loading'
import Empty from '../Empty'

export default () => {
  const [data, setData] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    ;(async () => {
      const resp = await fetchData(
        '/companies',
        parseInt(searchParams.get('delay') || '0'),
      )
      setData(resp)
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading text="Loading companies" />
      ) : (
        <DisplayList data={data} />
      )}
    </div>
  )
}

function DisplayList({ data }: { data: Company[] }) {
  if (data && data.length) {
    return (
      <>
        <h4 className="m-0">Choose a company:</h4>
        {data.map((item: Company, index: number) => (
          <div key={'company-link-' + index}>
            <Link to={`/company/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </>
    )
  }

  return <Empty />
}
