import { useParams } from 'react-router'

export default function () {
  const params = useParams()

  return <div>companyId: {params.companyId}</div>
}
