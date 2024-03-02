import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React E-Commerce",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "A React e-commerce app delivers a seamless online shopping experience, leveraging React's component-based architecture for modular design. With dynamic updates, efficient state management, and easy scalability, it ensures a user-friendly interface and streamlined shopping process.",
  },
  {
    id: 2,
    title: "MERN Stack Blog App",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "A MERN stack blog app utilizes MongoDB, Express.js, React, and Node.js to create a robust and full-stack blogging platform. Seamlessly integrating a NoSQL database, server-side logic, and React's dynamic front-end, it enables users to publish, manage, and interact with content, delivering a modern and responsive blogging experience.",
  },
  {
    id: 3,
    title: "Vanilla JS App(s)",
    img: "https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=",
    desc: "has created much more samall things and apps using JS",
  },
  {
    id: 4,
    title: "MERN Hotel booking App",
    img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A MERN stack hotel booking app leverages MongoDB, Express.js, React, and Node.js to offer a comprehensive platform for users to browse, book, and manage hotel reservations. With real-time data updates, secure user authentication, and a dynamic React front-end, it ensures a seamless and engaging experience for travelers and hotel administrators alike.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  // scrollYProgress is a value that represents the progress of the scroll based on the useScroll hook. It ranges from 0 to 1, indicating how far the user has scrolled through the target element.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
