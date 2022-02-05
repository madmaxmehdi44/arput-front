import { CogIcon, PlayIcon } from "@heroicons/react/solid";

function OurTeam(data: any): JSX.Element {
  const post = data.data.attributes;
  const title = post.title;
  const userName = "مهدی مینایی ";
  const publishedAt = post.publishedAt;
  const imageUrl =
    post.image.data &&
    process.env.API_URL + post.image.data.attributes.url;
  return (
    // <!-- Container for demo purpose -->
    <div className="container px-4 py-12 mx-auto my-12">
    
      {/* <!-- Section: Design Block --> */}
      <section className="mb-20 text-center text-gray-900">
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Meet our team</h2>
            <p className="mb-12 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quae aliquid iure quam itaque. Molestias harum aut
              possimus adipisci, illum alias impedit odit incidunt minima
              dolorum.
            </p>
          </div>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">John Doe</p>
            <p className="mb-0 text-gray-500">Co-founder</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Lisa Ferrol</p>
            <p className="mb-0 text-gray-500">Web designer</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Maria Smith</p>
            <p className="mb-0 text-gray-500">Senior consultant</p>
          </div>
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Agatha Bevos</p>
            <p className="mb-0 text-gray-500">Co-founder</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Darren Randolph</p>
            <p className="mb-0 text-gray-500">Marketing expert</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Soraya Letto</p>
            <p className="mb-0 text-gray-500">SEO expert</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Maliha Welch</p>
            <p className="mb-0 text-gray-500">Web designer</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Zeynep Dudley</p>
            <p className="mb-0 text-gray-500">Web developer</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/12.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Avaya Hills</p>
            <p className="mb-0 text-gray-500">Copywritter</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Thierry Fischer</p>
            <p className="mb-0 text-gray-500">Senior consultant</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/14.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Aisling Sheldon</p>
            <p className="mb-0 text-gray-500">Senior developer</p>
          </div>
    
          <div className="mb-12">
            <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" className="w-24 mx-auto mb-4 rounded-full shadow-lg" alt="avatar" />
            <p className="mb-1 font-bold">Ayat Black</p>
            <p className="mb-0 text-gray-500">Web designer</p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    
    </div>
    // <!-- Container for demo purpose -->
  );
}

export default OurTeam;
