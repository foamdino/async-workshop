Polymer("async-workshop-page",{collapsible:!0,pageTitle:"Insert title here",pageSubtitle:"Insert subtitle here",headerClick:function(a){"use strict";window.location.href="/"+a.target.getAttribute("section")},domReady:function(){"use strict";var a=this;if(function(){for(var b=a.querySelectorAll("core-submenu"),c=0;c<b.length;++c){var d=b[c].shadowRoot.querySelector("core-item").shadowRoot.querySelector("core-icon");(d.src||d.icon)&&d.removeAttribute("hidden")}}(),this.currentSection)for(var b=this.$.pageScaffold.querySelectorAll("paper-button[section]"),c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("section");e===this.currentSection&&d.setAttribute("active",!0)}var f=this.$.pageScaffold.$.drawerPanel.querySelector("core-header-panel[main]"),g=function(){var b=f.$.headerContent.getDistributedNodes()[0];if(b){var c=b.classList.contains("tall");a.$.pageTitle.classList.toggle("tall",c),a.$.pageSubtitle.classList.toggle("tall",c)}};f.$.outerContainer.addEventListener("scroll",g),f.$.mainContainer.addEventListener("scroll",g),g()}});