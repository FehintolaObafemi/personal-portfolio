declare module 'react-transition-group' {
  import { FC, ReactNode } from 'react';

  interface CSSTransitionProps {
    in?: boolean;
    timeout?: number;
    classNames?: string;
    children?: ReactNode;
  }

  interface TransitionGroupProps {
    children?: ReactNode;
  }

  export const CSSTransition: FC<CSSTransitionProps>;
  export const TransitionGroup: FC<TransitionGroupProps>;
} 