interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Login Header</header>
      <main>{children}</main>
      <footer>Login Footer</footer>
    </div>
  );
};

export default LoginLayout;
