'use client';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Footer } from './Footer';
import './globals.css';
import { Header } from './Header';
import styles from './page.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <head />
      <body>
        <UserProvider>
          <div className={styles.container}>
            <Header />
            {children}
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
