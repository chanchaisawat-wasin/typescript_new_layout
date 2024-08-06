import Award from './components/award';
import Footer from './components/footer';
import Health from './components/health';
import Navbar from './components/navbar';
import axios from 'axios';
import Paragram from './components/paragram';
import Recommend from './components/recommend';
import Review from './components/review';
import Vision from './components/vision';

export default async function Home() {


  const fetchNav = async () => {
    try {
      const response = await axios.get("http://localhost:5000/nav");
      return response.data
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchParagram = async () => {
    try {
      const response = await axios.get("http://localhost:5000/paragram");
      return response.data
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchVision = async () => {
    try {
      const response = await axios.get("http://localhost:5000/vision");
      return response.data

      // console.log(response.data.vision);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchAward = async () => {
    try {
      const response = await axios.get("http://localhost:5000/award");
      return response.data

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchRecommend = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recommend");
      return response.data

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchHealth = async () => {
    try {
      const response = await axios.get("http://localhost:5000/health");
      return response.data

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchReview = async () => {
    try {
      const response = await axios.get("http://localhost:5000/review");
      return response.data

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchArticle1 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/article1");
      return response.data

    } catch (error) {
      console.error("Error fetching data:", error)
    }
 

  };

  // const fetchArt2 = async () => {
  //   const res = await axios.get("http://localhost:5000/article2");
  //   setArtCard2(res.data.article2.card);
  //   setArtItems2(res.data.article2.items);
  //   setArtLab2(res.data.article2.label);
  //   setArtTitle2(res.data.article2.title);
  // },[];

  const fetchFooter = async () => {
    try {
      const response = await axios.get("http://localhost:5000/footer");
      return response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const navData =  await fetchNav()
  const paragramData =  await fetchParagram()
  const visionData =  await fetchVision()
  const awardData =  await fetchAward()
  const recData =  await fetchRecommend()
  const hData =  await fetchHealth()
  const rvData =  await fetchReview()
  const article1Data =  await fetchArticle1()
  const footerData =  await fetchFooter()

  // console.log(visionData)
  // console.log(awardData)

  const navImg = navData?.nav?.img;
  const navItems = navData?.nav?.items;
  const NavLanguage =  navData?.nav?.language;
  const paragram = paragramData?.paragram
  const visionItems = visionData?.vision?.items;
  const visionLabel = visionData?.vision?.label;
  const award = awardData?.award;
  const recommend = recData?.recommend;
  const healthItems = hData?.health?.items;
  const healthCard = hData?.health?.card;
  const healthLabel = hData?.health?.label;
  const reviewItems = rvData?.review?.items;
  const reviewTitle =  rvData?.review?.item;
  const footer = footerData?.items;
  // console.log(navImg)
  // console.log(visionItems)
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
