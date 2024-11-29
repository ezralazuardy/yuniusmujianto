import { Spectral as font } from "next/font/google";

const Spectral = font({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default Spectral;
