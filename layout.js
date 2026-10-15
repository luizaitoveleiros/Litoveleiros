import './styles.css';

export const metadata = {
  title: 'Litoveleiros',
  description: 'Projeto Next.js pronto para publicar na Vercel'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
