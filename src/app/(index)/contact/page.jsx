import BackToTop from "@/components/BackToTop/BackToTop"
import ContactForm from "@/components/contact/ContactForm"

export const metadata = {
  title: 'Contact Us | UCode Clinic',
  description: 'UCode Clinic Contact Us Page',
}

const Contact = () => {
  return (
    <>
      <ContactForm/>
      <BackToTop/>
    </>
  )
}

export default Contact