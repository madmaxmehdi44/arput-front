import {
  BellIcon,
  ChatAltIcon,
  ChatIcon,
  CubeIcon,
  EyeIcon,
  FilmIcon,
  GlobeIcon,
  MapIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import { useEffect, useState } from "react";
import Collection from "../components/Collection";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import RecommendedList from "../components/RecommendedList";
import VideoContainer from "../components/VideoContainer";
import fetch from "isomorphic-unfetch";
import { GetServerSideProps } from "next";
import { TimelineLite, gsap } from "gsap";
// import { WheelEvent } from "events"
import Link from "next/link";
import FirstPost from "./posts/first-post";
import Handle from "./posts/[...slug]";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API_URL } = process.env;
  const baseUrl = `${API_URL}/api/posts?populate=*`;
  const baseUrlCat = `${API_URL}/api/categories?populate=*`;
  const res = await fetch(baseUrl);
  const res2 = await fetch(baseUrlCat);
  const data = await res.json();
  const dataCat = await res2.json();

  return {
    props: {
      posts: data,
      categories: dataCat,
    },
  };
};

// const MyButton = React.forwardRef(({ onClick, href }, ref) => {
//   return (
//     <a href={href} onClick={onClick} ref={ref}>
//       Click Me
//     </a>
//   );
// });

export default function Home({
  posts,
  categories,
}: {
  posts: any;
  categories: any;
}): JSX.Element {
  gsap.registerPlugin();

  const [isImage, setImage] = useState({
    name: posts.data[0].attributes.title,
    imageSrc:
      posts.data[0].attributes.video.data &&
      process.env.API_URL + posts.data[0].attributes.video.data.attributes.url,
  });
  // console.log(
  //   "Home From 1: to loading Initit Image: " +
  //     process.env.API_URL +
  //     posts.data[0].attributes.image.data.attributes.url
  // );
  // console.log(posts.data[0].attributes.image.data[0].attributes.name);
  const tl = new TimelineLite({ delay: 0.3 });
  const selectedItemRecommended = useState(0);

  useEffect(() => {
    const scrollContainerId = document.querySelector("#scrollContainerId");
    scrollContainerId?.addEventListener(
      "wheel",
      (e) => {
        console.log(event);

        scrollContainerId.scrollLeft += (e as WheelEvent).deltaY;
      },
      { passive: true }
    );

    tl.from(
      "#logo",
      { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 1.5 },
      "Start"
    )
      .from(
        "#searchBox",
        { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 0.5 },
        "Start"
      )
      .from(
        "#profileContainer",
        { x: -50, opacity: 0, ease: "back.out(1.7)", duration: 0.5 },
        "Start"
      )
      .from(
        "#leftMenu div",
        {
          xPercent: -100,
          opacity: 0,
          _stagger: 0.03,
          get stagger() {
            return this._stagger;
          },
          set stagger(value) {
            this._stagger = value;
          },
          ease: "back.out(1.7)",
          duration: 0.5,
        },
        "Start"
      );
  }, []);

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div
      className="flex flex-col w-screen h-screen overflow-hidden bg-mainBg"
      data-theme="cupcake"
    >
      <Head>
        <title>تیم آرپوت</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <MainModal /> */}
      <Header />
      {/* <Handle categories /> */}
      {/* {posts.data.map(({ id, attributes }: any) => {
        <div key={id}>
          {attributes.title}

          {console.log("Imagelink: " + attributes)}
        </div>;
      })} */}
      {/* MainContainer */}
      <div className="flex w-full h-[calc(100%-80px)] overflow-hidden">
        {/* Left Menu */}
        <div
          id="leftMenu"
          className="z-10 sm:w-[60px] min-w-[60px] md:w-[10%] h-full flex flex-col items-center justify-evenly"
        >
          {/* <FirstPost /> */}
          <MenuItem
            icon={
              <MapIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="posts/first-post"
            name="Home"
          />
          <MenuItem
            icon={
              <EyeIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="auth/login"
            name="Login"
          />
          <MenuItem
            icon={
              <FilmIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="videos/"
            name="Videos"
          />
          <MenuItem
            icon={
              <CubeIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="auth/login"
            name="Home"
          />
          <MenuItem
            icon={
              <ChatAltIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="posts/first-post"
            name="Home"
          />
          <MenuItem
            icon={
              <GlobeIcon className="hover:text-textColor w-[40px] h-[40px]" />
            }
            urlPath="
            posts/first-post"
            name="Home"
          />
        </div>

        {/* Main Container */}
        <div className="sm:w-[calc(100%-60px)] md:w-[90%] h-full">
          {/* Top Section */}
          <div className=" w-full h-[72%] grid max-h-[480px] bg-searchBg grid-cols-3 p-0.5 gap-x-0.5">
            {/* Video Container */}
            <div className="relative items-start justify-center p-0 overflow-hidden md:col-span-2 sm:col-span-6">
              <VideoContainer data={isImage} />
            </div>
            {/* Recommended List */}
            <div className="overflow-y-auto bg-searchBg text-textColor md:col-span-1 sm:col-span-6 scrollbar scrollbar-thin scrollbar-thumb-gray-800">
              <div className="sticky -top-0.5 w-full">
                <p className="text-textColor justify-center items-center bg-gray-800 relative text-[18px] font-bold my-2 px-2 text-right ">
                  نمونه کارها
                </p>
              </div>
              {posts.data &&
                posts.data.map((data: any) => (
                  <div
                    key={data.id}
                    onClick={() => {
                      console.log(
                        "from Index -> Recommended Component => " +
                          data.attributes.video
                      );
                      setImage({
                        name: data.attributes.title,
                        imageSrc:
                          data.attributes.video.data &&
                          process.env.API_URL +
                            data.attributes.video.data.attributes.url,
                      });
                    }}
                  >
                    <RecommendedList data={data} key={data.id} />
                  </div>
                ))}
            </div>
          </div>
          {/* Bottom Section */}
          <div dir="rtl" className="w-full h-[28%]">
            <div
              className="flex items-center py-2 overflow-x-scroll scrollbar-none "
              id="scrollContainerId"
            >
              {categories.data &&
                categories.data.map((data: any) => (
                  <div>
                    <Collection data={data} key={data.id} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
