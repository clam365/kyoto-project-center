import Image from "next/image";
import {ArrowRight} from "lucide-react";
import Link from "next/link";


export default function project() {
  return (
      <div className={"grid grid-cols-2"}>
          <Image src={"/kikuhama.webp"} alt={"Kikuhama"} width={600} height={450} className={"rounded-sm"}/>
          <div className={"grid grid-cols-2"}>
              <div className="relative">
                  <h1 className="font-[500] text-3xl">URBAN CHANGE IN KIKUHAMA</h1>
                  <p className="absolute bottom-0 left-0 inline-block outline outline-1 outline-black rounded-full px-2 py-1">
                      B2024
                  </p>
              </div>

              <div className={"relative"}>
                  <h1 className="text-lg">
                      Examining Kikuhama&#39;s traffic congestion, linking it to tourism, ecology, and urban development to
                      improve quality of life.
                  </h1>
                  <Link
                      className="absolute bottom-0 left-0 w-full mt-4 pb-2 flex justify-between border-b border-b-black hover:border-b-gray-500 hover:text-gray-500 transition"
                      href="/kikuhama2024"
                  >
                      <h1>Read</h1>
                      <ArrowRight/>
                  </Link>
              </div>

          </div>
      </div>
  )
}

