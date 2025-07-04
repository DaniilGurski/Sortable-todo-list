import { Radio, RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { filterModeAtom } from "../atoms";

const filters = ["All", "Active", "Completed"];

type ListFilterProps = {
  className?: string;
};

export default function ListFilter({ className }: ListFilterProps) {
  const [filterMode, setFilterMode] = useAtom(filterModeAtom);

  return (
    <RadioGroup
      value={filterMode}
      onChange={setFilterMode}
      className={clsx("gap-x-2", className)}
      aria-label="todo list filter"
    >
      {filters.map((filter) => (
        <Radio
          className="cursor-pointer font-bold data-checked:text-blue-500"
          value={filter}
          key={filter}
        >
          {filter}
        </Radio>
      ))}
    </RadioGroup>
  );
}
