import "./navLayout.scss";

type NavLayoutProps = {
  children: Readonly<React.ReactNode>;
};

export default function NavLayout({ children }: NavLayoutProps) {
  return <div className="nav_layout">{children}</div>;
}
