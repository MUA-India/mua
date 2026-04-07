import type { SVGProps } from "react";

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.96 3.4-2.16 4.56-1.32 1.32-3.4 2.28-5.68 2.28-4.12 0-7.56-3.32-7.56-7.44s3.44-7.44 7.56-7.44c2.28 0 4.12.8 5.56 2.16l2.36-2.36C18.12 3.72 15.44 2.52 12.48 2.52c-5.4 0-9.84 4.44-9.84 9.84s4.44 9.84 9.84 9.84c2.96 0 5.4-1 7.28-2.76 1.92-1.92 2.6-4.6 2.6-6.84 0-.52-.04-1.04-.12-1.52H12.48z" />
    </svg>
  );
}
