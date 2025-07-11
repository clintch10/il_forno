import BranchesSection from "../sections/BranchesSection"
import ContactFormSection from "../sections/ContactFormSection"
import ContactHeroSection from "../sections/ContactHeroSection"
import FAQSection from "../sections/FAQSection"

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <FAQSection />
      <ContactFormSection />
      <BranchesSection />
    </>
  )
}

export default ContactPage