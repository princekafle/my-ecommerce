import Header from '../components/Header.js'
import "./globals.css";
import config from "@/src/config";
import AppProvider from "@/src/redux/provider";
import MainLayout from "@/src/layouts/MainLayout.js";

// note: metadata jahile pani app ko  page.js or layout .js ma define garnu parxa hai and metadata is used for search engine optimization

// if hamile same metadata page.js ma ni rakhexau xau vane paila page.js ko content dekahuxa ani layout ko hai, it means page.js le layout.js lai override garxa 
export const metadata = {
  // title of our application
  title: {
    default: config.appName,
    template: `${config.appName} | %s`,
  },
  description: "E-commerce app on Next.js",
  keywords: "E-commerce, online shopping",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            {children}
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
