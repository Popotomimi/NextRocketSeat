type AvatarContentProps = {
  children: React.ReactNode;
};

const AvatarContent = ({ children }: AvatarContentProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default AvatarContent;
