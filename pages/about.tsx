import Layout from "@/components/layout/Layout";

function about() {
  return (
    <Layout>
      <div className="container mt-36">
        <div className="max-w-[430px]">
          <h3 className="flex text-5xl font-bold leading-[110%] text-pDark mb-4">
            About Finsweet <br /> Podcast
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default about;
