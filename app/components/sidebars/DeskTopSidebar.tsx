import { useState } from "react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { RiSparkling2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
const DeskTopSidebar = ({ navigation, isSidebarMinimized, setIsSidebarMinimized, router, currentPath, setCurrentPath }: any) => {

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev: any) =>
      prev.includes(key) ? prev.filter((k: any) => k !== key) : [...prev, key]
    );
  };

  return (
    <div
      className={`h-[100vh] hidden bg-background md:flex ${isSidebarMinimized ? "lg:w-16" : "lg:w-64"
        } lg:flex-col border-r-[0.8px] transition-all duration-300 border-accent`}
    >
      <div className="flex flex-col w-full h-full justify-start items-center">
        <div
          className={`text-xl w-full flex gap-2 justify-start items-center ${isSidebarMinimized ? "px-5 py-7" : "px-6 py-7"
            }`}
        >
          <RiSparkling2Fill size={24} />
          {!isSidebarMinimized && <span className="golos-text-600">Oyelabs AI</span>}
        </div>
        <div
          className={`absolute z-[2000] top-7 ${isSidebarMinimized ? "left-12" : "left-[235px]"
            }`}
        >
          <button
            onClick={() => {
              setExpandedSections([])
              setIsSidebarMinimized(!isSidebarMinimized)
            }}
            className="p-2 text-foreground hover:text-indigo-600 rounded-md transition-colors"
          >
            {isSidebarMinimized ? (
              <BiSolidChevronRightCircle size={20} />
            ) : (
              <FaCircleChevronLeft size={20} />
            )}
          </button>
        </div>
        <div
          role="list"
          className={`w-full flex flex-col justify-between items-start gap-5 overflow-y-auto ${isSidebarMinimized ? "px-2" : "px-3"
            } pb-6`}
        >
          <ScrollArea className={`w-full ${!isSidebarMinimized ? "pr-4" : "pr-0"}`}>
            {navigation.map((item: any) => (
              <div key={item.key} className="w-full">
                <button
                  className={classNames(
                    currentPath === item.path
                      ? "bg-accent text-foreground"
                      : "hover:text-foreground hover:bg-accent",
                    `w-full text-left rounded-md p-2 text-sm font-semibold flex justify-start items-center px-4 gap-3 my-3 ${isSidebarMinimized && "justify-center"
                    }`
                  )}
                  onClick={() => {
                    if (item.sublinks) toggleSection(item.key);
                    else {
                      setCurrentPath(item.path);
                      router.push(item.path);
                    }
                  }}
                >
                  {item.Icon}
                  {!isSidebarMinimized && (
                    <div className="flex justify-between items-center w-full">
                      {item.name}
                      {item.sublinks &&
                        (expandedSections.includes(item.key) ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        ))}
                    </div>
                  )}
                </button>
                {item.sublinks && expandedSections.includes(item.key) && (
                  <div className="ml-8 space-y-2 mb-3 mt-1">
                    {item.sublinks.map((subitem: any) => (
                      <button
                        key={subitem.key}
                        className={classNames(
                          currentPath === subitem.path
                            ? "bg-accent text-foreground"
                            : "hover:text-foreground hover:bg-accent",
                          `w-full text-left rounded-md p-2 text-sm font-semibold flex items-center px-4`
                        )}
                        onClick={() => {
                          setCurrentPath(subitem.path);
                          router.push(subitem.path);
                        }}
                      >
                        {subitem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default DeskTopSidebar