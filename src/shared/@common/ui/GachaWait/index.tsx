import Image from "next/image"

interface IGachaWaitProps {
  text: string
}

const GachaWait = ({ text }: IGachaWaitProps) => {
  return (
    <>
      <h1 className="mx-[60px] mt-[80px] text-xl font-bold tracking-[-0.4px] text-[#202020]">
        {text}
      </h1>
      <div className="relative pt-[48px]">
        <Image
          src="/icons/mini-gacha.webp"
          width={290}
          height={464}
          alt="mini-gacha"
          className="z-10"
          priority
        />
        <Image
          src="/webps/red.webp"
          width={120}
          height={120}
          alt="red-gif-1"
          className="absolute left-[10%] top-[37%]"
          priority
          unoptimized
        />
        <Image
          src="/webps/green.webp"
          width={120}
          height={120}
          alt="red-gif-2"
          className="absolute left-[50%] top-[37%]"
          priority
          unoptimized
        />
        <Image
          src="/webps/yellow.webp"
          width={120}
          height={120}
          alt="red-gif-3"
          className="absolute left-[28%] top-[21%]"
          priority
          unoptimized
        />
      </div>
    </>
  )
}

export default GachaWait
