type AvatarContainerProps = {
  children: React.ReactNode;
};

const AvatarContainer = ({ children }: AvatarContainerProps) => {
  return <div className="flex items-center gap-3">{children}</div>;
};

export default AvatarContainer;
