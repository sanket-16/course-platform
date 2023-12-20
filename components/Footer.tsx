import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4 grid-cols-1 pb-20 px-4 text-foreground/60 place-content-center">
      <Separator className="md:col-span-4 my-20" />
      <div className="flex flex-col ">
        <Link href="/" className="hover:text-foreground">
          <h3 className="font-bold text-2xl text-primary">Course.io</h3>
        </Link>
        <p>Made with ❤️</p>
      </div>
      <div className="md:col-span-2"></div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/" className="hover:text-foreground">
            Discover
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:text-foreground">
            Terms and Conditions
          </Link>
          <Link href="/" className="hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
