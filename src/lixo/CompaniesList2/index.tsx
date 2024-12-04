import './style.css'

import getApiFullEndpoint, { fetcher } from '../../api'
import useSWR from 'swr'

export default (props: { onSelectCompany: Function }) => {
  const url = getApiFullEndpoint(`/companies`)
  const { data } = useSWR(url, fetcher, { suspense: true })
  const companies = data

  return (
    <div>
      <h3>Choose a company:</h3>

      {companies.map((company: any, index: Key | null | undefined) => (
        <a
          className="company"
          key={index}
          onClick={props.onSelectCompany(company)}
        >
          <img className="icon" src="/icon-company-blue.png" />
          {company.name}
        </a>
      ))}
    </div>
  )
}
