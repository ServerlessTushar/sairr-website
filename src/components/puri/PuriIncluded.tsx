import {
  IncludedExcludedSection,
  type IncludedExcludedItem,
} from "@/components/shared/IncludedExcludedSection";

export type { IncludedExcludedItem };

export type PuriIncludedProps = {
  heading: string;
  para: string;
  included: IncludedExcludedItem[];
  excluded: IncludedExcludedItem[];
  className?: string;
  flush?: boolean;
};

export function PuriIncluded({
  heading,
  para,
  included,
  excluded,
  className,
  flush,
}: PuriIncludedProps) {
  return (
    <IncludedExcludedSection
      heading={heading}
      para={para}
      included={included}
      excluded={excluded}
      className={className}
      flush={flush}
    />
  );
}
