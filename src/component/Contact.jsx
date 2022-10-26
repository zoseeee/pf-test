import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="content">
          <div className="profile">
            <img
              src={process.env.PUBLIC_URL + "/assets/image/profile.png"}
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/image/profile.png"}
              alt=""
            />
          </div>
          <AnimateSharedLayout>
            <motion.ul>
              {items.map((item) => (
                <Item key={item} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
      </div>
    </section>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen}>
      <motion.p className="title">01 LEE JEONG EUN</motion.p>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        asperiores quibusdam dolorum animi molestiae tenetur est autem
        repudiandae aperiam, illum soluta magnam, non aliquam unde officia
        inventore excepturi in laborum.
      </p>
    </motion.div>
  );
}

const items = [
  { id: 1, title: "Hi, I am..." },
  { id: 2, title: "Education" },
  { id: 3, title: "Skills" },
  { id: 4, title: "Contact" },
];
