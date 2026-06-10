import Banner from "@/Components/Shered/Banner/Banner";
import OurServices from "@/Components/Shered/Our Services/OurServices";
import WhyChooseOurCare from "@/Components/Shered/Why Choose Our Care/WhyChooseOurCare";

import Image from "next/image";

export default function Home() {
  return (
    <>
       <Banner></Banner>
      <WhyChooseOurCare></WhyChooseOurCare>
      <OurServices></OurServices>
    </>
  );
}
