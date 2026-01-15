import { Link } from "react-router";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { DoorOpenIcon, LogOutIcon, PenIcon, UserCircleIcon } from "lucide-react";

export function NavigationTop({ isLoggedIn }: { isLoggedIn: boolean }) {
  const noLoggedInMenus = [
   {
    name: "Login",
    href: "/auth/login",
    icon: DoorOpenIcon,
   },
   {
    name: "Join",
    href: "/auth/signup",
    icon: PenIcon,
    
   },
]
  return (
      <div className="w-full  p-5 fixed top-0 left-0 right-0 flex justify-center">
          <div className="flex justify-between items-center gap-8 max-w-screen-lg w-full">
        <Link to="/" className="text-2xl font-bold  text-stone-400 font-sans">
            <span className="text-stone-500">l</span>ess<span className="text-stone-500">l</span>ist.
        </Link>
          <nav className="flex items-center gap-2">
                  <ul className="flex items-center gap-4">
                      {!isLoggedIn && (
                          <>
                       
                <li>
                    <Link to="#about" className="text-sm leading-none font-sans text-stone-700">About</Link>
                </li>
                <li className="flex items-center gap-4">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                      <Link to="#pricing" className="text-sm leading-none font-sans text-stone-700">Pricing</Link>
                </li>
                <li className="flex items-center gap-4">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                    <Link to="#contact" className="text-sm leading-none font-sans text-stone-700">Get Started</Link>
                </li>
                <li className="flex items-center gap-4">
                    <span className="inline-block h-[5px] w-[5px] bg-black rounded-full aspect-square"></span>
                    <Link to="#contact" className="text-sm leading-none font-sans text-stone-700">Contact</Link>
                </li>
                         </>)
                      }
                {!isLoggedIn && noLoggedInMenus.map((menu) => (
                    <li key={menu.href}>
                        <Link to={menu.href} className="text-sm leading-none font-sans text-stone-700 flex flex-row items-center gap-1 bg-stone-200 rounded-full py-3 px-4">
                        <menu.icon className="size-4" />
                        {menu.name}
                        </Link>
                    </li>
                ))}
                {isLoggedIn && (
                    <li>
                        <Link to="/logout" className="hover:bg-green-700 hover:text-white transition-all transition-[300ms]text-sm leading-none font-sans text-stone-500 bg-stone-200 w-10 h-10 rounded-full flex items-center justify-center">
                            <UserCircleIcon className="size-9 " />
                        </Link>
                    </li>
                )}
              </ul>
            </nav>
        </div>
    </div>
  )
}