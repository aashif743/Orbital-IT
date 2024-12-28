import emailjs from "@emailjs/browser";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../Comp/Alert";
import Button from "./Button";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohamed Aashif",
          from_email: form.email,
          to_email: "mhdaashif743@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative container mx-auto mt-5 p-20" id="contact"> 
      {alert.show && <Alert {...alert} />}
  
      {/* Centered Heading */}
      <div className="w-full flex justify-center sm:mb-15 mb-16">
        <h1 className="head-text sm:text-center text-6xl">Get in Touch</h1>
      </div>
  
      {/* Main Content: Form and Contact Details */}
      <div className="flex flex-col lg:flex-row lg:gap-18 gap-16 items-center justify-center">
        {/* Form Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:text-left w-[140%] -mx-14">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 max-w-md"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Sample@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
  
            <Button
              type="submit"
              disabled={loading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
  
        {/* Contact Details Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start sm:text-center lg:text-left gap-5 sm:p-15">
          <h2 className="sm:text-3xl text-2xl font-semibold mb-8">Contact Details</h2>

          <div className="flex flex-col gap-6 max-w-md">
            {/* Email */}
            <div className="flex items-center gap-9">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 sm:text-5xl text-4xl text-center" />
                    <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-400"> info@orbitalitsolutions.com</p>
                    </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-10 p-1">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 sm:text-5xl text-4xl text-center" />
                    <div>
                        <h3 className="font-semibold text-lg">Whatsapp</h3>
                        <p className="text-gray-400">+94 78 785 5743</p>
                    </div>
            </div>

            <div className="flex items-center gap-11 p-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 sm:text-5xl text-4xl text-center" />
                    <div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-gray-400">Balangoda, Srilanka</p>
                    </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
  
  
  
};

export default Contact;