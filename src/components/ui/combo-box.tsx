"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

const plantCategories = [
  { value: "", label: "Nenhuma" },
  { value: "Interior", label: "Interior" },
  { value: "Exterior", label: "Exterior" },
  { value: "Suculenta", label: "Suculenta" },
  { value: "Florifera", label: "Florífera" },
  { value: "Erva", label: "Erva" },
  { value: "Samambaia", label: "Samambaia" },
  { value: "Arvore", label: "Árvore" },
  { value: "Arbusto", label: "Arbusto" },
];

export function Combobox({ value, onChange }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? plantCategories.find((cat) => cat.value === value)?.label
            : "Selecione a categoria..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar categoria..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>
            <CommandGroup>
              {plantCategories.map((cat) => (
                <CommandItem
                  key={cat.value}
                  value={cat.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {cat.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === cat.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}