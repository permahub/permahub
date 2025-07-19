import React from "react";
import { Helmet } from "react-helmet-async";
import { GlowingEffectDemo } from "@/components/ui/glowing-demo";

const Berlin: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Berlin Fragments: ARWEAVE</title>
        <meta
          name="description"
          content="Dein Recht, erinnert zu werden. In Berlin und überall. / Your Right to Be Remembered. In Berlin and beyond."
        />
        <meta property="og:title" content="Berlin Fragments: ARWEAVE" />
        <meta
          property="og:description"
          content="Dein Recht, erinnert zu werden. In Berlin und überall. / Your Right to Be Remembered. In Berlin and beyond."
        />
        <meta
          property="og:image"
          content="https://arweave.net/Z9yxYkX1I6Zzuh0nXqqsAiapPc1SD23UwXpUJCS-ivs"
        />
        <meta property="og:url" content="https://permahub.ar.io/berlin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://arweave.net/Z9yxYkX1I6Zzuh0nXqqsAiapPc1SD23UwXpUJCS-ivs"
        />
      </Helmet>
      <div
        className="berlin-campaign-page max-w-full mx-auto px-0"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <div className="w-full" style={{ marginBottom: "8px", marginTop: 0 }}>
          <img
            src="/berlinlanding.png"
            alt="Berlin Campaign Banner"
            className="berlin-banner-img"
          />
        </div>
        <div className="berlin-campaign-cta max-w-3xl mx-auto px-4 py-8 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 tracking-wide uppercase">
            YOUR RIGHT TO BE REMEMBERED
          </h2>
          <h3
            className="font-bebas mb-2 mt-6 tracking-wide uppercase"
            style={{ color: "#888", fontSize: "1.1rem" }}
          >
            About This Archive
          </h3>
          <p className="font-grotesk mb-4">
            These Berlin stories were collected during the "Berlin Fragments"
            advertising campaign throughout the city from June 2-8, 2025,
            culminating with Arweave's anniversary celebration on June 8.
            Berliners responded to our question "Which Berlin story would you
            preserve?" via QR codes on posters, LED trucks, and other media.
            <br />
            <br />
            Unlike regular internet content that can disappear, these stories are
            now permanently preserved on Arweave's network—standing against digital
            erasure that has already claimed countless pieces of Berlin's cultural
            history, from Loveparade archives to Tacheles art.
            <br />
            <br />
            This collection represents fragments of Berlin's cultural memory that
            Berliners themselves chose to remember—not algorithms or corporate
            policies.
            <br />
            <br />
            <span className="block text-center text-base font-grotesk font-bold mb-2" style={{ color: "#222", marginTop: "1.2rem" }}>
              <a
                href="https://arweave.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 font-grotesk"
              >
                Arweave.org
              </a>
              <br />
              <span className="font-grotesk" style={{ fontWeight: 400 }}>
                Permanente Datenspeicherung /{" "}
                <span style={{ color: "#888" }}>Permanent Storage</span>
              </span>
              <br />
            </span>
            <span
              className="font-bebas"
              style={{ color: "#bbb", fontStyle: "italic" }}
            >
              Explore the permanently preserved Berlin stories below:
            </span>
          </p>
        </div>
        {/* Add the glowing effect demo */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <GlowingEffectDemo />
        </div>
      </div>
    </>
  );
};

export default Berlin;
 