import PhotoContainer from "@/pages/photo";
import TopContainer from "@/pages/top";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-16">
      {/* Top Section */}
      <div className="w-full h-auto flex items-center justify-center">
        <TopContainer />
      </div>
      {/* Photo Container */}
      <div className="w-full h-fit flex items-center justify-center">
        <PhotoContainer />
      </div>
    </div>
  );
}
