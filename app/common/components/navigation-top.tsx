import { Link } from "react-router";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export function NavigationTop() {
  return (
      <div className="w-full  p-2 fixed top-0 left-0 right-0 flex justify-center">
          <div className="flex justify-between items-center gap-8 max-w-screen-lg w-full">
        <Link to="/" className="text-xl font-bold italic">
            LessList
        </Link>
          <nav className="flex items-center gap-2">
              <ul className="flex items-center gap-2">
                <li>
                    <Link to="#about">About</Link>
                </li>
                <li className="flex items-center gap-2">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                      <Link to="#pricing">Pricing</Link>
                </li>
                <li className="flex items-center gap-2">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                    <Link to="#contact">Get Started</Link>
                </li>
                <li className="flex items-center gap-2">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                    <Link to="#contact">Contact</Link>
                </li>
              </ul>
            </nav>
        </div>
    </div>
  )
}