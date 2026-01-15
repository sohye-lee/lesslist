"use client"

import * as React from "react"
import { Link } from "react-router"
import { HomeIcon, ScrollTextIcon, PlusIcon, BookMarkedIcon, UserIcon, DoorOpenIcon, PenIcon, PauseIcon } from "lucide-react"

// import { useIsMobile } from "~/common/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"

const menus = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Wishes",
    href: "/wishes",
    icon: ScrollTextIcon,
  },
  {
    name: "Add",
    href: "/wishes/new",
    icon: PlusIcon,
  },
  {
    name: "Pause",
    href: "/dailynotes",
    icon: PauseIcon,
  },
  {
    name: "Insights",
    href: "/insights",
    icon: BookMarkedIcon,
  },

  // {
  //   name: "Me",
  //   href: "/profile",
  //   icon: UserIcon,
  // },
]

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

export function NavigationMain({ isLoggedIn }: { isLoggedIn: boolean }) {
  // const isMobile = useIsMobile()
  const isMobile = false

  return (
    <nav className="px-5 py-2 fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border shadow-lg rounded-full overflow-hidden flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">
          {isLoggedIn ? menus.map((menu) => (
            <NavigationMenuItem asChild key={menu.href} className="cursor-pointer flex flex-col items-center gap-2 py-2 px-4 rounded-md hover:bg-primary/20 transition-all">
              <Link to={menu.href} className="text-sm leading-none">
                <menu.icon className="size-7 text-stone-700" />
                <span className="text-xs leading-none font-sans text-stone-700">{menu.name}</span>
              </Link>
            </NavigationMenuItem>
          )) : noLoggedInMenus.map((menu) => (
            <NavigationMenuItem asChild key={menu.href} className="flex flex-col items-center gap-2 py-2 px-4 rounded-full hover:bg-accent/50">
              <Link to={menu.href} className="text-sm leading-none font-medium">
                <menu.icon className="size-5" />
                {menu.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
 
      </NavigationMenu>
    </nav>
  )
}
 
