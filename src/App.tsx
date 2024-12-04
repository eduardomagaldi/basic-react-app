// import { Dispatch, SetStateAction, Suspense, useState } from 'react'
// import './App.css'
// import VisualTree from './components/VisualTree'
// import CompaniesList from './components/CompaniesList'
// import Loading from './components/Loading'
import Generic from './components/CompaniesList'
// import Company from './types'

export default function App() {
  return <Generic />
}

// function App() {
//   const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

//   function onSelectCompany(company: Company) {
//     return () => {
//       setSelectedCompany(company)
//     }
//   }

//   return (
//     <div className="wrapper-app">
//       <img className="logo" width={300} src="/tractian.svg" />
//       <Suspense fallback={<Loading name="companies" />}>
//         {!selectedCompany ? (
//           <CompaniesList onSelectCompany={onSelectCompany} />
//         ) : (
//           <VisualTree company={selectedCompany} />
//         )}
//       </Suspense>
//     </div>
//   )
// }
