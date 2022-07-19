import Link from "../node_modules/next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "../node_modules/next/router";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Catalog", path: "/catalog" },
  { id: 3, title: "History", path: "/history" },
  // { id: 4, title: "My Programs", path: "/my-programs" },
  // { id: 5, title: "Statistics", path: "/statistics" },
  { id: 6, title: "LogIn", path: "/login" },
  { id: 7, title: "SignUp", path: "/signup" },
  { id: 8, title: "Diary", path: "/diaryPage" },
];


function Navbar() {
  
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
