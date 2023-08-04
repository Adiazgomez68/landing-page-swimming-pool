import Offers from "@/core/components/home/Offers";
import OurDesign from "@/core/components/home/OurDesign";
import MainLayout from "@/core/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <OurDesign/>
      <Offers/>
    </MainLayout>
  )
}
