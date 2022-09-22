import Link from "next/link";
import Button from "../Button/Button";
import styles from "../../styles/Navbar.module.scss"
import Container from "./../Layout/Container";

export default function AdminNavbar() {
	return (
			<Container>
				<nav className={styles.adminNavbar}>
					<div>
						<Link href="/" passHref>
							<h2>Admin Panel</h2>
						</Link>
					</div>
					<div>
						<ul>
							<li onClick={() => alert("Lazyiness <3")}>Manage Blogs</li>
							<li onClick={() => alert("Lazyiness <3")}>Manage Artworks</li>
							<li onClick={() => alert("Lazyiness <3")}>Manage Projects</li>
						</ul>
					</div>
				</nav>
			</Container>
	);
}
