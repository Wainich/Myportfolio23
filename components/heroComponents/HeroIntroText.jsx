import { styles } from "@/components/styles";
import { greeting } from "@/constants";

const HeroIntroText = () => {
  return (
    <div
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient " />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hello, I am <span className="text-[#915eff]">James</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {greeting.intro}
        </p>
      </div>
    </div>
  );
};

export default HeroIntroText;
