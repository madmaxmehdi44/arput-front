
export default function VideoPlayer() {
    const { API_URL } = process.env;
    // const imageUrl =
    // API_URL + props.image.data.attributes.url;

  return (
    <div className="flex items-center justify-center h-screen p-1 bg-indigo-700">
      <div className="flex-1 max-w-3xl p-1 bg-indigo-600 rounded-lg shadow-sm sm:p-8">
        {" "}
        
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="/video1.mp4"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Mehdi Minaee"
            translate="en"
            onMouseDown="alert('');"
          ></iframe>
        </div>
        {/* <MedModal /> */}
      </div>
      {/* <!-- Button trigger modal --> */}
    </div>
  );
}
