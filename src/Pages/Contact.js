import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import config from "../config";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";
import Fox from "../assets/Fox";
import useAlert from '../Hooks/useAlert'
import Alert from "../Components/Alert";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation,setCurrentAnimation] = useState("idle");

  const {alert, showAlert, hideAlert} = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs
      .send(
        config.service_id,
        config.template_id,
        {
          from_name: form.name,
          to_name: "Nirai pandiyan",
          from_email: form.email,
          to_email: "niraipandiyan123_cs@mepcoeng.ac.in",
          message: form.message,
        },
        config.public_key
      )
      .then(() => {
        setIsLoading(false);
        showAlert({show:true, text:'Message sent successfully!', type: 'success'})
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: "", email: "", message: "" });
        })
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        showAlert({show:true, text:'The message has not sent!', type: 'danger'})

        console.log(error);
      });
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-white">Get in touch!</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-gray-200 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="nirai"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-gray-200 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="nirai@gamil.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-gray-200 font-semibold">
            Message For Me
            <textarea
              type="message"
              name="message"
              rows={4}
              className="input"
              placeholder="Let me know how can I help You"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending data" : "Send Message"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
