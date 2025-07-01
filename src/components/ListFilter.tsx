import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import clsx from "clsx";

const filters = ["All", "Active", "Completed"];

type ListFilterProps = {
  className?: string;
};

export default function ListFilter({ className }: ListFilterProps) {
  return (
    <RadioGroup
      className={clsx("gap-x-2", className)}
      aria-label="todo list filter"
    >
      {filters.map((filter) => (
        <Radio className="cursor-pointer font-bold" value={filter} key={filter}>
          {filter}
        </Radio>
      ))}
    </RadioGroup>
  );
}
