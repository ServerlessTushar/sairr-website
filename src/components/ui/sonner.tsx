"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="top-right"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-white" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4 text-white" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast: "shadow-lg border",
          success: "!border-green-600 !bg-green-600 !text-white",
          error: "!border-red-600 !bg-red-600 !text-white",
          title: "!text-white",
          description: "!text-white/90",
          closeButton:
            "!border-white/20 !bg-white/10 !text-white hover:!bg-white/20",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
