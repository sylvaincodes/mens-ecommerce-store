import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/forms/input";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export const FooterOne = () => {
  return (
    <footer className="mt-20 bg-gray-200 py-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <Logo />
            <p>All right reserved 2024</p>
          </div>

          <div>
            <h1 className="uppercase text-2xl text-gray-500">about us</h1>
            <ul className="mt-4 flex flex-col gap-y-4">
              <li>
                <Link className="capitalize" href="#">
                  about us
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  store location{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  contact{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  order tracking{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="uppercase text-2xl text-gray-500">useful links</h1>
            <ul className="mt-4 flex flex-col gap-y-4">
              <li>
                <Link className="capitalize" href="#">
                  returns
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  support policy{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  size guide{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  Faqs{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="uppercase text-2xl text-gray-500">follow us</h1>
            <ul className="mt-4 flex flex-col gap-y-4">
              <li>
                <Link className="capitalize" href="#">
                  github
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  youtube{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  linkedin{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="capitalize" href="#">
                  {" "}
                  twitter{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col gap-8">
            <h1 className="uppercase text-2xl text-gray-500">subscribe</h1>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className="flex flex-col gap-8">
              <Input name="email" type="text" />
              <Button variant="primary" className="uppercase py-4 w-fit">
                subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
