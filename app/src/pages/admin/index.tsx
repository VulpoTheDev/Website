import { useRouter } from 'next/router'
import React from 'react'

export default function Admin() {
  const router = useRouter()
  return (
    <div>
        <h1>Admin</h1>
        <div>
            <button onClick={() => router.push("/admin/blog")}>Manage Blog</button>
            <button onClick={() => router.push("/admin/project")}>Manage Projects</button>
        </div>
    </div>
  )
}
