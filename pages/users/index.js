import Link from 'next/link'
import { useRouter } from 'next/router'
import ReadAPI from './api/ReadAPI'
import WriteAPI from './api/WriteAPI'
import Admin from "../../template/Admin";

 function User() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <p>User List</p>
    </div>
  )
}
User.layout = Admin;

export default User;