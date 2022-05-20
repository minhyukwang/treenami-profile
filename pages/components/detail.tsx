import Image from "next/image";
import Link from "next/link";
const callouts = [
  {
    name: "백합(우아한 그리움), 58.0 × 43.0cm Watercolor",
    description:
      "백합은 돌아가신지 오랜 울 엄마의 꽃이다. 시골 할머니 같지 않고 아파트 화단에 핀 백합의 꽃잎을 어루만지며 참 맑고 곱다던 엄마의 그리움이다. 시간이 가면서 슬픔은 작아지고 그리움은 깊어만 간다. 백합은 엄마의 우아한 그리움이다.",
    imageSrc: "/beauty_miss.jpg",
    href: "/pictures/1",
  },
  {
    name: "사랑인 듯, 86.0 × 67.0cm Watercolor",
    description:
      "차가운 공기가 어느새 포근하게 나를 두를 때, 리듬을 타는 발걸음이 이미 봄이다. 땅에서 쏟는 모든 싹이 사랑으로 부풀어 올랐다. 순백으로 봉긋한 목련은 사랑하지 않을 수 없다. 목련은 사랑인 듯....",
    imageSrc: "/cuty_love.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/pictures/1",
  },
  {
    name: "러브 레터, 55.5×40.0cm Watercolor",
    description:
      "화려한 수국은 5월 신부의 부케처럼 기분 좋다. 인생의 젊은 부분처럼 화려함은 순간으로 오가고 한갓 꿈과 같다는 느낌이다.",
    imageSrc: "/likedream.jpg",
    href: "/pictures/1",
  },
  {
    name: "5월 부케, 40.0 × 30.0cm Watercolor",
    description:
      "일생에서 가장 예쁜 모습으로 자신이 비치는 5월 신부의 부케가 수국이다. 4월말에서 여름까지 화려하면서 우아한 수국은 신부의 모습과 닮았다. 수국은 많은 사람의 눈을 끌어들인다. 꽃송이가 큰 이유도 있지만 화려함이 더욱 큰 이유다. 수국의 화려함이 눈길과 발길을 멈추게 하는 마력을 가졌다.",
    imageSrc: "/may_princess.jpg",
    href: "/pictures/1",
  },
  {
    name: "사랑 송이송이, 60.0 × 42.0cm Watercolor",
    description:
      "초봄 어느 꽃보다 먼저 송이송이 솟는 새하얀 목련은 정말 사랑이다. 부지런 한 탓에 꽃샘추위를 피하지 못하고 핀 꽃이 얼어붙는 시련도 겪는다. 그래서 더 많이 사랑하게 되는지도.....",
    imageSrc: "/lovelove.jpeg",
    href: "/pictures/1",
  },
  {
    name: "대롱대롱, 28.5 × 30.0cm Watercolor",
    description:
      "발그레 볼 밝힌 섬초롱이 대롱대롱, 봄이 가고 여름이 온다는 소식 같다. 한 송이 한 송이를 정성을 들여 그리다 보면 ‘참 예쁜 꽃을 산에서 만났구나’ 하고 처음으로 비음산에서 초롱꽃을 만난 감격적인 순간을 잊을 수 없다.",
    imageSrc: "/daelong.jpeg",
    href: "/pictures/1",
  },
  {
    name: "널 기다려, 42.0 × 29.0cm Watercolor",
    description: "",
    imageSrc: "/wait_for_you.jpeg",
    href: "/pictures/1",
  },
  {
    name: "친구의 향기, 41.0 × 26.0cm Watercolor",
    description: "",
    imageSrc: "/friends.jpeg",
    href: "/pictures/1",
  },
  {
    name: "기대 둘, 44.0×29.5cm Watercolor",
    description:
      "자목련 두 송이가 나를 보고 방긋 웃는다. 꽃도 웃고 나도 웃고 자목련을 그리는 내내 웃는다.",
    imageSrc: "/smile_two.jpeg",
    href: "/pictures/1",
  },
];

export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-6xl lg:px-6">
          <div className="max-w-7xl mx-auto px-4 ">
            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl ml-2">
              Collections
            </h4>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1">
                    <Link href={callout.href} key={callout.name}>
                      <a>
                        <Image
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          width="700"
                          height="650"
                          // className="w-full h-full object-center object-cover"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2 ">
                    <span className="text-justify text-sm italic text-gray-500">
                      {callout.name}
                    </span>
                    <p className="text-sm mt-2 font-light text-justify text-slate-900">
                      {callout.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
