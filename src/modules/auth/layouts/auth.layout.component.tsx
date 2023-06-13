export const AuthLayoutComponent = ({
  children,
  showBackButton,
}: {
  children: React.ReactNode;
  showBackButton?: boolean;
}): JSX.Element => {
  return <>{children}</>;
};
