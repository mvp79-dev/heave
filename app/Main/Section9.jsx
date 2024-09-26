import React, { useEffect, useRef, useState, useContext } from "react";
import Accordion from "./Accordion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { TextPlugin, SplitText, ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section9 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionRefs = useRef([]);
  const titleTopRef = useRef();
  const topDescriptionRef = useRef();

  const accordionData = [
    {
      title: "What's your price?",
      content: "We offer packages of flexible sizes and customize solutions that match the scale of your campaign and your company’s budget. At Heave, we are commonly entrusted with managing ad spends ranging from four to six figures by our partners. Get in touch with us to discuss more tailored pricing information once we have a clearer understanding of your company’s specific situation. ",
    },
    {
        title: "What's your guarantee?",
        content: "Heave guarantees a lower aggregate CPM for your campaign compared to average rates on traditional paid ad platforms such as Instagram and Facebook Ads. We are committed to delivering the highest quality services, with measurable results summarized at the end of your campaign. Without such a strong guarantee of performance and transparency, Heave would not be where it is today. ",
    },
    {
        title: "What kind of results can I expect?",
        content: "The results of your campaign will depend on the objectives your business seeks to achieve, whether that’s increasing impressions, website traffic, or conversions. Heave’s track record of fulfilling varied goals, from driving revenue growth to enhancing brand visibility, has solidified our status as a reliable, go-to partner. We place extreme importance on delivering on key metrics and are proud to share tangible case studies. ",
    },
    {
        title: "What kind of brands do you typically work with?",
        content: "Our experience covers a diverse range of brands, from direct-to-consumer startups to Fortune 500 companies, across industries from software to consumer packaged goods. Get in touch with us to discover how we can propel your growth – regardless of what you do or where you are in your journey. ",
    },
    {
        title: "Is there a minimum commitment period?",
        content: "Our services are structured with full flexibility, and some ongoing partnerships have lasted more than a year. While we typically recommend a minimum weeklong commitment period to ensure impact is fully measured, we understand every campaign has its own preferences. Get in touch with us to discuss the most suitable arrangement for your campaign’s specific timeline.  ",
    },
    {
        title: "Is there any work involved for us, once we start working?",
        content: "While Heave manages the entire scope of the campaign, including content development and dissemination, we require some initial input about your company and its objectives to align our efforts with your vision. Depending on your preferences, this may involve receiving your brand’s creative assets and approval for the content we develop. This process has been streamlined to ensure minimal effort is required on your part.",
    },
    {
        title: "How will you communicate with me?",
        content: "After initial email exchanges, we will arrange a call or Zoom meeting to discuss the strategy that best aligns with your company’s unique situation, brand, and objectives. We ensure your team is kept fully informed via email before, during, and after the entire process. Additionally, you will have direct access to our team through our personal phone numbers.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(titleTopRef.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3", delay: 0.25, scrollTrigger: { trigger: titleTopRef.current, start: "top bottom" } });
    gsap.fromTo(topDescriptionRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3", delay: 0.5, scrollTrigger: { trigger: topDescriptionRef.current, start: "top bottom" } });
    accordionRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom"
          }
        }
      );
    });
  }, []);

  return (
    <section className="nine">
      <div className="nine-content">
        <header className="nine-content-texts">
          <h1 className="subheadline white" >Frequently asked questions</h1>
        </header>
        <div className="nine-content-questions">
          {accordionData.map((item, index) => (
            <article ref={(el) => (accordionRefs.current[index] = el)} key={index}>
              <Accordion
                className="accordion"
                index={index}
                isActive={activeIndex === index}
                onToggle={handleAccordionToggle}
                title={item.title}
                content={item.content}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};