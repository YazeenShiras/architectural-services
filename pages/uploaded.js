import Head from "next/head";
import UploadedFiles from "../components/UploadedFiles";

const uploaded = () => {
  return (
    <div>
      <Head>
        <title>Uploaded files | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UploadedFiles />
    </div>
  );
};

export default uploaded;
