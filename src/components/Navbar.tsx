import Container from "./Container";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-200 py-6 shadow-md">
      <Container className="flex justify-between">
        <div className="">Logo</div>
        <div className="">menu</div>
      </Container>
    </div>
  );
};

export default Navbar;
