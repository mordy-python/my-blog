/** @jsx h */ import { h } from "https://esm.sh/preact@10.7.2";
import { renderToString } from "https://esm.sh/preact-render-to-string@5.2.0?deps=preact@10.7.2";
import { UnoGenerator } from "https://esm.sh/@unocss/core@0.37.2";
import presetWind from "https://esm.sh/@unocss/preset-wind@0.37.2?bundle&no-check";
const resetCSS = `/* reset */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";scrollbar-gutter:stable}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.dark{color-scheme:dark}.dark ::-moz-selection{background:#444}.dark ::selection{background:#444}div{display:flex;flex-direction:column}div[row=""]{display:flex;flex-direction:row}div[block=""]{display:block}`;
let uno = new UnoGenerator({
    presets: [
        presetWind()
    ]
});
export function configureUnoCSS(config) {
    uno = new UnoGenerator(config);
}
export async function html(options) {
    const { body , status , headers: headersInit , ...rest } = options;
    const headers = new Headers(headersInit);
    headers.append("Content-Type", "text/html; charset=utf-8");
    const bodyHtml = renderToString(body);
    const { css  } = await uno.generate(bodyHtml, {
        minify: true
    });
    return new Response(renderToString(/*#__PURE__*/ h(Html, Object.assign({
        body: bodyHtml,
        unocss: {
            css,
            version: uno.version
        }
    }, rest))), {
        status,
        headers
    });
}
function Html({ lang , title , meta , styles , scripts , body , unocss  }) {
    return /*#__PURE__*/ h("html", {
        lang: lang ?? "en"
    }, /*#__PURE__*/ h("head", null, /*#__PURE__*/ h("meta", {
        charSet: "utf-8"
    }), /*#__PURE__*/ h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
    }), title && /*#__PURE__*/ h("title", null, title), meta && Object.entries(meta).filter(([name, content])=>!!name && !!content).map(([name, content])=>/*#__PURE__*/ h("meta", {
            name: name,
            content: String(content)
        })), /*#__PURE__*/ h("style", {
        dangerouslySetInnerHTML: {
            __html: resetCSS
        }
    }), unocss.css && /*#__PURE__*/ h("style", {
        "data-unocss": unocss.version,
        dangerouslySetInnerHTML: {
            __html: unocss.css
        }
    }), styles && styles.map((style)=>typeof style === "string" ? /*#__PURE__*/ h("style", {
            dangerouslySetInnerHTML: {
                __html: style
            }
        }) : /*#__PURE__*/ h("link", {
            rel: "stylesheet",
            href: style.href,
            id: style.id
        })), scripts && scripts.map((script)=>typeof script === "string" ? /*#__PURE__*/ h("script", {
            dangerouslySetInnerHTML: {
                __html: script
            }
        }) : /*#__PURE__*/ h("script", {
            src: script.src,
            type: script.type,
            id: script.id
        }))), /*#__PURE__*/ h("body", {
        dangerouslySetInnerHTML: {
            __html: body
        }
    }));
}
export * from "https://esm.sh/preact@10.7.2";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3gvaHRtQDAuMC42L21vZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggaCAqL1xuXG5pbXBvcnQgeyBoLCB0eXBlIFZOb2RlIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL3ByZWFjdEAxMC43LjJcIjtcbmltcG9ydCB7XG4gIHJlbmRlclRvU3RyaW5nLFxufSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvcHJlYWN0LXJlbmRlci10by1zdHJpbmdANS4yLjA/ZGVwcz1wcmVhY3RAMTAuNy4yXCI7XG5pbXBvcnQge1xuICB0eXBlIFByZXNldCxcbiAgVW5vR2VuZXJhdG9yLFxuICB0eXBlIFVzZXJDb25maWcsXG59IGZyb20gXCJodHRwczovL2VzbS5zaC9AdW5vY3NzL2NvcmVAMC4zNy4yXCI7XG5pbXBvcnQgcHJlc2V0V2luZCBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvQHVub2Nzcy9wcmVzZXQtd2luZEAwLjM3LjI/YnVuZGxlJm5vLWNoZWNrXCI7XG5cbmNvbnN0IHJlc2V0Q1NTID1cbiAgYC8qIHJlc2V0ICovKiw6OmFmdGVyLDo6YmVmb3Jle2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOmN1cnJlbnRDb2xvcn1odG1se2xpbmUtaGVpZ2h0OjEuNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbW96LXRhYi1zaXplOjQ7dGFiLXNpemU6NDtmb250LWZhbWlseTp1aS1zYW5zLXNlcmlmLHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO3Njcm9sbGJhci1ndXR0ZXI6c3RhYmxlfWJvZHl7bWFyZ2luOjA7bGluZS1oZWlnaHQ6aW5oZXJpdH1ocntoZWlnaHQ6MDtjb2xvcjppbmhlcml0O2JvcmRlci10b3Atd2lkdGg6MXB4fWFiYnI6d2hlcmUoW3RpdGxlXSl7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH1he2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5OnVpLW1vbm9zcGFjZSxTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfXRhYmxle3RleHQtaW5kZW50OjA7Ym9yZGVyLWNvbG9yOmluaGVyaXQ7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtsaW5lLWhlaWdodDppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luOjA7cGFkZGluZzowfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1pbWFnZTpub25lfTotbW96LWZvY3VzcmluZ3tvdXRsaW5lOmF1dG99Oi1tb3otdWktaW52YWxpZHtib3gtc2hhZG93Om5vbmV9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfWJsb2NrcXVvdGUsZGQsZGwsZmlndXJlLGgxLGgyLGgzLGg0LGg1LGg2LGhyLHAscHJle21hcmdpbjowfWZpZWxkc2V0e21hcmdpbjowO3BhZGRpbmc6MH1sZWdlbmR7cGFkZGluZzowfW1lbnUsb2wsdWx7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6MH10ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9aW5wdXQ6OnBsYWNlaG9sZGVyLHRleHRhcmVhOjpwbGFjZWhvbGRlcntvcGFjaXR5OjE7Y29sb3I6IzljYTNhZn1bcm9sZT1idXR0b25dLGJ1dHRvbntjdXJzb3I6cG9pbnRlcn06ZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHR9YXVkaW8sY2FudmFzLGVtYmVkLGlmcmFtZSxpbWcsb2JqZWN0LHN2Zyx2aWRlb3tkaXNwbGF5OmJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1pbWcsdmlkZW97bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG99W2hpZGRlbl17ZGlzcGxheTpub25lfS5kYXJre2NvbG9yLXNjaGVtZTpkYXJrfS5kYXJrIDo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZDojNDQ0fS5kYXJrIDo6c2VsZWN0aW9ue2JhY2tncm91bmQ6IzQ0NH1kaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1kaXZbcm93PVwiXCJde2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9ZGl2W2Jsb2NrPVwiXCJde2Rpc3BsYXk6YmxvY2t9YDtcblxubGV0IHVubyA9IG5ldyBVbm9HZW5lcmF0b3IoeyBwcmVzZXRzOiBbcHJlc2V0V2luZCgpIGFzIHVua25vd24gYXMgUHJlc2V0XSB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVVub0NTUyhjb25maWc6IFVzZXJDb25maWcpIHtcbiAgdW5vID0gbmV3IFVub0dlbmVyYXRvcihjb25maWcpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0bWxPcHRpb25zIHtcbiAgbGFuZz86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPjtcbiAgc3R5bGVzPzogKHN0cmluZyB8IHsgaHJlZjogc3RyaW5nOyBpZD86IHN0cmluZyB9KVtdO1xuICBzY3JpcHRzPzogKHN0cmluZyB8IHsgc3JjOiBzdHJpbmc7IHR5cGU/OiBzdHJpbmc7IGlkPzogc3RyaW5nIH0pW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyBleHRlbmRzIEh0bWxPcHRpb25zIHtcbiAgYm9keTogVk5vZGU7XG4gIHN0YXR1cz86IG51bWJlcjtcbiAgaGVhZGVycz86IEhlYWRlcnNJbml0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaHRtbChvcHRpb25zOiBPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCB7IGJvZHksIHN0YXR1cywgaGVhZGVyczogaGVhZGVyc0luaXQsIC4uLnJlc3QgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhoZWFkZXJzSW5pdCk7XG4gIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIpO1xuICBjb25zdCBib2R5SHRtbCA9IHJlbmRlclRvU3RyaW5nKGJvZHkpO1xuICBjb25zdCB7IGNzcyB9ID0gYXdhaXQgdW5vLmdlbmVyYXRlKGJvZHlIdG1sLCB7IG1pbmlmeTogdHJ1ZSB9KTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICByZW5kZXJUb1N0cmluZyhcbiAgICAgIDxIdG1sXG4gICAgICAgIGJvZHk9e2JvZHlIdG1sfVxuICAgICAgICB1bm9jc3M9e3sgY3NzLCB2ZXJzaW9uOiB1bm8udmVyc2lvbiB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+LFxuICAgICksXG4gICAgeyBzdGF0dXMsIGhlYWRlcnMgfSxcbiAgKTtcbn1cblxuaW50ZXJmYWNlIEh0bWxQcm9wcyBleHRlbmRzIEh0bWxPcHRpb25zIHtcbiAgYm9keTogc3RyaW5nO1xuICB1bm9jc3M6IHsgY3NzOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9O1xufVxuXG5mdW5jdGlvbiBIdG1sKHsgbGFuZywgdGl0bGUsIG1ldGEsIHN0eWxlcywgc2NyaXB0cywgYm9keSwgdW5vY3NzIH06IEh0bWxQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9e2xhbmcgPz8gXCJlblwifT5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgJiYgPHRpdGxlPnt0aXRsZX08L3RpdGxlPn1cbiAgICAgICAge21ldGEgJiZcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhtZXRhKS5maWx0ZXIoKFtuYW1lLCBjb250ZW50XSkgPT4gISFuYW1lICYmICEhY29udGVudClcbiAgICAgICAgICAgIC5tYXAoKFtuYW1lLCBjb250ZW50XSkgPT4gKFxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPXtuYW1lfSBjb250ZW50PXtTdHJpbmcoY29udGVudCl9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcmVzZXRDU1MgfX0gLz5cbiAgICAgICAge3Vub2Nzcy5jc3MgJiYgKFxuICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgZGF0YS11bm9jc3M9e3Vub2Nzcy52ZXJzaW9ufVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB1bm9jc3MuY3NzIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0eWxlcyAmJiBzdHlsZXMubWFwKChzdHlsZSkgPT4gKFxuICAgICAgICAgIHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZSB9fSAvPlxuICAgICAgICAgICAgOiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17c3R5bGUuaHJlZn0gaWQ9e3N0eWxlLmlkfSAvPlxuICAgICAgICApKX1cbiAgICAgICAge3NjcmlwdHMgJiYgc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gKFxuICAgICAgICAgIHR5cGVvZiBzY3JpcHQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNjcmlwdCB9fSAvPlxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxzY3JpcHQgc3JjPXtzY3JpcHQuc3JjfSB0eXBlPXtzY3JpcHQudHlwZX0gaWQ9e3NjcmlwdC5pZH0+XG4gICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgKVxuICAgICAgICApKX1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm9keSB9fSAvPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZXhwb3J0ICogZnJvbSBcImh0dHBzOi8vZXNtLnNoL3ByZWFjdEAxMC43LjJcIjtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLENBRWIsU0FBUyxDQUFDLFFBQW9CLDhCQUE4QixDQUFDO0FBQzdELFNBQ0UsY0FBYyxRQUNULGlFQUFpRSxDQUFDO0FBQ3pFLFNBRUUsWUFBWSxRQUVQLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLDJEQUEyRCxDQUFDO0FBRW5GLE1BQU0sUUFBUSxHQUNaLENBQUMsZ3hFQUFneEUsQ0FBQyxBQUFDO0FBRXJ4RSxJQUFJLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUFFLE9BQU8sRUFBRTtRQUFDLFVBQVUsRUFBRTtLQUFzQjtDQUFFLENBQUMsQUFBQztBQUU3RSxPQUFPLFNBQVMsZUFBZSxDQUFDLE1BQWtCLEVBQUU7SUFDbEQsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2hDO0FBZ0JELE9BQU8sZUFBZSxJQUFJLENBQUMsT0FBZ0IsRUFBcUI7SUFDOUQsTUFBTSxFQUFFLElBQUksQ0FBQSxFQUFFLE1BQU0sQ0FBQSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUEsRUFBRSxHQUFHLElBQUksRUFBRSxHQUFHLE9BQU8sQUFBQztJQUNoRSxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQUFBQztJQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQzNELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQUFBQztJQUN0QyxNQUFNLEVBQUUsR0FBRyxDQUFBLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQUUsTUFBTSxFQUFFLElBQUk7S0FBRSxDQUFDLEFBQUM7SUFD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