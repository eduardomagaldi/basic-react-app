interface Props {
  error: Error
}

export default function Loading({ error }: Props) {
  return <div>Error: {JSON.stringify(error.message)}</div>
}
