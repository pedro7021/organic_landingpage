import * as S from './styles';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

export type SmartphoneProps = {
  children: React.ReactNode;
};

export function Smartphone({ children }: SmartphoneProps) {
  const phoneRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(phoneRef.current, {
      max: 5,
      speed: 1000,
      perspective: 700,
    });
  });

  return <S.Phone ref={phoneRef}>{children}</S.Phone>;
}
