import { Footer } from '../../components/Footer';

export type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
