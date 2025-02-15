const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center bg-[#5c3B58]">
      <div className="md:h-auto md:w-[420px]">{children}</div>
    </div>
  );
};

export default AuthLayout;
