import { constants } from "buffer";
import { GetServerSideProps } from "next";
import { Key, Component } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { API_URL } = process.env;
    const baseUrl = `${API_URL}/api/posts?populate=${2}`;
    const baseUrlCat = `${API_URL}/api/categories?populate=${2}`;
    const res = await fetch(baseUrl);
    const res2 = await fetch(baseUrlCat);
    const data = await res.json();
    const dataCat = await res2.json();
    console.log("contex")
    return {
      props: {
        postss: data,
        categoriess: dataCat,
      },
    };
  };

export default function Handle({
    categoriess,
  }: {
    categoriess: any;
  }) {

    return (
    <div
      className="flex items-center py-2 overflow-x-scroll bg-red-500 scrollbar-none w-96 h-96 "
     // id="scrollContainerId"
    >
      {/* {categoriess  &&
         categoriess.data.map((data: { id: Key | null | undefined; }) => ( */}
      
      <div>
              
            {/* <Collection data={data} key={data.id} /> */}
           <div className="text-lg overflow-clip ">{categoriess} 
           </div> 
          </div>
        {/* // ))} */}
    </div>
  );
}

// {"id":2,"attributes":{"title":"واقعیت افزوده","slug":"augmented-reality","createdAt":"2022-01-26T19:51:16.063Z","updatedAt":"2022-01-26T19:51:17.178Z","publishedAt":"2022-01-26T19:51:17.174Z","image":{"data":{"id":13,"attributes":{"name":"js-react-vue.jpg","alternativeText":"js-react-vue.jpg","caption":"js-react-vue.jpg","width":680,"height":340,"formats":{"thumbnail":{"name":"thumbnail_js-react-vue.jpg","hash":"thumbnail_js_react_vue_b20be69a4e","ext":".jpg","mime":"image/jpeg","width":245,"height":123,"size":7.88,"path":null,"url":"/uploads/thumbnail_js_react_vue_b20be69a4e.jpg"},"small":{"name":"small_js-react-vue.jpg","hash":"small_js_react_vue_b20be69a4e","ext":".jpg","mime":"image/jpeg","width":500,"height":250,"size":18.67,"path":null,"url":"/uploads/small_js_react_vue_b20be69a4e.jpg"}},"hash":"js_react_vue_b20be69a4e","ext":".jpg","mime":"image/jpeg","size":22.39,"url":"/uploads/js_react_vue_b20be69a4e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-01-26T19:51:11.574Z","updatedAt":"2022-01-26T19:51:11.574Z"}}}}}
