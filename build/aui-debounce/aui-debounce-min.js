AUI.add("aui-debounce",function(a){var g=a.Lang;var f=a.Array;var c=g.isArray;var d=g.isUndefined;var b=[];var e=function(i,k,j,h){return !d(i)?f(i,j||0,(h!==false)):k;};a.debounce=function(q,l,j,n){var h;var p;l=l||0;n=e(arguments,b,3);var k=function(){clearInterval(h);h=null;};var i=function(){k();var s=q.apply(j,p||n||b);p=null;return s;};var m=function(u,s,v,t){o.cancel();u=!d(u)?u:l;q=t||q;j=v||j;if(s!=n){p=e(s,b,0,false).concat(n);}if(u>0){h=setInterval(i,u);}else{return i();}};var r=function(){if(h){k();}};var o=function(){var s=arguments.length?arguments:n;return o.delay(l,s,j||this);};o.cancel=r;o.delay=m;return o;};},"@VERSION@",{skinnable:false});