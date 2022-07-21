import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Catalog", path: "/catalog" },
  { id: 3, title: "History", path: "/history" },
  // { id: 4, title: "My Programs", path: "/my-programs" },
  // { id: 5, title: "Statistics", path: "/statistics" },
  // { id: 6, title: "LogIn", path: "/login" },
  // { id: 7, title: "SignUp", path: "/signup" },
  { id: 8, title: "Diary", path: "/diaryPage" },
];

const NavbarComp = () => {
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
};

export default NavbarComp;
