import Document, { Html, Head, Main, NextScript } from "next/document";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import i18nextConfig from "../../next-i18next.config";

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <body>
          <Head />
          <div className="content-wrapper">
            <div className="pt-3" />
            <section className="content">
              <Main />
            </section>
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["login"])),
    },
  };
};

export default MyDocument;
