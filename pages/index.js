import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/personas', fetcher)

  if (error) return <div>Failed to load personas</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((persona) => (
        <li key={persona.id}>
          <Link href="/persona/[id]" as={`/persona/${persona.id}`}>
            <a>{`persona ${persona.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
