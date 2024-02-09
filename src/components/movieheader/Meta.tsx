type MetaProps = {
  children: React.ReactNode;
};

export const Meta = ({ children }: MetaProps) => {
  return (
    <span className="inline-block mr-5 text-white/50 text-sm">{children}</span>
  );
};
