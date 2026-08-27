import { whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

export function WhatsAppLink({
  className,
  message = "Hi Sairr — I'm interested in the Puri journey.",
}: {
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex font-medium text-brand underline-offset-4 transition-colors hover:text-forest hover:underline",
        className,
      )}
    >
      Talk to us on WhatsApp
    </a>
  );
}
