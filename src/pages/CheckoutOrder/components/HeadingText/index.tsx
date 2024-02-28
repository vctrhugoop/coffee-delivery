import { ReactNode } from 'react';
import { HeadingTextContainer } from './styles';

interface HeadingTextProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function HeadingText({ title, subtitle, icon }: HeadingTextProps) {
  return (
    <HeadingTextContainer>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </HeadingTextContainer>
  );
}
