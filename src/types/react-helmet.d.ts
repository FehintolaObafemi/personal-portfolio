declare module 'react-helmet' {
  import { FC, ReactNode } from 'react';

  interface HelmetProps {
    children?: ReactNode;
  }

  export const Helmet: FC<HelmetProps>;
} 