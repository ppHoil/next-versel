import { useRouter } from 'next/router';
import Link from 'next/link';

const style: React.CSSProperties = {
    color:'#0070f3',
    textDecoration: 'underline',
}

interface Props{
  text: string;
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ href, text }) => {
    const {asPath} = useRouter();
    return (
    <Link href={href} >
      <span style={ asPath===href ? style : {}}>
        {text}
      </span>
    </Link>
  );
};

