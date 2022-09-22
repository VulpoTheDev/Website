import React from 'react'
import AdminNavbar from "../../components/Admin/AdminNavbar";

export default function Admin() {
	return (
			<div>
				<AdminNavbar/>
				<h1>Admin Panel</h1>
				<div>
					<button>Create Blog</button>
					<button>Manage Blog</button>
					<button>Add Projects</button>
					<button>Manage Projects</button>
					<button>Add Artwork</button>
					<button>Manage Artwork</button>
				</div>
			</div>
	)
}