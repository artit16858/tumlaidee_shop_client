import Link from 'next/link'
import { useRouter } from 'next/router'
import ReadAPI from '../api/ReadAPI'
import WriteAPI from '../api/WriteAPI'
export default () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <p>User Edit #{id}</p>
    </div>
  )
}