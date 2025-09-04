import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/">
      <div className="flex pl-2 items-center gap-3 dark:hidden">
        <div className="size-6 relative ">
          <Image
            src="/images/logo/logo-light.png"
            alt="logo"
            layout="fill"
            quality={100}
            priority={true}
          />
        </div>
        <div className="text-2xl font-medium">WEBSMITHS</div>
      </div>
      <div className=" dark:flex pl-2 items-center gap-3 hidden">
        <div className="size-6 relative ">
          <Image
            src="/images/logo/logo-dark.png"
            alt="logo"
            layout="fill"
            quality={100}
          />
        </div>
        <div className="text-2xl font-medium">WEBSMITHS</div>
      </div>
    </Link>
  );
};

export default Logo;
