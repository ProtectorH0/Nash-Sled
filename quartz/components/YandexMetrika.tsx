import { QuartzComponent, QuartzComponentConstructor } from "./types"

const YandexMetrika: QuartzComponent = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),
              a=e.getElementsByTagName(t)[0],
              k.async=1,
              k.src=r,
              a.parentNode.insertBefore(k,a)
          })(window, document, 'script',
          'https://mc.yandex.ru/metrika/tag.js?id=113435485', 'ym');

          ym(113435485, 'init', {
              defer: true,
              webvisor: true,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true
          });

          document.addEventListener('nav', function(event) {
              if (typeof ym === 'function') {
                  ym(113435485, 'hit', window.location.href, {
                      title: document.title
                  });
              }
          });
        `,
      }}
    />
  )
}

export default (() => YandexMetrika) satisfies QuartzComponentConstructor
