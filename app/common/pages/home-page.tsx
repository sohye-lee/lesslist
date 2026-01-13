import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Lesslist" },
  ]
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen gap-6 p-4 items-center max-w-screen-lg mx-auto ">
      <div className="flex flex-col gap-2">
      <h2>Home Page</h2>
      </div>
    </div>
  );
}