import useTractianApiData from '../../api'
import './style.css'
import Loading from '../../components/Loading'
import Failed from '../../components/Failed'
import Empty from '../../components/Empty'

import Company from '../../types'

export default ({ company }: { company: Company }) => {
  const path = `/companies/${company.id}/locations`
  const { data: companies, error, isLoading } = useTractianApiData(path)

  if (isLoading) return <Loading name="companies" />
  if (error) return <Failed error={error} />
  if (companies && !companies?.length) return <Empty />

  return (
    <div>
      <h3 className="mt-0">Choose a company:</h3>

      {companies.map((company: Company, index: number) => (
        <a className="company" key={'company-' + index}>
          {company.name}
        </a>
      ))}
    </div>
  )
}
