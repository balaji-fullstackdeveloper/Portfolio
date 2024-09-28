import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { FaDownload } from "react-icons/fa";
function Hero() {
  const PDF_URL = "https://main--portfolio-balaji-fullstackdeveloper.netlify.app/Balaji_Resume.pdf";
  const downloadFileAtURL = () => {
    console.log("click");
    const filename = PDF_URL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = PDF_URL;
    aTag.download = filename;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <div>
      {" "}
      <section id="home" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/images/avatar-1.jpg"
                  width={40}
                  height={40}
                  alt="Henry clark portrait"
                  className="img-cover"
                />
              </figure>

              <div className="flex bg-zinc-900 items-center gap-1.5   tracking-wide animated-text">
                I'am <span></span>
              </div>
            </div>

            <h2 className="headline-1  max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>

            <div className="flex items-center gap-3">
              <button className="btn btn-primary" onClick={downloadFileAtURL}>
                Download CV
                <FaDownload />
              </button>

              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/images/balaji-photo-png.png"
                width={656}
                height={800}
                alt="Henry Clark"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default Hero;
