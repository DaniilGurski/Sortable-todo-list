# Project highlights

- Theme container

- Using dnd-kit for sortable list

## Theme container

The easiest way I found to handle dark mode is to have a container with data-theme attributes and wrap everything else in it. Then you can use **dark** utility class in Tailwind and change component styles according to current theme.

### CSS:

```css
@import "tailwindcss";

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

### JS:

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

### Useful resources

- [Toggling dark mode manually with Tailwind CSS](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)

## Sortable list

### Useful resources

- [Dnd-kit Sortable Preset](https://docs.dndkit.com/presets/sortable)
- [React DND Kit: Creating Vertical Sortable Lists Tutorial](https://www.youtube.com/watch?v=wmk50PEsVrs)
