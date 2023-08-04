import Contact from "@/core/components/home/Contact";
import Offers from "@/core/components/home/Offers";
import OurDesign from "@/core/components/home/OurDesign";
import Testimonials from "@/core/components/home/Testimonials";
import MainLayout from "@/core/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <OurDesign/>
      <Offers/>
      <Testimonials/> 
      <Contact/> 
    </MainLayout>
  )
}
