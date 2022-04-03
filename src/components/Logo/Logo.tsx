import clsx from "clsx";
import Link from 'next/link'
import Image from 'next/image'

interface ComponentProps {
  className?: string;
  mode: string;
}
const Logo = () => {
  return (
    <Link href="/">
      <a href='/'>
        <Image
          alt="Animeccha Logo"
          height="45px"
          width="45px"
          className={clsx('invert dark:invert-0')}
          src={`/images/animeccha.svg`}
        />
      </a>
    </Link>
  );
};

export default Logo;
