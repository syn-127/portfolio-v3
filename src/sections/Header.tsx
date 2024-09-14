export const Header = () => {
  return <div className="flex justify-center items-center relative top-3">
    <nav className="flex gap-1 p-0.5 border boarder-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item bg-white text-grey-900 hover:bg-white/70 hover:text-grey-900">Contact</a>
    </nav>
  </div>;
};
