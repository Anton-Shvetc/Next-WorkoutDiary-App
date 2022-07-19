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
  const { user, logout } = useAuth();
  const router = useRouter();
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
      {user ? (
        <div
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          <Link href="/login">
            {/* <Nav.Link>Login</Nav.Link> */}
            {"LogOut"}
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/signup" passHref>
            {/* <Nav.Link>Signup</Nav.Link> */}
            {"Signup"}
          </Link>
          <Link href="/login" passHref>
            {/* <Nav.Link>Login</Nav.Link> */}
            {"Login"}
          </Link>
        </div>
      )}
    </nav>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Link href="/" passHref>
    //       <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
    //     </Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    // <Nav className="me-auto">
    //   {user ? (
    //     <div>
    //       <Nav.Link
    //         onClick={() => {
    //           logout();
    //           router.push("/login");
    //         }}
    //       >
    //         Logout
    //       </Nav.Link>
    //     </div>
    //   ) : (
    //     <>
    //       <Link href="/signup" passHref>
    //         <Nav.Link>Signup</Nav.Link>
    //       </Link>
    //       <Link href="/login" passHref>
    //         <Nav.Link>Login</Nav.Link>
    //       </Link>
    //     </>
    //   )}
    // </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavbarComp;
