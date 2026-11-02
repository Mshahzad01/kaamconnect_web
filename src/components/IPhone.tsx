import type { ReactNode } from "react";

type IPhoneProps = {
  children: ReactNode;
  className?: string;
  /** status bar text colour */
  statusTone?: "dark" | "light";
  /** background shown behind the status bar */
  statusBg?: string;
  time?: string;
  showHomeBar?: boolean;
};

function StatusIcons() {
  return (
    <span className="flex items-center gap-[1.4cqw]">
      {/* signal */}
      <svg viewBox="0 0 18 12" className="h-[2.9cqw] w-auto" fill="currentColor" aria-hidden>
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
      </svg>
      {/* wifi */}
      <svg viewBox="0 0 16 12" className="h-[2.9cqw] w-auto" fill="currentColor" aria-hidden>
        <path d="M8 2.3c2.3 0 4.4.9 6 2.4l1.2-1.3A10.3 10.3 0 0 0 8 .5 10.3 10.3 0 0 0 .8 3.4L2 4.7a8.5 8.5 0 0 1 6-2.4Zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.2-1.3A6.7 6.7 0 0 0 8 4.1c-1.8 0-3.4.7-4.6 1.8l1.2 1.3c.9-.8 2.1-1.3 3.4-1.3Zm0 3.5c-.6 0-1.1.2-1.5.6L8 11.5l1.5-1.5c-.4-.4-.9-.6-1.5-.6Z" />
      </svg>
      {/* battery */}
      <svg viewBox="0 0 27 13" className="h-[3.1cqw] w-auto" aria-hidden>
        <rect x="0.5" y="0.5" width="23" height="12" rx="3.6" fill="none" stroke="currentColor" opacity="0.4" />
        <rect x="2" y="2" width="17" height="9" rx="2.2" fill="currentColor" />
        <path d="M25 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2Z" fill="currentColor" opacity="0.45" />
      </svg>
    </span>
  );
}

/**
 * Pixel-accurate iPhone 15 Pro frame. Scales fluidly with its width
 * (container query units), so simply size it with a width utility.
 */
export default function IPhone({
  children,
  className = "",
  statusTone = "dark",
  statusBg = "#F8F9FA",
  time = "9:41",
  showHomeBar = false,
}: IPhoneProps) {
  return (
    <div className={`iphone ${className}`}>
      <span className="iphone__btn iphone__btn--action" />
      <span className="iphone__btn iphone__btn--volup" />
      <span className="iphone__btn iphone__btn--voldown" />
      <span className="iphone__btn iphone__btn--power" />
      <div className="iphone__frame">
        <div className="iphone__screen">
          <div
            className={`iphone__statusbar ${statusTone === "light" ? "iphone__statusbar--dark" : ""}`}
            style={{ background: statusBg }}
          >
            <span>{time}</span>
            <StatusIcons />
          </div>
          <div className="iphone__island" />
          <div className="iphone__content">{children}</div>
          {showHomeBar && <div className="iphone__homebar" />}
          <div className="iphone__glare" />
        </div>
      </div>
    </div>
  );
}
