import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from "@/lib/utilts"
import { useRef, useState } from "react";
import emailjs from "emailjs-com"
export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            "service_axtaykd",      // từ EmailJS dashboard
            "template_2eiaubb",       // từ EmailJS dashboard
            formRef.current,
            "syj10uZ5WLBo7nyoD"
        )
            .then(() => {
                alert("Message sent successfully!");
                formRef.current.reset();     // Reset form
            })
            .catch((error) => {
                console.error("Failed to send message:", error);
                alert("Something went wrong. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <section id="contact" className="py-25 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12" onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="emailto:hello@gmail.com"
                                        className="hover:text-primary transition-colors">
                                        nvquyet881065@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+11234567890"
                                        className="hover:text-primary transition-colors">
                                        0326881065
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <a
                                        className="hover:text-primary transition-colors">
                                        Từ Sơn Bắc Ninh
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            {/* <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitch />
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold">Send a Message</h3>
                        <form ref={formRef}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Name..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="abc@gmail.com" />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden 
                                    foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" className={cn("w-full bg-blue-500 flex items-center justify-center gap-2 p-3 rounded-lg cursor-pointer")}>
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={19} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}