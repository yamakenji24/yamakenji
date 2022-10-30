import ReactDOM from "react-dom/server";
import * as playwright from "playwright-aws-lambda";
import { OGPContent } from "ui/ogp/content";

export default async (req, res) => {
  const title = req.query.title;
  const viewport = { width: 1200, height: 630 };

  const browser = await playwright.launchChromium();
  const page = await browser.newPage({ viewport });

  const markup = ReactDOM.renderToStaticMarkup(<OGPContent title={title} />);
  const html = `<!doctype html>${markup}`;

  await page.setContent(html, { waitUntil: "domcontentloaded" });

  const image = await page.screenshot({ type: "png" });
  await browser.close();

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");

  res.setHeader("Content-Type", "image/png");

  res.end(image);
};