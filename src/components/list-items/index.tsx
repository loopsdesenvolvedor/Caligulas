import Link from "next/link";

import { FooterListItemsType } from "@/@types/Footer";

const FooterListItems = ({
  href,
  text,
  icon,
  className,
}: FooterListItemsType) => {
  return (
    <>
      <li>
        <Link href={href} className={className}>
          {icon}
          <span>{text}</span>
        </Link>
      </li>
    </>
  );
};

export default FooterListItems;
