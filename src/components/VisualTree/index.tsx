import { Suspense } from 'react'
import LocationList from '../LocationsList'
import Loading from '../Loading'

const VisualTree = ({ company }: { company: any }) => {
  return (
    <>
      <h2>{company.name}</h2>
      <Suspense fallback={<Loading name="locations" />}>
        <LocationList company={company} />
      </Suspense>
    </>
  )
}

export default VisualTree
