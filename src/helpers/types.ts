interface Company {
  // not type checked in runtime
  // so it will not check the type of whatever comes from the api
  id: string
  name: string
}

export default Company
