'use client';

import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import styles from './page.module.css';

export const Header = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className={styles.header}>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user);

  return (
    <div className={styles.header}>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <>
          <a href="/api/auth/logout">Logout</a>
          {user.picture && (
            <Image
              src={user.picture}
              alt="Avater"
              width={32}
              height={32}
              className={styles.avatar}
            />
          )}
        </>
      )}
    </div>
  );
};
