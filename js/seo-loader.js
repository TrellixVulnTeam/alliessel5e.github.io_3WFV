window.addEventListener("load",(async()=>{Renderer.get().setBaseUrl("/");const fullPage=`${_SEO_PAGE}.html`;const it=await Renderer.hover.pCacheAndGet(fullPage,_SEO_SOURCE,_SEO_HASH);document.title=`${it.name} - 5etools`;$(`.page__title`).text(`${_SEO_PAGE.toTitleCase()}: ${it.name}`);$(`<div class="col-12 flex-vh-center my-2 pt-3">\n\t\t<button class="btn btn-primary">\n\t\t\t<a href="/${_SEO_PAGE}.html" style="font-size: 1.7em; color: white;">${_SEO_STYLE===1?`View All`:`View Complete`} ${_SEO_PAGE.toTitleCase()}</a>\n\t\t</button>\n\t</div>`).appendTo($(`#link-page`));const $wrpContent=$(`#wrp-pagecontent`);const $content=$(`#pagecontent`).addClass("shadow-big").empty();$(`.nav__link`).each(((i,e)=>{const $e=$(e);const href=$e.attr("href");if(!href.startsWith("http")&&href.endsWith(".html"))$e.attr("href",`../${href}`);if(href.startsWith("https://wiki.5e.tools"))$e.remove()}));switch(_SEO_PAGE){case"spells":$content.append(RenderSpells.$getRenderedSpell(it,{}));break;case"bestiary":{Renderer.utils.bindPronounceButtons();$content.append(RenderBestiary.$getRenderedCreature(it));$(`.mon__name--token`).css({paddingRight:5});break}case"items":$content.append(RenderItems.$getRenderedItem(it));break}if(_SEO_FLUFF){const fluff=await Renderer.hover.pCacheAndGet(`fluff__${fullPage}`,_SEO_SOURCE,_SEO_HASH);if(fluff){$$`<div class="mt-5 py-2">
				${Renderer.hover.$getHoverContent_fluff(_SEO_PAGE,fluff,null,{isSkipNameRow:true,isSkipPageRow:true}).addClass("shadow-big stats--book stats--book-large")}
			</div>`.insertAfter($wrpContent)}}}));