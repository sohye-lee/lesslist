"use client"

import * as React from "react"
import { Link } from "react-router"
import { HomeIcon, ScrollTextIcon, PlusIcon, BookMarkedIcon, UserIcon } from "lucide-react"

// import { useIsMobile } from "~/common/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/common/components/ui/navigation-menu"

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
    name: "Insights",
    href: "/insights",
    icon: BookMarkedIcon,
  },
  {
    name: "Me",
    href: "/profile",
    icon: UserIcon,
  },
]

export function Navigation() {
  // const isMobile = useIsMobile()
  const isMobile = false

  return (
    <nav className="px-4 py-1 fixed bottom-8 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border shadow-lg rounded-full overflow-hidden flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          {menus.map((menu) => (
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
 
