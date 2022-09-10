import List from "./List";
function Menu() {
  // ควรเขียนแบบนี้ แล้ว for loop
  //   const menulist = [
  //     { title: "Home", path: "/home" },
  //     { title: "About", path: "/about" },
  //     { title: "Contact", path: "/contact" },
  //     { title: "Login", path: "/login" },
  //   ];
  return (
    <MenuContainer>
      <List title="Home" path="home" />
      <List title="About" path="about" />
      <List title="Contact" path="contact" />
    </MenuContainer>
  );
}

// Component ซ้อน Component
function MenuContainer(props) {
  //props.children = props พิเศษ => ก้อน list ทั้ง 3 ก้อน
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}
export default Menu;
