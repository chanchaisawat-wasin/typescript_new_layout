import Image from "next/image";
import Navbar from './components/navbar';
import Paragram from './components/paragram';
import Vision from './components/vision';
import Award from './components/award';
import Recommend from './components/recommend';
import Health from './components/health';
import Article from './components/article';
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* start navbar */}

      <Navbar
        img={[
          {
            logo: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_d5a05fd0a9/thumbnail_update_N_Health_d5a05fd0a9.png"
          },
        ]}
        items={[
          {
            label: "แพ็กเกจ และโปรโมชั่น",
            url: "#"
          },
          {
            label: "บริการของเรา",
            url: "#",
          },
          {
            label: "บทความ",
            url: "#",
          },
          {
            label: "ข่าวสาร และกิจกรรม",
            url: "#",
          },
          {
            label: "เกี่ยวกับเรา",
            children: [
              {
                label: "บริษัท",
                url: "#",
              },
              {
                label: "ประวัติ",
                url: "#",
              },
              {
                label: "ผลงาน และการรับรอง",
                url: "#"
              }
            ]
          },
          {
            label: "ติดต่อเรา",
            url: "#",
          }
        ]}
        language={[
          {
            label: "TH",
          },
          {
            label: "EN`"
          }
        ]}
      />

      {/* end nav */}

      {/* start main content */}

      <div className="">

        {/* first content */}
        {/* paragram */}

        <Paragram
          items={[
            {
              url: "https://storage.googleapis.com/nh-dev/2024/6/medium_NH_Tagline_TH_1_fc5315b4ad/medium_NH_Tagline_TH_1_fc5315b4ad.png",
              label: "N Health (เอ็น เฮลท์) เป็นบริษัทในเครือ BDMS ที่ให้บริการด้านการสนับสนุนทางการแพทย์ และธุรกิจโรงพยาบาลให้แก่โรงพยาบาลชั้นนำ ครอบคลุมการให้บริการมากกว่า 80 สาขา ทั้งในประเทศ และต่างประเทศ โดยเรามุ่งมั่นที่จะสร้างความได้เปรียบในการแข่งขันให้แก่โรงพยาบาล และองค์กรด้านสุขภาพของประเทศไทย ด้วยบริการที่มีคุณภาพ ได้แก่ บริการห้องปฏิบัติการขั้นสูง บริการงานปราศจากเชื้อที่มีคุณภาพสูง การบริหารจัดการผ้าโรงพยาบาลแบบครบวงจร บริการวิศวกรรมการแพทย์ที่มีความเชี่ยวชาญ การบริหารซัพพลายเชน และคลังสินค้า บริการขนส่ง รวมถึงตัวแทนจัดจําหน่ายอุปกรณ์และเครื่องมือแพทย์ ที่จะช่วยดูแลผู้คนให้มีคุณภาพชีวิต และสุขภาพที่ดีอย่างยั่งยืนนอกจากนี้ เรายังได้จัดตั้งศูนย์ตรวจสุขภาพ ชื่อว่า N Health กว่า 30 สาขาทั่วประเทศ เพื่อให้เป็นจุดเริ่มต้นของการดูแลสุขภาพที่รวดเร็ว และสะดวกสบาย ภายใต้สโลแกน “Living Healthy Daily – สุขภาพดี ทำได้ทุกที่ มีดีได้ทุกวัน” เพราะเราเชื่อว่าการมีสุขภาพดีนั้น ต้องเริ่มที่การตรวจวิเคราะห์ทางห้องปฏิบัติการ เพื่อให้เข้าใจสภาพปัจจุบันของร่างกายเสียก่อน จึงจะวางแผนดูแล รักษา หรือป้องกันได้อย่างเหมาะสม แตกต่างกันไปในแต่ละบุคคล",
            },
            {
              children: [
                {
                  url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_2_2_c2588ea54b/webp_update_home_first_section_2_2_c2588ea54b.webp"
                },
                {
                  url: "https://storage.googleapis.com/nh-uat-corp/2024/6/webp_update_home_first_section_4_2_99b5ec286b/webp_update_home_first_section_4_2_99b5ec286b.webp"
                }
              ]
            }
          ]} />

        {/* end first content */}

        {/* start vision content */}

        <div className="">
          <Vision
            label={[
              {
                title: "วิสัยทัศน์",
                children: [
                  {
                    label: "ด้วยความมุ่งมั่นสู่การเป็นผู้นำในธุรกิจ"
                  },
                  {
                    label: "ผลิตภัณฑ์ และบริการสุขภาพในอาเซียน"
                  }
                ]
              },
            ]}
            items={[

              {
                cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_1_3654c124f0/thumbnail_update_icon_1_3654c124f0.png",
                imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_1_6f6a7fbbbd/medium_update_vision_1_6f6a7fbbbd.png",
                cardTitle: "บริการตรวจวิเคราะห์ทางการแพทย์"
              },
              {
                cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_2_0379560069/thumbnail_update_icon_2_0379560069.png",
                imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_2_305d216a5c/medium_update_vision_2_305d216a5c.png",
                cardTitle: "บริการเจาะเลือดที่บ้าน",
              },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_3_c22c87afff/thumbnail_update_icon_3_c22c87afff.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_10_ecb1651bc9/medium_update_vision_10_ecb1651bc9.png",
              //   cardTitle: "บริการงานปราศจากเชื้อ"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_4_a0b655a455/thumbnail_update_icon_4_a0b655a455.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_5_1df4f44315/medium_update_vision_5_1df4f44315.png",
              //   cardTitle: "บริการบริหารจัดการผ้าโรงพยาบาลแบบครบวงจร"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_5_08c5e4c6b9/thumbnail_update_icon_5_08c5e4c6b9.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_8_c24fa41a49/medium_update_vision_8_c24fa41a49.png",
              //   cardTitle: "Biomedical Engineering Services"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_6_4fe97d104d/thumbnail_update_icon_6_4fe97d104d.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_9_9cfc3895f7/medium_update_vision_9_9cfc3895f7.png",
              //   cardTitle: "บริการบริหารซัพพลายเชน และคลังสินค้า"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_7_656806a167/thumbnail_update_icon_7_656806a167.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_3_93bfcb61b8/thumbnail_update_vision_3_93bfcb61b8.png",
              //   cardTitle: "บริการขนส่งทางการแพทย์"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_8_9ccececde7/thumbnail_update_icon_8_9ccececde7.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_7_21571f0b16/thumbnail_update_vision_7_21571f0b16.png",
              //   cardTitle: "ตัวแทนจำหน่ายเวชภัณฑ์ทางการแพทย์"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_9_3015c572b3/thumbnail_update_icon_9_3015c572b3.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_vision_6_5a066fb8af/thumbnail_update_vision_6_5a066fb8af.png",
              //   cardTitle: "ตัวแทนจำหน่ายอุปกรณ์ทางการแพทย์"
              // },
              // {
              //   cardIcon: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_icon_10_fc10bdb75e/thumbnail_update_icon_10_fc10bdb75e.png",
              //   imageHover: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_vision_4_4f653ee46c/medium_update_vision_4_4f653ee46c.png",
              //   cardTitle: "ศูนย์ตรวจสุขภาพ"
              // },

            ]} />
        </div>

        {/* end of vision content */}

        {/* start Reward content */}

        <div className="relative h-full">
          <Award
            label={[
              {
                label: "รางวัล และการรับรอง",
              },
            ]}
            items={[
              {
                imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_2_16a440328b/thumbnail_update_2_16a440328b.png",
              },
              {
                imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_no_bg_08b39f5dcc/medium_update_no_bg_08b39f5dcc.png",
              },
              {
                imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_laboratory_modified_837b18a9ff/thumbnail_update_laboratory_modified_837b18a9ff.png",
              },
              {
                imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_LOGO_Q_gold_163d9d1121/thumbnail_update_LOGO_Q_gold_163d9d1121.png",
              },
              {
                imgURL: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_univercity_73f0f9d4ea/thumbnail_update_univercity_73f0f9d4ea.png",
              }
            ]} />
        </div>

        {/* end of Reward content */}

        {/* start recommend service content */}

        <div className="h-full">
          <Recommend
            items={[{
              title: [
                {
                  title: "บริการแนะนำ",
                  label: "N Health (เอ็น เฮลท์) มีโปรแกรมตรวจสุขภาพที่น่าสนใจมากมายที่จะทำให้คุณรู้จักร่างกายของตนเองอย่างละเอียด และวางแผนการกิน การออกกำลังกาย การทานวิตามิน ไปจนถึงการนอนได้อย่างมีประสิทธิภาพ"
                }
              ]
            },
            {
              image: [
                {
                  label: "ลูกค้าบุคคล",
                  url: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_asian_family_enjoy_eating_breakfast_together_kitchen_room_home_3dfc20d4e3/medium_update_asian_family_enjoy_eating_breakfast_together_kitchen_room_home_3dfc20d4e3.png"
                },
                {
                  label: "ลูกค้าองค์กร",
                  url: "https://storage.googleapis.com/nh-uat-corp/2024/6/medium_update_home_1_fd210937c2/medium_update_home_1_fd210937c2.png"
                }
              ]
            }
            ]} />
        </div>

        {/* end of recommend service content */}

        {/* start health program */}

        <div className="">
          <Health
            items={[{
              label: "ค้นหาโปรแกรมตรวจสุขภาพ"
            }]}
            card={[
              {
                label: "โปรแกรมสุขภาพทั่วไป",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_heart_8b1060b1aa/thumbnail_update_heart_8b1060b1aa.png",
                css: "bg-[#FDEAEB]"
              },
              {
                label: "โปรแกรมสุขภาพสำหรับผู้ชาย",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_men_health_99542b71c9/thumbnail_update_men_health_99542b71c9.png",
                css: "bg-[#E6EBF4]"
              },
              {
                label: "โปรแกรมตรวจสุขภาพสำหรับผู้หญิง",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_women_health_158bc86b63/thumbnail_update_women_health_158bc86b63.png",
                css: "bg-[#F1F5F9]"
              },
              {
                label: "โปรแกรมพันธุกรรม",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_genetic_checks_72b53d3ed5/thumbnail_update_genetic_checks_72b53d3ed5.png",
                css: "bg-[#EAF2EB]"
              },

              {
                label: "โปรแกรมโภชนาการ",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_hamburger_b09866dc58/thumbnail_update_hamburger_b09866dc58.png",
                css: "bg-[#FDEEE6]"
              },

              {
                label: "โปรแกรมตรวจสุขภาพทั้งหมด",
                url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_all_health_cehck_2cf450ff5a/thumbnail_update_all_health_cehck_2cf450ff5a.png",
                css: "bg-[#FFF9EA]"
              }
            ]}
            lastLabel={[
              {
                label: "โปรแกรมตรวจสุขภาพทั้งหมด",
              },
            ]} />
        </div>

        {/* end of health program */}

        {/* start review content */}

        {/* end of review content */}

        {/* start article content */}

        <div className="bg-white">
          <div className="mx-auto px-6 py-6  w-full">
            <div className="flex flex-col gap-12">
              <div className="font-helvethaica-bd text-[3.5rem]">บทความเกี่ยวกับสุขภาพ</div>
              <div className="grid sm:grid-cols-2">
                <div>
                  <Article
                    items={
                      [
                        {
                          "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_4_d4280ca512/update_branch_4_d4280ca512.png",
                          "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
                          "yearInAvatar": "22 Jun 2024",
                          "avatarName": "Dr. Prapat Samitisatian",
                        },
                        {
                          "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_chumpon_1a86549cf3/update_branch_chumpon_1a86549cf3.jpg",
                          "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_aiony_haust_90d0fadf62/update_aiony_haust_90d0fadf62.jpg",
                          "yearInAvatar": "20 Jun 2024",
                          "avatarName": "Dr. Jenifer Walker",
                        },
                        {
                          "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_team_medical_personal_f8503fb116/update_team_medical_personal_f8503fb116.png",
                          "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
                          "yearInAvatar": "20 Jun 2024",
                          "avatarName": "Dr. Prapat Samitisatian",
                        }
                      ]
                    } />
                </div>
                <div>
                  <Article
                    items={[
                      {
                        "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_team_medical_personal_f8503fb116/update_team_medical_personal_f8503fb116.png",
                        "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
                        "yearInAvatar": "20 Jun 2024",
                        "avatarName": "Dr. Prapat Samitisatian",
                      },
                      {
                        "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_4_d4280ca512/update_branch_4_d4280ca512.png",
                        "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_christopher_campbell_44eda4ee90/update_christopher_campbell_44eda4ee90.jpg",
                        "yearInAvatar": "22 Jun 2024",
                        "avatarName": "Dr. Prapat Samitisatian",
                      },
                      {
                        "carouselURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_branch_chumpon_1a86549cf3/update_branch_chumpon_1a86549cf3.jpg",
                        "avatarURL": "https://storage.googleapis.com/nh-uat-corp/2024/6/update_aiony_haust_90d0fadf62/update_aiony_haust_90d0fadf62.jpg",
                        "yearInAvatar": "20 Jun 2024",
                        "avatarName": "Dr. Jenifer Walker",
                      }
                    ]} />
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

      <Footer
        items={[
          {
            url: "https://storage.googleapis.com/nh-uat-corp/2024/6/thumbnail_update_N_Health_White_7944d37805/thumbnail_update_N_Health_White_7944d37805.png",
            children: [
              {
                label: <>
                  บริษัท เนชั่นแนล เฮลท์แคร์ ซิสเท็มส์ จำกัด <br />
                  2301/2 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร <br />
                  10310
                </>,
              }
            ]
          },
          {
            label: "แพ็กเกจ และโปรโมชั่น",
            children: [
              {
                label: "โปรแกรมตรวจสุขภาพทั่วไป",
                url: "#"
              },
              {
                label: "โปรแกรมตรวจสุขภาพสำหรับผู้หญิง",
                url: "#"
              },
              {
                label: "โปรแกรมตรวจสุขภาพสำหรับผู้ชาย",
                url: "#"
              },
              {
                label: "โปรแกรมตรวจพันธุกรรม",
                url: "#"
              },
              {
                label: "โปรแกรมตรวจโภชนาการ",
                url: "#"
              },

            ]
          },
          {
            label: "บริการของเรา",
            children: [
              {
                label: "ภาพรวมบริษัท",
                url: "#"
              },
              {
                label: "การบริการ",
                url: "#"
              },
            ]
          },
          {
            label: "บริษัท",
            children: [
              {
                label: "เกี่ยวกับเรา",
                url: "#"
              },
              {
                label: "บทความ",
                url: "#"
              },
              {
                label: "ข่าวสาร และกิจกรรม",
                url: "#"
              },
              {
                label: "ติดต่อเรา",
                url: "#"
              }
            ]
          },
          {
            label: "นโยบายความเป็นส่วนตัว",
            children: [
              {
                label: "เงื่อนไขการขอข้อมูล",
                url: "#"
              },
              {
                label: "นโยบายความเป็นส่วนตัว",
                url: "#"
              },
              {
                label: "นโยบายคุกกี้",
                url: "#"
              }
            ]
          },
        ]} />

      {/* end footer */}
    </>
  );
}
