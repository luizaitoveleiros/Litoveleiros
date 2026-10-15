import './styles.css';

export const metadata = {
  title: 'Litoveleiros',
  description: 'Projeto Next.js para análise de texto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
