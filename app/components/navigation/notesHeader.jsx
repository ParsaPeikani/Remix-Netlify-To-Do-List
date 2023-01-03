import { NavLink, Form } from "@remix-run/react";
import Logo from "../utils/logo";

function NotesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/notes" end>
              Manage Notes
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="post" action="logout">
          <button className="cta">Logout</button>
        </Form>
      </nav>
    </header>
  );
}

export default NotesHeader;
