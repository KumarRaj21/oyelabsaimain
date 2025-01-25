import { Label } from "@/components/ui/label";
import Link from "next/link";
import { RiSparkling2Fill } from "react-icons/ri";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
const MobileSidebar = ({ navigation, currentPath, setCurrentPath }: any) => {
  return (
    <div
      className={`bg-background flex md:hidden w-16 flex-col border-r-[0.8px] transition-all duration-300 border-accent`}
    >
      <div className="flex flex-col gap-y-5 w-full h-full">
        <div
          className={`font-bold w-full flex gap-2 justify-center items-center px-5 pt-6`}
        >
          <RiSparkling2Fill size={24} />
        </div>
        <nav className="flex-1">
          <div
            role="list"
            className={`h-[90vh] w-full flex flex-col justify-between items-start gap-5 overflow-y-auto px-2 pb-6`}
          >
            <div className="w-full space-y-1">
              {navigation.map((item: any) => (
                <div key={item.key} className="w-full">
                  <Link
                    className={classNames(
                      currentPath === item.path
                        ? 'bg-accent text-foreground'
                        : 'hover:text-foreground hover:bg-accent',
                      `w-full rounded-md p-2 text-xs font-semibold flex items-center gap-3 justify-center}`
                    )}
                    prefetch={true}
                    href={item.path}
                    onClick={() => {
                      setCurrentPath(item.path);
                    }}
                  >
                    {item.Icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileSidebar