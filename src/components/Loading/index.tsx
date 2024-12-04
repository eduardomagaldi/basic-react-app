interface Props {
  name: string
}

export default function Loading({ name }: Props) {
  return <div>Loading{name ? ` ${name}` : ''}...</div>
}
