import Banner from "@/Components/Shered/Banner/Banner";
import HowItWorks from "@/Components/Shered/How It Works/HowItWorks";
import OurServices from "@/Components/Shered/Our Services/OurServices";
import PatientReviews from "@/Components/Shered/Patient Reviews/PatientReviews";
import WhyChooseOurCare from "@/Components/Shered/Why Choose Our Care/WhyChooseOurCare";


export default function Home() {
  return (
    <>
       <Banner></Banner>
      <WhyChooseOurCare></WhyChooseOurCare>
      <OurServices></OurServices>
      <HowItWorks></HowItWorks>
      <PatientReviews></PatientReviews>
    </>
  );
}
