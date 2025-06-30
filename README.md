## Switching app theme

### Variant 1:

```css
@import "tailwindcss";

@layer base {
  body {
    background-image: url("./assets/bg-desktop-light.jpg");
    background-repeat: no-repeat;
    background-size: contain;

    &:has([data-theme="dark"]) {
      background-image: url("./assets/bg-desktop-dark.jpg");
    }
  }
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```js
import { useAtomValue } from "jotai";
import { type PropsWithChildren } from "react";
import { themeAtom } from "../atoms";

export default function Container({ children }: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
    <div className="h-dvh" data-theme={theme}>
      {children}
    </div>
  );
}
```

### Variant 2:

```css
@import "tailwindcss";

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```js
import { useAtomValue } from "jotai";
import { type PropsWithChildren } from "react";
import { themeAtom } from "../atoms";

export default function Container({ children }: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
    <div
      className="h-dvh bg-[image:url(./assets/bg-desktop-light.jpg)] bg-contain bg-no-repeat dark:bg-[image:url(./assets/bg-desktop-dark.jpg)]"
      data-theme={theme}
    >
      {children}
    </div>
  );
}
```

## Contents

- Theme providing container
