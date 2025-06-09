import HeroSection from '../sections/HeroSection'
import AchievementSection from '../sections/AchievementSection'
import DownloadSection from '../sections/DownloadSection'
import MenuSection from '../sections/MenuSection'
import VideoSection from '../sections/VideoSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <MenuSection />
            <AchievementSection />
            <VideoSection />
            <DownloadSection />
        </>
    )
}

export default HomePage