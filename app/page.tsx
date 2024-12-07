import Image from "next/image";
import Maincard from "@/app/components/maincard/page";
import Calltoaction from "@/app/components/calltoaction/page";
export default function Home() {
  return (
      <main>
    <Calltoaction/>
   <Maincard/>
      </main>
  );
}
