import Script from 'next/script';

import metadata from '@/configs/metadata.mjs';

const GAScript = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${metadata.googleAnalyticsId}`}
    />

    <Script strategy="afterInteractive" id="ga-script">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${metadata.googleAnalyticsId}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
);

export default GAScript;
