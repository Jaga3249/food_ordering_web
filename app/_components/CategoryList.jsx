import Image from "next/image";
import GetCategory from "../_hooks/GetCategory";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categoryList } = GetCategory();
  const listRef = useRef(null);
  const param = useSearchParams();
  // scroll right function
  const handleScrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  //   scroll left function
  const handleScrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    setSelectedCategory(param.get("category"));
  }, [param]);

  return (
    <div className="mt-5 relative">
      <div className="flex gap-4 overflow-auto scrollbar-hide" ref={listRef}>
        {categoryList &&
          categoryList.map((item, index) => (
            <Link
              href={`?category=${item.slug}`}
              key={index}
              className={`flex flex-col border items-center p-2 gap-3 rounded-xl min-w-28 cursor-pointer hover:border-primary hover:bg-orange-50 group ${
                selectedCategory === item.slug &&
                "bg-orange-200 border-primary text-primary"
              }`}
            >
              <Image
                src={item?.icon?.url}
                alt={item.name}
                width={40}
                height={40}
                className="group-hover:scale-125 ease-in-out duration-300"
              />
              <h2 className="text-sm font-semibold group-hover:text-orange-400">
                {item.name}
              </h2>
            </Link>
          ))}
      </div>
      <ArrowRightCircle
        className="absolute -right-10 
      top-[30%] bg-orange-500 text-white rounded-full w-8 h-8 cursor-pointer"
        onClick={handleScrollRight}
      />
      <ArrowLeftCircle
        className="absolute -left-10 top-[30%] bg-orange-500
       text-white rounded-full w-8 h-8 cursor-pointer"
        onClick={handleScrollLeft}
      />
    </div>
  );
};
export default CategoryList;
