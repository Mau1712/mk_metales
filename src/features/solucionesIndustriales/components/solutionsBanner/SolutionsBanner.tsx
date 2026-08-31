import solutionsBannerImage from "@assets/sInd/MK_Metales_S.png";
import { solutionsBannerCopy } from "../../data";
import {
  SolutionsBannerElement,
  SolutionsBannerImageElement,
} from "./SolutionsBanner.elements";

export const SolutionsBanner = () => {
  return (
    <SolutionsBannerElement>
      <SolutionsBannerImageElement
        src={solutionsBannerImage}
        alt={solutionsBannerCopy.imageAlt}
        width={1536}
        height={484}
        loading="lazy"
        decoding="async"
      />
    </SolutionsBannerElement>
  );
};
