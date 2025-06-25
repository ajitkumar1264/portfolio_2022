import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main1 from "../components/Main1";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ajitkumar Vaghela | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Ajitkumar Vaghela – a passionate software developer specializing in React, Next.js, and modern web development."
        />
        <meta
          name="keywords"
          content="Ajitkumar Vaghela, software developer, frontend developer, portfolio, React, Next.js, Ahmedabad developer"
        />
        <meta name="author" content="Ajitkumar Vaghela" />
        {/* Open Graph / Social media preview */}
        <meta property="og:title" content="Ajitkumar Vaghela | Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Ajitkumar Vaghela, a developer from Ahmedabad passionate about building modern web applications."
        />
        <meta property="og:image" content="/preview.jpg" />{" "}
        {/* Replace with actual image */}
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Main1 />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
