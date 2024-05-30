
import ContactForm from "@/components/contact-form";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";


const ContactPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <ContactForm />
            </ContainerPage>
        </>
    )
}

export default ContactPage;