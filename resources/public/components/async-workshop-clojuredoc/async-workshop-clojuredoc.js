Polymer("async-workshop-clojuredoc",{sourceVisible:!1,visibleSourceType:"clojure",sourcePaneHeights:null,created:function(){"use strict";this.invocations=[],this.cljSource={},this.cljsSource={},this.sourcePaneHeights={},this.sourceResizeAnimation=new CoreAnimation,this.sourceResizeAnimation.duration=300,this.sourceResizeAnimation.fill="both",this.sourceResizeAnimation.easing="ease"},writeLines:function(a){"use strict";for(var b=function(a){var c=a.replace("\\u0039","'");return c===a?a:b(c)},c=b(a[0]),d=1;d<a.length;++d)c+="\n"+b(a[d]);return c},domReady:function(){"use strict";var a={gutter:!1,"tab-size":2,toolbar:!1};SyntaxHighlighter.highlight(a,this.$["invocation-list"]),a.gutter=!0,SyntaxHighlighter.highlight(a,this.$["clj-source"]),SyntaxHighlighter.highlight(a,this.$["cljs-source"])},toggleViewSource:function(){this.sourceVisible=!this.sourceVisible},resizeSourcePane:function(a){this.sourceResizeAnimation.finish(),this.sourceResizeAnimation.keyframes=[{height:this.$["source-pane"].clientHeight+"px"},{height:a}],this.sourceResizeAnimation.play()},visibleSourceTypeChanged:function(a,b){this.resizeSourcePane(this.sourcePaneHeights[b])},calcSourcePaneHeights:function(){if(!this.sourcePaneHeights.clojure){var a=this.$["source-pane"],b=a.querySelector('div[name="clojure"] td.code').scrollHeight,c=b/this.cljSource.source.length;this.sourcePaneHeights.clojure=(this.cljSource.source.length+2)*c+"px",this.sourcePaneHeights.clojurescript=this.cljsSource.source?(this.cljsSource.source.length+2)*c+"px":0,this.sourceResizeAnimation.target=a,this.resizeSourcePane(this.sourcePaneHeights.clojure)}}});