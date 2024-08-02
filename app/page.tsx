'use client'
import Navbar from './components/navbar';
import Paragram from './components/paragram';
import Vision from './components/vision';
import Award from './components/award';
import Recommend from './components/recommend';
import Health from './components/health';
import Review from './components/review';
import Article from './components/article';
import Footer from "./components/footer";
import React, { ReactElement, useEffect, useState, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios';

export default function Home() {

  const [navImg, setNavImg] = useState([]);
  const [navItems, setNavItems] = useState([]);
  const [NavLanguage, setNavLanguage] = useState([]);

  const [paragram, setParagram] = useState([]);
  const [visionLabel, setVisionLabel] = useState([]);
  const [visionItems, setVisionItems] = useState([]);
  const [award, setAward] = useState([]);
  const [recommend, setRecommend] = useState([]);

  const [healthItems, setHealthItems] = useState([]);
  const [healthCard, setHealthCard] = useState([]);
  const [healthLabel, setHealthLabel] = useState([]);

  const [reviewTitle, setReviewTitle] = useState([]);
  const [reviewItems, setReviewItems] = useState([]);

  const [artCard1, setArtCard1] = useState([]);
  const [artTitle1, setArtTitle1] = useState([]);
  const [artLabel1, setArtLabel1] = useState([]);
  const [artItems1, setArtItems1] = useState([]);

  const [articleTitle_2, setArticleTitle_2] = useState([]);
  const [articleItems_2, setArticleItems_2] = useState([]);
  const [articleCard_2, setArticleCard_2] = useState([]);
  const [articleLabel_2, setArticleLabel_2] = useState([]);

  const [footer, setFooter] = useState([]);

  const fetchNav = async () => {
    try {
      const response = await axios.get("http://localhost:5000/nav");
      setNavImg(response.data.nav.img);
      setNavItems(response.data.nav.items);
      setNavLanguage(response.data.nav.language);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchParagram = async () => {
    try {
      const response = await axios.get("http://localhost:5000/paragram");
      setParagram(response.data.paragram);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchVision = async () => {
    try {
      const response = await axios.get("http://localhost:5000/vision");
      setVisionItems(response.data.vision.items);
      setVisionLabel(response.data.vision.label);
      // console.log(response.data.vision);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchAward = async () => {
    try {
      const response = await axios.get("http://localhost:5000/award");
      setAward(response.data.award);
      // console.log(response.data.award);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchRecommend = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recommend");
      setRecommend(response.data.recommend);
      // console.log(response.data.recommend);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchHealth = async () => {
    try {
      const response = await axios.get("http://localhost:5000/health");
      setHealthCard(response.data.health.card);
      setHealthItems(response.data.health.items);
      setHealthLabel(response.data.health.label)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchReview = async () => {
    try {
      const response = await axios.get("http://localhost:5000/review");
      setReviewItems(response.data.review.items);
      setReviewTitle(response.data.review.title);
      // console.log(response.data.review.items)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchArticle1 = useCallback(async () => {

    const res = await axios.get("http://localhost:5000/article1");
    setArtCard1(res.data.article1.card);
    setArtItems1(res.data.article1.items);
    setArtLabel1(res.data.article1.label);
    setArtTitle1(res.data.article1.title);
    console.log(res.data.article1.card)
  }, []);

  const fetchFooter = async () => {
    try {
      const response = await axios.get("http://localhost:5000/footer");
      setFooter(response.data.items);
      // console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNav();
    fetchParagram();
    fetchVision();
    fetchAward();
    fetchRecommend();
    fetchHealth();
    fetchReview();
    fetchArticle1();
    fetchFooter();
  }, [])

  return (
    <>
      {/* start navbar */}

      <Navbar
        img={navImg}
        items={navItems}
        language={NavLanguage}
      />

      {/* end nav */}

      {/* start main content */}

      <div className="">

        {/* first content */}
        {/* paragram */}

        <Paragram
          items={paragram} />

        {/* end first content */}

        {/* start vision content */}

        <div className="">
          <Vision items={visionItems}
            label={visionLabel} />
        </div>

        {/* end of vision content */}

        {/* start Reward content */}

        <Award award={award} />

        {/* end of Reward content */}

        {/* start recommend service content */}

        <Recommend items={recommend} />

        {/* end of recommend service content */}

        {/* start health program */}

        <Health
          items={healthItems}
          card={healthCard}
          label={healthLabel} />

        {/* end of health program */}

        {/* start review content */}

        <Review
          items={reviewItems}
          title={reviewTitle} />

        {/* end of review content */}

        {/* start article content */}

        <div className="bg-white">
          <div className="max-w-screen-xl w-full px-6 py-6 mx-auto">
            <div className="flex flex-col gap-12">
              <div className="font-helvethaica-bd text-[3.5rem]">บทความเกี่ยวกับสุขภาพ</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {artCard1.map((val,i) => {
                    return(<>{val}</>)
                  })}
                  {/* <Article
                    title={artTitle1}
                    items={artItems1}
                    card={artCard1}
                    label={artLabel1} /> */}
                </div>
                <div>
                  {/* <Article
                    title={articleTitle_2}
                    items={articleItems_2}
                    card={articleCard_2}
                    label={articleLabel_2} /> */}
                </div>
              </div>
              <div className="font-helvethaica-bd text-[1.5rem] pb-[4rem] w-fit">
                <div className="border py-[0.3rem] px-[1.5rem] rounded-full">
                  ดูบทความทั้งหมด
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end of article content */}

      </div>

      {/* end main content */}

      {/* start footer */}

      <Footer items={footer} />

      {/* end footer */}
    </>
  );
}
