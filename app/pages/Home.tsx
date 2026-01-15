import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Lesslist" },
  ]
}

export default function HomePage() {
  const user = {
    name: "John Doe",
  }
  return (
    <div className="flex flex-col min-h-screen gap-6 p-4 items-center max-w-screen-md mx-auto pt-20 ">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl font-semibold text-stone-900 font-sans text-center">good morning, {user.name}</h2>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-xl font-bold text-stone-900 text-center">your stats</h3>
        <hr className="w-full border-stone-200" />
        <p className="text-sm text-stone-500 text-center">
          You have 10 wishes and 10 daily notes.
        </p>
      </div>
    </div>
  );
}