import Link from 'next/link'
import { useRouter } from 'next/router'
import ReadAPI from '../api/ReadAPI' 
export default () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <p>User View #{id}</p>
    </div>
  )
}