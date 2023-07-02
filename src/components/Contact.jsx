import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import contractGif from "../assets/contact-img.svg";

const Contract = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="hero min-h-screen mt-10">
        <div className="mx-0 md:mx-24 hero-content gap-48 grid grid-cols-1 md:grid-cols-2">
          <div className="ml-5 md:ml-0">
            <h1
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-5xl text-transparent mb-9 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
              Contact With Me
            </h1>
            <img
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="w-72 h-72 lg:w-96 lg:h-96"
              src={contractGif}
              alt=""
            />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="1500"
            className="card mb-80 ml-5 md:ml-0 md:mb-0 w-80 lg:w-96 h-[60%] md:h-full shadow-2xl bg-gradient-to-r from-pink-900 via-indigo-800 to-purple-800">
            <form ref={form} onSubmit={sendEmail}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email_id"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    className="textarea textarea-bordered h-28"
                  />
                </div>
                <input
                  type="submit"
                  value={isSending ? "Sending..." : "Send"}
                  disabled={isSending}
                  className="p-4 ml-2 cursor-pointer font-semibold bg-gradient-to-r from-pink-700 to-indigo-600 rounded-xl hover:scale-[1.1] mt-3 transition"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster
        className="bg-[#0a0a0a]"
        position="top-center"
        reverseOrder={false}
      />{" "}
    </div>
  );
};

export default Contract;
