import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { IFrameProvider } from './iframe-provider';

type IFrameProps = {
  children: React.ReactNode;
  onContentHeightChange: (height: number) => void;
};

const PreviewIframe = styled('iframe')(() => ({
  border: 'none',
  height: '100%',
  width: '100%',
}));

export const IFrame = ({ children, onContentHeightChange }: IFrameProps) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const iframeHead = contentRef?.contentWindow?.document?.head;

  const outerHead = window.document.head;
  const outerTheme = useTheme();

  const cache = useMemo(
    () =>
      createCache({
        key: 'iframe-css',
        container: contentRef?.contentWindow?.document?.head,
        prepend: true,
      }),
    [contentRef]
  );

  const handleIFrameOnload = () => {
    const slickMinCss = iframeHead.querySelector('#slick-min-css');
    if (!slickMinCss) {
      iframeHead.insertAdjacentHTML(
        'afterbegin',
        '<link id="slick-min-css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />'
      );
    }
    const slickThemeMinCss = iframeHead.querySelector('#slick-theme-min-css');
    if (!slickThemeMinCss) {
      iframeHead.insertAdjacentHTML(
        'afterbegin',
        '<link id="slick-theme-min-css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />'
      );
    }
    const hasFont = iframeHead.querySelector('#google-font-imports');
    if (!hasFont) {
      iframeHead.insertAdjacentHTML(
        'afterbegin',
        `<link
          id="google-font-imports"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Public+Sans:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet">`
      );
    }
    const hasBaselineCss = iframeHead.querySelector('#baseline-css');
    if (!hasBaselineCss) {
      iframeHead.insertAdjacentHTML(
        'afterbegin',
        `<style id="baseline-css">*, *::after, *::before {box-sizing: border-box;margin: 0;padding: 0;}</style>`
      );
    }
  };

  useEffect(() => {
    if (!mountNode) return;

    const iframeContent: Element = mountNode?.querySelector('#iframe-content');
    if (!iframeContent) return;

    const resizeObserver = new ResizeObserver(() => {
      onContentHeightChange(iframeContent.scrollHeight + 1);
    });

    resizeObserver.observe(iframeContent);

    // eslint-disable-next-line consistent-return
    return () => {
      resizeObserver.disconnect();
    };
  }, [mountNode, onContentHeightChange]);

  return (
    <PreviewIframe ref={setContentRef} onLoad={handleIFrameOnload}>
      {mountNode && (
        <IFrameProvider
          container={mountNode}
          contentRef={contentRef}
          outerHead={outerHead}
          outerTheme={outerTheme}
        >
          {createPortal(<CacheProvider value={cache}>{children}</CacheProvider>, mountNode)}
        </IFrameProvider>
      )}
    </PreviewIframe>
  );
};
