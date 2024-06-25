import React, { ChangeEvent, FormEvent, useState } from "react";
import { cn } from "../utils/cn";
import MagicButton from "./ui/MagicButton";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";
import { FaClockRotateLeft, FaReply } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../data/variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  fname: string;
  lname: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const successNotify = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 5000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing...",
      success: "Email successfully send",
    });
  };

  const errorNotify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const validateMobile = (mobile: string): boolean => {
    const regex = /^07[1|2|4|5|6|7|8][0-9]{7}$/;
    return regex.test(mobile);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.fname === "") {
      errorNotify("Please enter your first name");
    } else if (formData.lname === "") {
      errorNotify("Please enter your last name");
    } else if (formData.mobile === "") {
      errorNotify("Please enter your mobile number");
    } else if (!validateMobile(formData.mobile)) {
      errorNotify("Please enter valid mobile number");
    } else if (formData.email === "") {
      errorNotify("Please enter your email address");
    } else if (!validateEmail(formData.email)) {
      errorNotify("Please enter valid email address");
    } else if (formData.subject === "") {
      errorNotify("Please enter subject");
    } else if (formData.message === "") {
      errorNotify("Please enter your message");
    } else {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        successNotify();
        setFormData({
          fname: "",
          lname: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        errorNotify(result.error || "Failed to send message");
      }
    }
  };

  return (
    <>
      <div
        className="flex flex-col w-full items-center px-5 lg:px-0 py-20 lg:py-28"
        id="contact"
      >
        <div className="grid lg:grid-cols-2 lg:gap-x-20 justify-start">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className="flex flex-col gap-4 pt-10"
          >
            <h1 className="title">Contact Me</h1>
            <p className="text-justify max-w-sm lg:max-w-xl lg:text-lg">
              Ready to turn your digital dreams into reality? Let&apos;s
              connect! Whether it&apos;s crafting stunning websites, powerful
              mobile apps, or robust software solutions, I&apos;m here to bring
              your vision to life. Drop me a line below, and let&apos;s start
              building something extraordinary together!
            </p>
            <p className="w-full flex justify-between lg:justify-around">
              <span className="flex lg:text-xl font-semibold gap-x-3 items-center">
                <FaReply /> Qiuck Replys
              </span>
              <span className="flex lg:text-xl font-semibold gap-x-3 items-center">
                <FaClockRotateLeft /> 24/7 services
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className="flex justify-center items-center mt-8 lg:mt-0"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col rounded-xl gap-y-4 py-10 px-5 lg:px-10 w-full shadow-input bg-black border-white/[0.2] group-hover:border-slate-700"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <LabelInputContainer>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label>Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <div className="flex lg:px-20">
                <MagicButton title="Send Message" type="submit" />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
