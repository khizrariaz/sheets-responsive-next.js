import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 bg-slate-400 text-white max-w-screen-2xl mx-auto">
      {/* logo */}
      <div>
        <h2 className="font-extrabold text-3xl text-pink-500">logo make</h2>
      </div>
      {/* nav buttons */}

      <ul className="hidden md:block">
        {/*  md:block = use block to show/display(about home n contact) on screen larger than mobile  */}
        {/* space-x-5 = space between home about n contact*/}

        <li className="space-x-5">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    
      <Sheet>
  <SheetTrigger className="md:hidden"><Menu/></SheetTrigger>
  <SheetContent>
  <ul>
        {/*  md:block = use block to show/display(about home n contact) on screen larger than mobile  */}
        {/* space-x-5 = space between home about n contact*/}

        <li className="space-x-5">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
        </li>
      </ul>
  </SheetContent>
</Sheet>

    </header>
  );
}
// npm run dev and npm run build dono sath ni chlskty pehly dev waly cmd ko close kro then new cmd p npm run build chlao
//npm run build= jsx files check krta h . chunks me divide krta h. then optimize krta h or unneccarry code delete krdega
// npm run build= optimizes this project and build it