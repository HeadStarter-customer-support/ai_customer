const AuthLayout = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url("/headstarter_bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
