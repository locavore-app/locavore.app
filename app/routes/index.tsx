// import { Link } from "@remix-run/react";

// import { useOptionalUser } from "~/utils";

export default function Index() {
  // const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="green">
          <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1z" />
          <path opacity={0.4} d="M512 32c0 123.8-100.3 224-224 224v64c0-53.52-18.81-102.6-50.1-141.1C269.4 93.21 351.4 32 448 32H512z" />
        </svg>
        <p>We're growing something new</p>
      </div>
    </main>
  );
}
