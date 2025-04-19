import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 grid-rows-2 gap-4 auto-rows-[180px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-lg bg-white p-6",
      "shadow-[0_1px_3px_0_rgb(0_0_0_/_0.1),_0_1px_2px_-1px_rgb(0_0_0_/_0.1)]",
      "dark:bg-zinc-900 dark:shadow-none dark:ring-1 dark:ring-white/10",
      "min-h-[180px] flex flex-col justify-between",
      className
    )}
  >
    <div>
      <Icon className="h-8 w-8 text-zinc-900 dark:text-zinc-100" />
      <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
        {name}
      </h3>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
    {cta && (
      <div className="mt-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-zinc-900 dark:text-zinc-100"
          asChild
        >
          <a href={href} className="flex items-center">
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    )}
  </div>
);

export { BentoCard, BentoGrid }; 