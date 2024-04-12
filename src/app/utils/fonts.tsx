import { Poppins, Inter, Arizonia } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins-font",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export { poppins, arizonia };
