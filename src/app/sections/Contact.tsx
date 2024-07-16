"use client";

import Input from "@/components/Input";
import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import emailjs from "@emailjs/browser";
import { OrbitProgress } from "react-loading-indicators";

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedName, setSubmittedName] = useState<string>("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmissionError, setIsSubmissionError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFocus = (field: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (name === "email" && value !== "" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    let formIsValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    for (const key in inputValues) {
      if (inputValues[key as keyof typeof inputValues].trim() === "") {
        formIsValid = false;
        newErrors[
          key as keyof typeof inputValues
        ] = `Please enter your ${key}.`;
      }
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        const serviceId = "service_idq317e";
        const templateId = "template_z8nv6b8";
        const publicKey = "TPismCr4itYNIZxe5";

        const templateParams = {
          from_name: inputValues.name,
          message: inputValues.message,
          reply_to: inputValues.email,
        };

        await emailjs.send(serviceId, templateId, templateParams, {
          publicKey,
        });
        setSubmittedName(inputValues.name);
        setIsSubmitted(true);
        setIsSubmissionError(false);
        setInputValues({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Failed to send message:", error);
        setIsSubmissionError(true);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleCloseMessage = () => {
    setIsSubmitted(false);
    setIsSubmissionError(false);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 bg-primary text-white flex justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl xxs:text-4xl md:text-5xl text-center text-gradient uppercase font-bold pb-28">
          Contact Me
        </h2>
        <div className="w-full max-w-6xl">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              <Input
                type="text"
                name="name"
                label="NAME *"
                value={inputValues.name}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                type="email"
                name="email"
                label="EMAIL *"
                value={inputValues.email}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <Input
              type="textarea"
              name="message"
              label="MESSAGE *"
              value={inputValues.message}
              rows={11}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.message}
            />
            {(isSubmitted || isSubmissionError) && (
              <div className="relative -mt-6 bg-secondary p-3 text-secondary font-light text-center rounded flex justify-between items-start gap-2">
                <div className="flex-grow">
                  {isSubmitted && (
                    <p>
                      Hi {submittedName}, your message has been sent
                      successfully!
                    </p>
                  )}
                  {isSubmissionError && (
                    <p>
                      Sorry {submittedName}, there was an issue sending your
                      message. Please try again later!
                    </p>
                  )}
                </div>
                <div className="w-6 h-6">
                  <button
                    onClick={handleCloseMessage}
                    className="text-lg font-bold text-white bg-[#17D397] rounded-full w-6 h-6 flex items-center justify-center hover:shadow-mint-glow transition duration-300"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            <button
              type="submit"
              className={`self-center mt-10 px-12 py-4 border-2 border-gradient uppercase transition duration-300 flex items-center justify-center ${
                loading
                  ? "bg-mint text-darker font-semibold shadow-mint-glow"
                  : "text-primary hover:bg-mint hover:text-darker hover:font-semibold hover:shadow-mint-glow"
              }`}
            >
              <div
                className={`h-6 w-36 flex items-center justify-center transition-gap duration-300 ${
                  loading ? "gap-2" : "gap-0"
                }`}
              >
                {loading && <OrbitProgress size="small" color="#000" />}
                <span
                  className={`transition-ml duration-300 ${
                    loading ? "ml-2" : "ml-0"
                  }`}
                >
                  {loading ? "Sending" : "Send Message"}
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
