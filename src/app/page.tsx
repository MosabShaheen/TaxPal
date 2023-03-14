import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import Tabs from "@/components/functional";
import "./globals.css";
import Task from "@/components/task";
import Started from "@/components/started";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Header />
        <HeroSection />
        <Tabs />
        <Task />
        <Started />
        <Testimonials />
        <Pricing />
        <Faq />
        <Footer />
      </>
  );
}
