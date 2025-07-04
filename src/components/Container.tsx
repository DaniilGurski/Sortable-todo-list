import { useAtomValue } from "jotai";
import { type PropsWithChildren } from "react";
import { themeAtom } from "../atoms";

export default function Container({ children }: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
    <div
      className="grid h-dvh place-items-center bg-[image:url(./assets/bg-mobile-light.jpg)] bg-contain bg-no-repeat md:bg-[image:url(./assets/bg-desktop-light.jpg)] dark:bg-gray-900 dark:bg-[image:url(./assets/bg-mobile-dark.jpg)] md:dark:bg-[image:url(./assets/bg-desktop-dark.jpg)]"
      data-theme={theme}
    >
      {children}
    </div>
  );
}
