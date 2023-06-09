import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="md:h-screen flex flex-col justify-center max-md:py-[70px] items-center"
    >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="flex flex-col items-start">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">Contact</p>
        <form action="https://getform.io/f/d7c637a8-6b7a-4c65-8762-1d04d4bf56c6" method="POST"
          id="form"
          autocomplete="off"
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Message me"
            className="h-60 "
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
