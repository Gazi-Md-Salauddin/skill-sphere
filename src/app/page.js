import Image from "next/image";
import Banner from '@/components/shared/Banner/Banner';
import LearningTips from '@/components/homepage/ui/LearningTips';
import TopInstructor from '@/components/homepage/ui/TopInstructor';
import TopCourses from '@/components/homepage/ui/TopCourses';
import StatCard from '@/components/homepage/ui/StatCard';
import TrendingCourses from '@/components/homepage/ui/TrendingCourses'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Banner/>
      <TopCourses/>
      <StatCard/>
      <LearningTips/>
      <TopInstructor/>
      <TrendingCourses/>
    </div>
  );
}
