!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).DetectGPU={})}(this,function(e){"use strict";const o=["770 - AMD Radeon HD 7290","760 - AMD Radeon HD 8180","758 - AMD Radeon HD 7310","756 - AMD Radeon HD 7340","752 - Intel HD Graphics (Bay Trail)","710 - Intel HD Graphics (Ivy Bridge)","706 - AMD Radeon HD 8210","682 - Intel HD Graphics (Cherry Trail)","681 - AMD Radeon HD 8250","680 - AMD Radeon R6 (Mullins)","679 - AMD Radeon HD 8240","671 - AMD Radeon HD 8280","668 - AMD Radeon R2 (Mullins/Beema/Carrizo-L)","646 - Intel HD Graphics (Haswell)","637 - Intel HD Graphics 400 (Braswell)","636 - Intel HD Graphics (Braswell)","635 - Intel HD Graphics 405 (Braswell)","615 - Intel HD Graphics 500","614 - Intel UHD Graphics 600","613 - AMD Radeon HD 8330","612 - AMD Radeon HD 8350G","599 - AMD Radeon HD 8400","595 - AMD Radeon HD 8450G","586 - Intel HD Graphics 4200","585 - Intel HD Graphics (Broadwell)","584 - AMD Radeon R2 (Stoney Ridge)","583 - AMD Radeon R3 (Mullins/Beema)","582 - AMD Radeon R4 (Kaveri)","581 - AMD Radeon R4 (Beema)","580 - AMD Radeon R5 (Beema/Carrizo-L)","578 - AMD Radeon R4 (Stoney Ridge)","574 - Intel HD Graphics 4000","573 - AMD Radeon HD 7480D","565 - Intel HD Graphics 5300","564 - Intel HD Graphics 505","563 - Intel UHD Graphics 605","534 - Intel HD Graphics 510","533 - AMD Radeon HD 8610G","532 - Intel HD Graphics 610","531 - Intel HD Graphics 4400","530 - Intel HD Graphics 515","523 - AMD Radeon HD 8470D","514 - AMD Radeon HD 8550G","498 - Intel HD Graphics 5000","495 - AMD Radeon HD 7660G","494 - NVIDIA GeForce 710M","491 - AMD Radeon R5 (Kaveri)","490 - AMD Radeon R5 (Carrizo)","489 - Intel HD Graphics 615","488 - Intel UHD Graphics 615","487 - Intel UHD Graphics 617","479 - Qualcomm Adreno 630","477 - Intel HD Graphics 5500","475 - Intel HD Graphics 4600","471 - Intel Iris Graphics 5100","469 - NVIDIA Quadro K610M","468 - Intel HD Graphics 6000","462 - AMD Radeon R5 (Stoney Ridge)","461 - AMD Radeon R5 M420","460 - AMD Radeon R5 M315","458 - AMD Radeon R5 M320","455 - NVIDIA GeForce GT 720M","454 - Intel Iris Graphics 6100","453 - Intel HD Graphics 520","452 - NVIDIA GeForce 820M","451 - NVIDIA GeForce 910M","449 - AMD Radeon RX Vega 3","448 - AMD Radeon R5 M255","447 - AMD Radeon R5 M430","446 - AMD Radeon R5 M330","443 - AMD Radeon HD 7560D","437 - AMD Radeon HD 8650G","421 - NVIDIA Quadro K1000M","419 - AMD Radeon HD 7660D","418 - AMD Radeon R6 M255DX","411 - Intel HD Graphics 5600","401 - AMD FirePro W2100","392 - AMD Radeon R6 (Kaveri)","380 - Qualcomm Adreno 680","379 - AMD Radeon R6 (Carrizo)","378 - Intel HD Graphics 620","377 - Intel UHD Graphics 620","376 - AMD Radeon R5 (Bristol Ridge)","374 - Intel HD Graphics P530","373 - Intel HD Graphics 530","372 - Intel HD Graphics P630","371 - Intel HD Graphics 630","370 - Intel UHD Graphics 630","369 - Intel UHD Graphics G1 (Ice Lake 32 EU)","368 - AMD Radeon RX Vega 6","366 - AMD Radeon 520","365 - AMD Radeon R7 M340","358 - AMD Radeon R7 M440","357 - AMD Radeon R8 M445DX","354 - NVIDIA GeForce 920M","352 - AMD Radeon R7 M360","349 - AMD Radeon R7 M460","347 - AMD Radeon R7 (Kaveri)","346 - AMD Radeon R7 (Carrizo)","345 - NVIDIA GeForce GT 640M","344 - AMD Radeon R7 (Bristol Ridge)","340 - AMD Radeon R7 M265","336 - AMD FirePro M4100","333 - NVIDIA GeForce GT 730M","323 - AMD FirePro M4000","321 - NVIDIA GeForce 825M","319 - NVIDIA GeForce GT 735M","316 - NVIDIA Quadro K2000M","312 - Intel Iris Graphics 540","311 - NVIDIA GeForce 920MX","310 - Intel Iris Plus Graphics 640","309 - NVIDIA GeForce MX110","308 - NVIDIA GeForce 830M","307 - AMD Radeon 530","306 - Intel Iris Graphics 550","305 - NVIDIA GeForce 930M","304 - Intel Iris Plus Graphics 650","303 - NVIDIA GeForce GT 740M","302 - AMD Radeon R7 384 Cores (Kaveri Desktop)","301 - Intel Iris Pro Graphics 5200","300 - AMD Radeon R7 512 Cores (Kaveri Desktop)","297 - NVIDIA GeForce GT 745M","295 - NVIDIA GeForce 840M","294 - NVIDIA Quadro M500M","289 - AMD Radeon R7 M445","288 - Intel Iris Plus Graphics 655","287 - AMD Radeon R9 M375","286 - AMD FirePro W4190M","285 - NVIDIA Quadro M600M","283 - NVIDIA GeForce 930MX","282 - Intel Iris Plus Graphics G4 (Ice Lake 48 EU)","281 - NVIDIA GeForce 940M","280 - AMD Radeon RX Vega 8","279 - NVIDIA Quadro K1100M","278 - NVIDIA Quadro M520","277 - NVIDIA GeForce 940MX","276 - NVIDIA GeForce MX130","275 - Intel Iris Pro Graphics 6200","274 - NVIDIA GeForce GT 750M","269 - AMD FirePro W4100","268 - AMD FirePro W4170M","266 - AMD Radeon R7 M465","264 - AMD Radeon R9 M265X","261 - NVIDIA GeForce 845M","259 - NVIDIA GeForce GT 755M","258 - AMD Radeon R7 250","253 - NVIDIA Quadro K2100M","252 - NVIDIA GeForce MX230","251 - AMD FirePro M5100","250 - AMD FirePro M6000","248 - NVIDIA Quadro K3000M","242 - AMD FirePro W5130M","241 - NVIDIA Maxwell GPU Surface Book (940M, GDDR5)","235 - AMD Radeon R9 M370X","234 - AMD FirePro W5170M","233 - NVIDIA Quadro K3100M","222 - AMD Radeon R9 M470","217 - Intel Iris Pro Graphics 580","216 - Intel Iris Pro Graphics P580","215 - AMD Radeon RX Vega 10","214 - Intel Iris Plus Graphics G7 (Ice Lake 64 EU)","213 - NVIDIA Quadro P500","212 - NVIDIA Quadro K4000M","207 - NVIDIA GeForce 945M","201 - AMD Radeon RX Vega 11","200 - NVIDIA Quadro M620","199 - NVIDIA Quadro M1000M","198 - NVIDIA GeForce GTX 850M","197 - NVIDIA Quadro P520","196 - AMD Radeon R9 M385X","195 - AMD Radeon R9 M470X","194 - AMD Radeon Pro 450","193 - NVIDIA GeForce GTX 950M","185 - NVIDIA GeForce GTX 860M","184 - AMD Radeon Pro WX 3100 Mobile","183 - AMD Radeon RX 540","182 - AMD Radeon RX 540X","180 - NVIDIA Quadro K4100M","179 - NVIDIA Quadro K5000M","178 - NVIDIA Quadro M2000M","177 - NVIDIA GeForce MX150","176 - NVIDIA GeForce MX250","175 - NVIDIA Quadro P600","174 - NVIDIA GeForce GT 1030 (Desktop)","173 - AMD Radeon Pro 455","172 - AMD Radeon Pro 555","171 - AMD Radeon Pro 555X","170 - AMD Radeon RX 550 (Laptop)","169 - AMD Radeon RX 550X (Laptop)","168 - NVIDIA Quadro P620","167 - NVIDIA Quadro M1200","162 - NVIDIA GeForce GTX 960M","161 - AMD Radeon Pro WX 4130","160 - AMD Radeon Pro 460","159 - AMD Radeon Pro 560","158 - AMD Radeon Pro 560X","156 - AMD FirePro M6100","155 - AMD Radeon R9 M390","152 - AMD Radeon RX 460 (Laptop)","145 - NVIDIA GeForce GTX 870M","144 - NVIDIA Quadro M2200","143 - AMD Radeon RX 560 (Laptop)","142 - AMD Radeon RX 560X (Laptop)","141 - NVIDIA GeForce GTX 965M","139 - AMD Radeon Pro WX 4150","138 - AMD Radeon RX 460 (Desktop)","136 - NVIDIA Quadro P1000","135 - NVIDIA Quadro K5100M","131 - AMD Radeon R9 270X","130 - NVIDIA GeForce GTX 950","129 - NVIDIA GeForce GTX 1050 Max-Q","128 - NVIDIA GeForce GTX 880M","126 - AMD Radeon R7 370","125 - AMD Radeon R9 M395","124 - AMD FirePro W7170M","123 - NVIDIA GeForce GTX 1050 (Laptop)","122 - NVIDIA GeForce GTX 1050 (Desktop)","121 - NVIDIA Quadro M3000M","118 - AMD Radeon R9 M485X","117 - AMD Radeon Pro Vega 16","116 - AMD Radeon Pro WX Vega M GL","115 - AMD Radeon RX Vega M GL / 870","114 - NVIDIA GeForce GTX 1050 Ti Max-Q","113 - AMD Radeon R9 M395X","108 - NVIDIA GeForce GTX 970M","107 - NVIDIA Quadro M4000M","106 - NVIDIA Quadro P2000 Max-Q","105 - NVIDIA Quadro P2000","104 - NVIDIA GeForce GTX 1050 Ti (Desktop)","103 - NVIDIA GeForce GTX 1050 Ti (Laptop)","102 - NVIDIA GeForce GTX 960","101 - AMD Radeon R9 380","100 - AMD Radeon R9 280X","99 - NVIDIA Quadro M5000M","98 - AMD Radeon Pro Vega 20","97 - AMD Radeon RX Vega M GH","96 - NVIDIA GeForce GTX 980M","89 - AMD Radeon R9 290X","86 - NVIDIA Quadro T1000 Max-Q","85 - NVIDIA Quadro T1000 (Laptop)","84 - NVIDIA GeForce GTX 1650 Max-Q","83 - AMD Radeon RX 470 (Laptop)","82 - AMD Radeon RX 570 (Laptop)","81 - AMD Radeon RX 570X (Laptop)","80 - AMD Radeon RX 470 (Desktop)","79 - AMD Radeon Pro WX 7100","77 - NVIDIA Quadro P3000 Max-Q","76 - NVIDIA GeForce GTX 1060 Max-Q","75 - NVIDIA GeForce GTX 1650 (Laptop)","74 - NVIDIA GeForce GTX 1650 (Desktop)","73 - NVIDIA GeForce GTX 970","72 - NVIDIA Quadro P3000","71 - AMD Radeon RX Vega Mobile","69 - AMD Radeon RX 580 (Laptop)","68 - AMD Radeon RX 580X (Laptop)","67 - NVIDIA Quadro P3200","66 - NVIDIA Quadro P4000 Max-Q","65 - NVIDIA GeForce GTX 1060 (Laptop)","64 - AMD Radeon RX 480 (Desktop)","63 - NVIDIA GeForce GTX 1650 Ti (Desktop)","62 - NVIDIA Quadro T2000 Max-Q","61 - NVIDIA Quadro T2000 (Laptop)","60 - NVIDIA Quadro P4000","59 - AMD Radeon RX 570 (Desktop)","58 - NVIDIA GeForce GTX 1060 (Desktop)","56 - AMD Radeon R9 390X","55 - NVIDIA Quadro M5500","54 - NVIDIA GeForce GTX 980 (Laptop)","53 - AMD Radeon RX 580 (Desktop)","52 - AMD Radeon RX 590 (Desktop)","51 - NVIDIA GeForce GTX 980","50 - AMD Radeon R9 Nano","49 - AMD Radeon R9 Fury","47 - NVIDIA Quadro P5000 Max-Q","46 - NVIDIA GeForce GTX 1660 Ti Max-Q","45 - NVIDIA GeForce GTX 1070 Max-Q","44 - NVIDIA GeForce GTX 980 Ti","43 - NVIDIA Quadro P5000","42 - NVIDIA Quadro P4200","41 - NVIDIA GeForce GTX 1660 Ti (Laptop)","40 - NVIDIA GeForce GTX 1660 Ti (Desktop)","39 - NVIDIA GeForce GTX 1070 (Laptop)","38 - NVIDIA GeForce RTX 2060 Max-Q","37 - NVIDIA GeForce GTX 1080 Max-Q","36 - NVIDIA GeForce GTX 1070 (Desktop)","35 - AMD Radeon Pro Vega 56","34 - NVIDIA Quadro P5200","32 - NVIDIA GeForce RTX 2060 (Laptop)","31 - NVIDIA GeForce GTX 1070 Ti (Desktop)","30 - NVIDIA GeForce RTX 2060 (Desktop)","29 - NVIDIA GeForce RTX 2070 Max-Q","28 - NVIDIA GeForce GTX 1080 (Laptop)","27 - AMD Radeon RX Vega 56","26 - AMD Radeon RX 5700 (Desktop)","25 - NVIDIA GeForce RTX 2060 Super","24 - AMD Radeon RX Vega 64","23 - NVIDIA Quadro RTX 3000 Max-Q","22 - NVIDIA Quadro RTX 3000 (Laptop)","21 - NVIDIA GeForce RTX 2070 (Laptop)","20 - NVIDIA GeForce GTX 1080 (Desktop)","19 - NVIDIA GeForce RTX 2070 (Desktop)","18 - AMD Radeon RX 5700 XT (Desktop)","17 - NVIDIA GeForce RTX 2070 Super","16 - NVIDIA Quadro RTX 4000 Max-Q","15 - NVIDIA Quadro RTX 4000 (Laptop)","14 - NVIDIA GeForce GTX 1070 SLI (Laptop)","13 - NVIDIA GeForce GTX 1070 SLI (Desktop)","12 - NVIDIA GeForce GTX 1080 SLI (Laptop)","11 - NVIDIA Titan X Pascal","10 - NVIDIA GeForce GTX 1080 Ti (Desktop)","9 - NVIDIA GeForce RTX 2080 Max-Q","8 - NVIDIA GeForce RTX 2080 (Laptop)","7 - NVIDIA Quadro RTX 5000 Max-Q","6 - NVIDIA Quadro RTX 5000 (Laptop)","5 - AMD Radeon VII","4 - NVIDIA GeForce RTX 2080 (Desktop)","3 - NVIDIA GeForce RTX 2080 Super","2 - NVIDIA GeForce RTX 2080 Ti (Desktop)","1 - NVIDIA Titan RTX"],r=["913 - ARM Mali-200","912 - Qualcomm Adreno 200","911 - PowerVR SGX530","910 - PowerVR SGX531","909 - PowerVR SGX535","908 - Vivante GC800","907 - Qualcomm Adreno 203","906 - Qualcomm Adreno 205","904 - PowerVR SGX540","902 - NVIDIA GeForce ULP (Tegra 2)","901 - ARM Mali-400 MP","900 - ARM Mali-400 MP2","899 - Vivante GC1000+ Dual-Core","898 - Qualcomm Adreno 220","897 - Broadcom VideoCore-IV","896 - NVIDIA GeForce ULP (Tegra 3)","895 - ARM Mali-400 MP4","894 - Vivante GC4000","893 - Qualcomm Adreno 225","885 - Qualcomm Adreno 302","884 - Vivante GC7000UL","883 - ARM Mali-T720","882 - Qualcomm Adreno 304","881 - Qualcomm Adreno 305","880 - Qualcomm Adreno 306","879 - Qualcomm Adreno 308","878 - PowerVR SGX544","877 - ARM Mali-T720 MP2","876 - PowerVR SGX544MP2","875 - PowerVR SGX545","872 - PowerVR SGX543MP2","862 - PowerVR SGX543MP3","854 - ARM Mali-T830 MP1","853 - ARM Mali-450 MP4","852 - ARM Mali-T720 MP4","851 - PowerVR GE8100","850 - PowerVR GE8300","849 - PowerVR GE8320","848 - ARM Mali-T760 MP2","847 - Qualcomm Adreno 320","846 - ARM Mali-T624","845 - PowerVR SGX543MP4","818 - ARM Mali-T830 MP2","817 - Qualcomm Adreno 405","816 - PowerVR G6200","815 - NVIDIA GeForce Tegra 4","810 - ARM Mali-T604 MP4","804 - ARM Mali-T830 MP3","803 - ARM Mali-T860 MP2","799 - Qualcomm Adreno 504","798 - Qualcomm Adreno 505","797 - PowerVR GE8322 / IMG8322","796 - Qualcomm Adreno 506","795 - Qualcomm Adreno 508","794 - Qualcomm Adreno 509","793 - ARM Mali-T628 MP4","792 - PowerVR SGX554MP4","754 - ARM Mali-T760 MP4","753 - ARM Mali-T628 MP6","752 - Intel HD Graphics (Bay Trail)","751 - PowerVR G6400","750 - PowerVR GX6250","749 - PowerVR G6430","748 - Qualcomm Adreno 330","747 - Qualcomm Adreno 510","746 - Qualcomm Adreno 512","745 - Qualcomm Adreno 612","682 - Intel HD Graphics (Cherry Trail)","669 - ARM Mali-G51 MP4","667 - Qualcomm Adreno 616","666 - Qualcomm Adreno 618","665 - Qualcomm Adreno 418","645 - Qualcomm Adreno 420","644 - PowerVR GX6450","634 - ARM Mali-T880 MP2","633 - ARM Mali-T760 MP6","601 - ARM Mali-T880 MP4","600 - ARM Mali-G72 MP3","579 - Qualcomm Adreno 430","576 - ARM Mali-G71 MP2","575 - ARM Mali-T760 MP8","529 - ARM Mali-T880 MP12","528 - Apple A9 / PowerVR GT7600","527 - NVIDIA Tegra K1 Kepler GPU","526 - PowerVR GXA6850","525 - Qualcomm Adreno 530","486 - ARM Mali-G71 MP8","485 - ARM Mali-G72 MP12","484 - ARM Mali-G71 MP20","483 - ARM Mali-G72 MP18","482 - Qualcomm Adreno 540","481 - ARM Mali-G76 MP10","480 - ARM Mali-G76 MP12","479 - Qualcomm Adreno 630","478 - Qualcomm Adreno 640","463 - Apple A10 Fusion GPU / PowerVR","375 - NVIDIA Tegra X1 Maxwell GPU","351 - Apple A9X / PowerVR Series 7XT","315 - Apple A10X Fusion GPU / PowerVR","314 - Apple A11 Bionic GPU","313 - Apple A12 Bionic GPU","284 - Apple A12X Bionic GPU"],a=e=>e.toLowerCase().split("- ")[1].split(" /")[0],i=(e,o)=>{let r=0;return o.map(o=>{const a=Math.round(e.length/100*o),i=e.slice(r,r+a);return r+=a,i})};const n=new(function(){function e(e){this.cache=new Map,this.userAgent=e||(window&&window.navigator?window.navigator.userAgent:""),this.android=!/like android/i.test(this.userAgent)&&/android/i.test(this.userAgent),this.iOS=this.match(1,/(iphone|ipod|ipad)/i).toLowerCase()}return e.prototype.match=function(e,o){var r=this.userAgent.match(o);return r&&r.length>1&&r[e]||""},Object.defineProperty(e.prototype,"isMobile",{get:function(){var e=this.cache.get("isMobile");return e||(!this.isTablet&&(/[^-]mobi/i.test(this.userAgent)||"iphone"===this.iOS||"ipod"===this.iOS||this.android||/nexus\s*[0-6]\s*/i.test(this.userAgent))?(this.cache.set("isMobile",!0),!0):(this.cache.set("isMobile",!1),!1))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTablet",{get:function(){var e=this.cache.get("isTablet");return e||(/tablet/i.test(this.userAgent)&&!/tablet pc/i.test(this.userAgent)||"ipad"===this.iOS||this.android&&!/[^-]mobi/i.test(this.userAgent)||!/nexus\s*[0-6]\s*/i.test(this.userAgent)&&/nexus\s*[0-9]+/i.test(this.userAgent)?(this.cache.set("isTablet",!0),!0):(this.cache.set("isTablet",!1),!1))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDesktop",{get:function(){var e=this.cache.get("isDesktop");if(e)return e;var o=!this.isMobile&&!this.isTablet;return this.cache.set("isDesktop",o),o},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isiOS",{get:function(){var e=this.cache.get("isiOS");return e||!!this.iOS&&{name:"iOS",version:this.match(1,/os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g,".")}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAndroid",{get:function(){var e=this.cache.get("isAndroid");return e||!!this.android&&{name:"Android",version:this.match(1,/android[ \/-](\d+(\.\d+)*)/i)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"browser",{get:function(){var e=this.cache.get("browser");if(e)return e;var o=this.match(1,/version\/(\d+(\.\d+)?)/i),r=void 0;return r=/opera/i.test(this.userAgent)?{name:"Opera",version:o||this.match(1,/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(this.userAgent)?{name:"Opera",version:this.match(1,/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||o}:/SamsungBrowser/i.test(this.userAgent)?{name:"Samsung Internet for Android",version:o||this.match(1,/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(this.userAgent)?{name:"Yandex Browser",version:o||this.match(1,/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(this.userAgent)?{name:"UC Browser",version:this.match(1,/(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)}:/msie|trident/i.test(this.userAgent)?{name:"Internet Explorer",version:this.match(1,/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(this.userAgent)?{name:"Microsoft Edge",version:this.match(2,/edg([ea]|ios)\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(this.userAgent)?{name:"Firefox",version:this.match(1,/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}:/chromium/i.test(this.userAgent)?{name:"Chromium",version:this.match(1,/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||o}:/chrome|crios|crmo/i.test(this.userAgent)?{name:"Chrome",version:this.match(1,/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/safari|applewebkit/i.test(this.userAgent)?{name:"Safari",version:o}:{name:this.match(1,/^(.*)\/(.*) /),version:this.match(2,/^(.*)\/(.*) /)},this.cache.set("browser",r),r},enumerable:!0,configurable:!0}),e}()),{isMobile:t,isTablet:A,isDesktop:D}=n,M=e=>e.replace(/[\D]/g,"");e.getGPUTier=(e={})=>{const n=e.mobileBenchmarkPercentages||[0,50,30,20],s=e.desktopBenchmarkPercentages||[0,50,30,20],I=e.forceRendererString||"",d=e.forceMobile||!1;let c,R="",l="";if(I)c=I;else{const o=e.glContext||(()=>{const e={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"high-performance",stencil:!1},o=document.createElement("canvas"),r=o.getContext("webgl",e)||o.getContext("experimental-webgl",e);if(r&&r instanceof WebGLRenderingContext)return r})();if(!o)return t||A||d?{tier:"GPU_MOBILE_TIER_0",type:"WEBGL_UNSUPPORTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"WEBGL_UNSUPPORTED"};c=(e=>{const o=e.getExtension("WEBGL_debug_renderer_info");return o&&e.getParameter(o.UNMASKED_RENDERER_WEBGL)})(o)}const G=(c=(e=>{let o=e.toLowerCase();return o.includes("angle (")&&o.includes("direct3d")&&(o=o.replace("angle (","").split(" direct3d")[0]),o.includes("nvidia")&&o.includes("gb")&&(o=o.split(/\dgb/)[0]),o})(c)).replace(/[\D]/g,"");if(/(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(c))return t||A||d?{tier:"GPU_MOBILE_TIER_0",type:"BLACKLISTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"BLACKLISTED"};if(t||A||d){const e=i(r,n),o=c.includes("adreno"),t=c.includes("apple"),A=c.includes("mali")&&!c.includes("mali-t"),D=c.includes("mali-t"),s=c.includes("nvidia"),I=c.includes("powervr");return e.forEach((e,r)=>e.forEach(e=>{const i=a(e),n=M(i);(i.includes("adreno")&&o||i.includes("apple")&&t||i.includes("mali")&&!i.includes("mali-t")&&A||i.includes("mali-t")&&D||i.includes("nvidia")&&s||i.includes("powervr")&&I)&&n.includes(G)&&(R=`GPU_MOBILE_TIER_${r}`,l=`BENCHMARK - ${i}`)})),R||(R="GPU_MOBILE_TIER_1",l="FALLBACK"),{tier:R,type:l}}if(D){const e=i(o,s),r=c.includes("intel"),n=c.includes("amd"),t=c.includes("nvidia");return e.forEach((e,o)=>e.forEach(e=>{const i=a(e),A=M(i);(i.includes("intel")&&r||i.includes("amd")&&n||i.includes("nvidia")&&t)&&A.includes(G)&&(R=`GPU_DESKTOP_TIER_${o}`,l=`BENCHMARK - ${i}`)})),R||(R="GPU_DESKTOP_TIER_1",l="FALLBACK"),{tier:R,type:l}}return{tier:R,type:l}},Object.defineProperty(e,"__esModule",{value:!0})});
