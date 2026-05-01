import Image from "next/image";
import Banner from '@/components/shared/Banner/Banner'
import TopCourses from '@/components/homepage/TopCourses'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Banner/>
      <TopCourses/>
    </div>
  );
}
