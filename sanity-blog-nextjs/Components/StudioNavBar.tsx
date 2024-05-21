import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

function StudioNavBar(props: any) {
  return (
    <div>
      <div className="w-[10px] h-[10px] bg-red-500">
        <ArrowUturnLeftIcon className="" />
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
