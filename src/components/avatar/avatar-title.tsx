type AvatarTitleProps = {
  children: React.ReactNode;
};

const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
};

export default AvatarTitle;
