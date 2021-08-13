import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default paraAbility = () => {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/para-ability/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load para-ability</div>
  if (!data) return <div>Loading</div>

  return <div>{data.name}</div>
}
