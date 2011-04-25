AUI.add("aui-resize-iframe",function(c){var g=c.Lang,b=g.isString,k="resizeiframe",e=c.getClassName,h="height",d="hidden",f="no",i="scrolling",j="width",a=e(k,"monitored",h);ResizeIframe=c.Component.create({NAME:k,NS:k,EXTENDS:c.Plugin.Base,ATTRS:{height:{value:0},monitorHeight:{value:true},width:{value:null}},prototype:{initializer:function(){var l=this;var m=l.get("host");l.node=m;l._iframeEl=m.getDOM();l.bindUI();l.syncUI();},bindUI:function(){var l=this;l.after("heightChange",l._afterHeightChange);l.after("monitorHeightChange",l._afterMonitorHeightChange);l.after("widthChange",l._afterWidthChange);},syncUI:function(){var l=this;l._uiSetMonitorHeight(l.get("monitorHeight"));},destructor:function(){var l=this;l._uiSetMonitorHeight(false);},_afterHeightChange:function(m){var l=this;l.set("monitorHeight",false);l._uiSetHeight(m.newVal);},_afterMonitorHeightChange:function(m){var l=this;l._uiSetMonitorHeight(m.newVal);},_afterWidthChange:function(m){var l=this;l._uiSetWidth(m.newVal);},_clearInterval:function(){var l=this;var m=l._iframeDoc;if(m){var n=m.documentElement;if(n){n.style.overflowY="";}}if(l._intervalId){c.clearInterval(l._intervalId);l._intervalId=null;}},_onResize:function(){var l=this;l._iframeDoc=null;var m=l._iframeHeight;var o;try{o=l._iframeEl.contentWindow.document;l._iframeDoc=o;}catch(n){}if(o){var p=o.documentElement;if(p){p.style.overflowY=d;}}if(o&&o.body){m=o.body.offsetHeight;l._uiSetHeight(m);}else{if(!o){l._clearInterval();}}},_setInterval:function(m){var l=this;if(!l._intervalId){l._intervalId=c.setInterval(l._onResize,100,l);}},_uiSetHeight:function(m){var l=this;if(l._iframeHeight!=m){l._iframeHeight=m;l.node.setStyle(h,m);}},_uiSetMonitorHeight:function(m){var l=this;var n=l.node;if(m){l._setInterval();l._loadHandle=n.on("load",l._setInterval,l);n.addClass(a);}else{l._clearInterval();if(l._loadHandle){l._loadHandle.detach();}n.removeClass(a);}},_uiSetWidth:function(m){var l=this;l.node.setStyle(j,m);},_iframeHeight:0}});c.Plugin.ResizeIframe=ResizeIframe;},"@VERSION@",{requires:["aui-base","aui-task-manager","plugin"],skinnable:true});