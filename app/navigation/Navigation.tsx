"use client";

import Link from "next/link";
import * as Ui from "../../ui-lib/components";
import styles from "./navigation.module.scss";
import { usePathname } from "next/navigation";

type AppNav = {
  id: number | string;
  name: string;
  path: string;
};

const appNav: AppNav[] = [
  {
    id: "Home",
    name: "Home",
    path: "/",
  },
  {
    id: "Reports",
    name: "Reports",
    path: "/my-reports",
  },
];

export default function Navigation() {
  const currentPath = usePathname();
  const getActiveClass = (path: string): string => {
    return path === currentPath ? `${styles.navigation}_item--active` : "";
  };
  return (
    <Ui.NavLayout>
      <div className={styles.navigation}>
        {appNav.map((navItem) => {
          return (
            <div className={`${styles.navigation}_item`} key={navItem.id}>
              <Link
                className={getActiveClass(navItem.path)}
                href={navItem.path}
              >
                {navItem.name}
              </Link>
            </div>
          );
        })}
      </div>
    </Ui.NavLayout>
  );
}
