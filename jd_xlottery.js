/*
新年开新抽奖

cron:3 6,7,22 * * *
============Quantumultx===============
[task_local]
#新年开新抽奖
33 7 * * * jd_xlottery.js, tag=新年开新抽奖, enabled=true

*/
const $ = new Env('新年开新抽奖');
var _0xod8='jsjiami.com.v6',_0xod8_=['‮_0xod8'],_0x3ba2=[_0xod8,'fl7DusO8UQ==','woPCkik5wrk=','w4LDsgHCs3I=','woBSw5I5aFZWFA==','wpJ1ScOmFw==','w6vDuBbCnm8=','w7nCqsOnXsKx','w7LDn0XCu8Oe','w4nDnMOZw4PDjsKnDA==','BzXDhSPDn15HwqQ=','w7gzwro=','cggiUcOe','wqzCkw/DuWTDlSvCtw==','w4DDk8OPSyMUw6Y=','w68SCcOP','ecOtwqsjw4I=','bRLCk8O2LWPCs8KW','MuiulumEu+aUtOeYmOW9l+iNqeWMpV3CgUbDiHRowqrCjsKVMMO/FmcYMUTDnsOWwp9YE8OnwojDp1gpw7LCgUcOwqFeJDIKYzkMw4FMaUfCn8K7','w44iwr0+w6XDp8KXQDnCqljCgsOVE8O2bnUnw4c/wqhXC8OnwpDCugN0MjZ5w6k9w5tDwoHCoF7DuWjDuSnCgA==','wpzCiAw3wofDjg==','wp0CXW54','K34cAcO1','CMKhw6PCvAc=','w7I+worCrsO4bOW2tOWkoOaUgQkvwrY=','GlRsT2d1w6/Dig==','5Lqm5Li66La95Y2d','UQ/CksOhGw==','KOivi+mGm+aXmeebneW+quiOj+WMpkRNBMK5w5PCtQ==','w5E4McOFZA==','w7bDuBDCjmI=','wpgwaWh+woDDnw==','w5kQwqfChcOV','QcO5wppJSg==','GWHCvcKH','w6DDnFzCvg==','wothdX45wofDvsOawqE9XwJ8Mg==','MWjCuMK2CQ==','w77CrcOgUMKHf8Oxbg==','XVbCvsK5w6UDFzk=','UVNBw4Qe','wofCkcKtwoAlw4HDlw==','dyjChMK9','HGPCrMKHMMOsw5XDh8OiwqIvHMOywrXCn8Ok','Tw02wqPDjTjDtcKQwp/Cm8OFwodzF3XDnMO7woBVb8OwwpI3wrJUw6TDvmQ=','GlRqbG9uw5XDoyEAwqw4wqzDosO0wrDCpcOHOHHDlsO9w67CpsK+Oxw=','Sm8ta8Oawr1Gw6kBwqZbBMOldMKVRiHCkcK0fn9gAQ==','dcKLwrcoVsKMeivChcOfw6vDhsOyw6DDpcKUwqkKfcOuw6wtwpTCpMK4wrXDhQ==','EQ9mWMKRw48Ow4kWGw==','WVDCvsK5w5UkHyLCjwJswojDvWhPw5tYwpsvw6fDqGc+w6jDtcKY','w4HDjAESwpTDgQ7Dp8OtVV3CuMOEcl3CnnxVCsK3wqXCtsOSUG3DpxbDoQ==','X3UBd8OXwpFaw7wHwqBTEcO0XMKQUAHCmMK8fA==','w6Ftw78TVgRNRg9qAg3DtsKiB8ORwpU4TGfCqzs/LsO+w6bCiT4=','Z0PDgsKpw4Y=','K0hAU11xw7DDjgw+wo99wo3DisK1wobDvsOoPXjDkcOkwqI=','CnrCkMKJBw==','wrPCuTvDt0Y=','woVrw5A=','eVLDqcODeB4CScOQ','X0TCssK/','w4TCh8O0QcKk','wqBtw79WYQ==','w57DmsOaSxA=','WkzDiMODT0ghV8ObQgdEbcOrwpgQwq/Drw7DlcKDWhjDj8KnNRk=','wqhYfcO6EQ==','G8KgLMONXg==','w5x9wpR9wqDCscOIw49L','w7HDuAvCiQ==','w6Qkwrkiw64=','w4/CmX1MSQ==','SAosd8Op','w55KwrFxwqI=','wp8iwonDoEc=','wrlOw5A=','BsKNTcOBCMO3U23CqQ==','b0wBUMOq','XRDDrhDDoQxcw7bCrwXDv8ODJ2XDh8Kiw5LDmzPCrcOJL8ONAknCuTbDkw==','SsOiwr81w7c=','WMK9wqzCncKMw6ZJ','wobDssOo','w7HCp8OmWsKqe8OvcmPDucO3LMK9w4YJwqI=','YmLDgcKew68=','KVLCusKiOg==','dW8XGcOp','w73DpsOwaTw=','YQhcbmxGw53DrigPwqhfwrs=','acK4G8K2','wqjCng3DolrCjy/CgsKqwqFyQMOLDsOpwopaacOpAsOUw68/RsKEwrU7w4IpwozDuE4EJVHComkgWsKwwpbDg0/DoXQvN8KQVMKoDiEnwqXDu1rDk8K0QsKuw7twwp3Co8KuccKYw6c+L3ZjwoQRwroHw43DtMK7SMOewp7CpcOsbcOTw5FqRlcmJcKhKcKZw6t/w6JhDsK0WcOowpjCmHPDujphwp3DhVxuE8KEwpkawow+wqB1KMKjZk5eIBfCt3vCscKKwpfCusO2ExjDh2t3HcOyDmPCsynDpQ/Du8KiG8OZwrDCicKZFirDq8O9w48=','Q8K8wrrCrsKQwrgDbMKsVlLDiVs3wpjCpCpNw6xKDHTCkzA=','J1N9TVouwq3CgA46wo8lwoXCpcKswpHCucOsPHjCm8OpwrrCnsKhODxOw7jDtVzDkMKyJCnCjMK9w7jDlHPCl1Juw5rDpsK4','SsK4wr7Ct8KHwr9PLMKyUFjDg0oew5PCqmtLw6cDFj3CnHBIw77CkA==','fSjCnQ==','wq7CkgI=','BsKmOcOodDPDskQywqvDp27DsA==','YUcidsOg','w7jDkMOMbjA=','KcKww57ChRY=','woJvKsOoRA==','wrLCkgwUwqk=','wpnDqcO9wp3Dk3w=','wo3Cl8Kk','wpB0dFggwo7Dh8OOwrc=','wrZqFw==','wovCiAnDuGg=','w7HDumLCq8OI','bMOawrE=','TcKdI8KS','w7U75aSb6La6XMKM5Y665ZuhCMKi','wp/CuAQ5wpk=','Z2/DgsOiWw==','R8OpwpYLw54=','w5gjwoDCr8OT','wo0CwrLDlko=','5Lq85Lqf5p+C5Yun5ZuS6Kyd6ZS25pWb5o+15Lm256uO772Z6K645qOo5p6C6IeN6LuR6K655aWP576757qL5oKY5Ya9','wpTCv8KJwpUu','RkFCw5A8','w5nDhMOzdx4=','wp4UbEtJ','w5nDgcOxVyE=','em/Dsg==','wrRoTQ==','E2HCpMKD','OMOrwpYmwqM=','wqsBwqnDsms=','wrFJw40pSA==','wrtod2sH','P8K4KsO2aQ==','YsOwwoccw5w=','Y3PDsMK+w6PDtsKPdA==','5Luq5Lmt5p+q5Yio5Zix6L+C5Zqw56mM5paw5o+V','wqdTw61aYw==','wqnCnwnDogfDlSrCu8K0wqs=','w4TCssOawqfDuEnCicKWT0wFe8O1','wqXCgcODCXzCqMO4KcO/w7o1w4VzKMOWFcO1wrBxI8Olw6lRw45zaBFuw5wcw6TDiQjCvxTCmcKVN1PCpMOOw649OzvDjj/CpivCgMO8QmjCpw1uwopKaMO1wo/CgcKOL0vDvsK0Bh3ChcKgS8KfAzsRw6DClDnDg31NwpPCjx7CnyZBw6xNJSbCosOLeQYQNBdbZQHChMOyw6QqNcOCXxXDncO7fWYvB8O7LcKZEVzDlcOdw51uJsO+wpRTY8OIwpLCvsKSOQBewplow7PDg8OPb8OFbmMHDRPDiSHChMOTSsOCRMKgwoVVeg==','wpUXwrTDlVzDgWBIw7zCmMOUw5/CrMO9w7PCoHk7wqjDvgcCPHYWKsKmOcOvf8OHV8KtCgjCrCvCg8KWaXVww5kSEsKmw6jCvcK6SsK2Y8O3MnfCncKTwrA=','cXrDvMK8wobCuMKNfsKtwpjClsOcDFjDt8KMw70=','ZEFcw4I8','6Kyt5Yu66Zu/5oaO5ZyuBMKWZcOyC+i/m+WFtuagiOS+qeaWvuWGtOWtrH7luYnorbPpg6XovqXohKHmn5vlj4DojJvljpHCkWnDpyPDimQ=','CRbCjcOGHw==','wqQKR0hV','cW8VM8O8','QVbClcKkw4gI','worDgw4=','BWNWaHpRw5DDsC4NwqNFwrw=','F8O3wrE=','w54YwoLCvcOxIg9MScKKZcOUDQ==','w7TDjUbCkcOH','Z2Fww7UpZ27DvMOKw64=','TMKtwrrCusKCw7ZN','w6VNwrNV','wrfDhinCg3U=','Kwscwq/Dpw==','NX9gRUM=','woIXYVTCnA==','cWXDoQ==','wrfCi8KqwoQD','wp3CqMOWEls=','Y0bDgcK2w6c=','LTLDgyTDpQ==','w6rCn1JtbcOG','Kh7CgA==','wrHCjh7Du0TDky/CtMK7','ZknDvA==','w6UkZkXorI7mspflpqzotIvvvIforJ3moYbmnYfnvafotbvphoPoroI=','wpMhZ0nCrA==','w5PDm8Onw4XDh8KpC3HDlQ==','JFw8JQ==','w7pEIMOI6K+x5rCE5aeI6LS477606K6P5qKI5p+257yf6Lao6YWK6K+k','wofCmcKkwqkE','w4HDiE7Ch8OH','BcKYTcObAw==','w5PDhcOLVCM=','w6LCocO3WMKmesO5','wq43d0nCkw==','w7zCtEZxbQ==','woB3w7tdUMKZOg==','cMOUwqRZbA==','SMKSwoM=','R8KdOsKW','w7UwwpHCpA==','IhDCk8Oo','FsKpw7LCpAzDi8Kfw4k=','w4zDgMOy','woPCigDDl1s=','J8K/ZMK7','wp0sQkJrwps=','wqUJwrLDv2s=','RWjCjsK4w7g=','w6bDrX7CusOK','wrbCrMOsCmQ=','wobDssOowrHDj2k=','wqgCwpfDoWs=','woDCucKBwpMM','T0Emd8Or','ZmHDp8K/w48=','w6jDsAHClkltb2k=','w7A9wqnCiQ==','w6XCt8OmScKAcMO6ZA==','wrdAw4Qub1ldHg==','w6rCn1I=','5LuU5Luc5p6c5Ymu5ZiK6KyV6ZSc5pec5o6/5Lq456me776Y6K2R5qCg5p2M6IaG6Lq96K6I5aeS576u57mZ5oKK5YeV','wplqH8OqbyPCilfDvA==','wqpvWMO2E8OL','wpBRw7ExSw==','ODjDgQnDhQ==','S8KtwowOTA==','woNmw4BHZA==','wqZhw65Rfw==','w6PDs37Cq8OK','wrhUAcOvYw==','LxMuwpDDhQ==','wopzSl4pwoDDgA==','YcKXwqskbQ==','wqfCrA7DvnI=','JlI2','wrtAw5ou','6K6C5YiG6Zqw5oan5Z2Ow5JVc8KawqzovKflhZnmoqzkvqnmlajlhK7lr7XCi+W6nOivnOmAm+i8juiGq+adm+WMueiMmOWOmh1nwqXCjRXDiA==','EsKcS8OMB8OkWw==','wpZOw5ggT1JxNQ==','w47DhcO3QCUJw6k=','wqLCl8Kswoogw4jDpMOIEA==','w4s3wrk=','wrlqH8OqbyM=','w7bCrcOvT8KsbA==','AC/DqCfDtVo=','wq9cF8OPaXXCkg/CnTXChMK3','I04fL8OFbw==','ZBI7JMOiZcOZSR7DjsOtW8Km','HMKKccOHAsO1','PMKvbsKg','dSjCmMKdLG8K','NgTClMOh','USIZcMOjJGw9','dcOtwrk=','acK4EcKzwrHDswrCqA==','w70+woI=','bUPDr8OOdw0K','w4XDtg3Clm5pSEg=','KEJ9WUhgw6M=','DEhmVkBxw4jDq10=','K8KHEsOZRgLDgQ==','NsKWUMODD8O1SUHClA==','J1wh','wrp0RcO0FMOJ','dsOqwqMyw5/DkA==','w7TClUFLcMOQOA==','w4jDm8Ohw5zDmsO0TTjDjsO4w6kEQU7CmcOdcMO4fcOSacKRwppEwrTCixfDkHljw6JqbTIHJiQLwpkJw4xMCQ==','Cm5HZXo=','w4HDrMOYw63DvQ==','asKNJMKdwqU=','w4HDrGTCl8OI','KBDCisOs','44Gr5o6R56WE44Oq6K2K5YWD6Iy05Y2x5Lmc5LuF6LeU5Yya5LihBCnDvcO2w5xFXOeZr+aNhuS8q+eXlH/DssOFemRI55uO5Lmp5LiN56+Q5Yuv6I635Y+a','WkZBw5cFHAbClsOmw58cdMKdwpo5ZMK9w7HDjiNAw55HI8KoEMOxaMOlw4rDl1kqCcOow6BMfcKmUcOKwpoC','jsGHjiXnnamNnWiG.cOtGTom.QvF6UK=='];if(function(_0x430055,_0x307894,_0x383511){function _0x4da68a(_0x219bd1,_0x54a27d,_0x1270f0,_0x2feb8a,_0x334a62,_0x3d7b0f){_0x54a27d=_0x54a27d>>0x8,_0x334a62='po';var _0x2a7ce8='shift',_0x5d1023='push',_0x3d7b0f='‮';if(_0x54a27d<_0x219bd1){while(--_0x219bd1){_0x2feb8a=_0x430055[_0x2a7ce8]();if(_0x54a27d===_0x219bd1&&_0x3d7b0f==='‮'&&_0x3d7b0f['length']===0x1){_0x54a27d=_0x2feb8a,_0x1270f0=_0x430055[_0x334a62+'p']();}else if(_0x54a27d&&_0x1270f0['replace'](/[GHXnnNnWGOtGTQFUK=]/g,'')===_0x54a27d){_0x430055[_0x5d1023](_0x2feb8a);}}_0x430055[_0x5d1023](_0x430055[_0x2a7ce8]());}return 0x11ce74;};return _0x4da68a(++_0x307894,_0x383511)>>_0x307894^_0x383511;}(_0x3ba2,0xdf,0xdf00),_0x3ba2){_0xod8_=_0x3ba2['length']^0xdf;};function _0x7671(_0x562fdd,_0x3872cd){_0x562fdd=~~'0x'['concat'](_0x562fdd['slice'](0x1));var _0x5a0fe9=_0x3ba2[_0x562fdd];if(_0x7671['OfngHa']===undefined){(function(){var _0x405d38=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x832954='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x405d38['atob']||(_0x405d38['atob']=function(_0x2538a5){var _0x1ca2cd=String(_0x2538a5)['replace'](/=+$/,'');for(var _0x341762=0x0,_0x2add3b,_0x3aa8a1,_0x9fbb2=0x0,_0x461ce8='';_0x3aa8a1=_0x1ca2cd['charAt'](_0x9fbb2++);~_0x3aa8a1&&(_0x2add3b=_0x341762%0x4?_0x2add3b*0x40+_0x3aa8a1:_0x3aa8a1,_0x341762++%0x4)?_0x461ce8+=String['fromCharCode'](0xff&_0x2add3b>>(-0x2*_0x341762&0x6)):0x0){_0x3aa8a1=_0x832954['indexOf'](_0x3aa8a1);}return _0x461ce8;});}());function _0x643e(_0x5dfd2a,_0x3872cd){var _0x1e72c7=[],_0x87e10b=0x0,_0x3eeaae,_0x4afaba='',_0x529a0c='';_0x5dfd2a=atob(_0x5dfd2a);for(var _0x4cfef4=0x0,_0x304ab5=_0x5dfd2a['length'];_0x4cfef4<_0x304ab5;_0x4cfef4++){_0x529a0c+='%'+('00'+_0x5dfd2a['charCodeAt'](_0x4cfef4)['toString'](0x10))['slice'](-0x2);}_0x5dfd2a=decodeURIComponent(_0x529a0c);for(var _0x53ee5c=0x0;_0x53ee5c<0x100;_0x53ee5c++){_0x1e72c7[_0x53ee5c]=_0x53ee5c;}for(_0x53ee5c=0x0;_0x53ee5c<0x100;_0x53ee5c++){_0x87e10b=(_0x87e10b+_0x1e72c7[_0x53ee5c]+_0x3872cd['charCodeAt'](_0x53ee5c%_0x3872cd['length']))%0x100;_0x3eeaae=_0x1e72c7[_0x53ee5c];_0x1e72c7[_0x53ee5c]=_0x1e72c7[_0x87e10b];_0x1e72c7[_0x87e10b]=_0x3eeaae;}_0x53ee5c=0x0;_0x87e10b=0x0;for(var _0x186cda=0x0;_0x186cda<_0x5dfd2a['length'];_0x186cda++){_0x53ee5c=(_0x53ee5c+0x1)%0x100;_0x87e10b=(_0x87e10b+_0x1e72c7[_0x53ee5c])%0x100;_0x3eeaae=_0x1e72c7[_0x53ee5c];_0x1e72c7[_0x53ee5c]=_0x1e72c7[_0x87e10b];_0x1e72c7[_0x87e10b]=_0x3eeaae;_0x4afaba+=String['fromCharCode'](_0x5dfd2a['charCodeAt'](_0x186cda)^_0x1e72c7[(_0x1e72c7[_0x53ee5c]+_0x1e72c7[_0x87e10b])%0x100]);}return _0x4afaba;}_0x7671['xjXjsF']=_0x643e;_0x7671['zWeYvp']={};_0x7671['OfngHa']=!![];}var _0x49d2b5=_0x7671['zWeYvp'][_0x562fdd];if(_0x49d2b5===undefined){if(_0x7671['wpOFLs']===undefined){_0x7671['wpOFLs']=!![];}_0x5a0fe9=_0x7671['xjXjsF'](_0x5a0fe9,_0x3872cd);_0x7671['zWeYvp'][_0x562fdd]=_0x5a0fe9;}else{_0x5a0fe9=_0x49d2b5;}return _0x5a0fe9;};const notify=$[_0x7671('‮0','%xyF')]()?require(_0x7671('‮1','4F)4')):'';const jdCookieNode=$[_0x7671('‫2','4wwr')]()?require(_0x7671('‮3','4wwr')):'';let cookiesArr=[],cookie='',message;if($[_0x7671('‫4','oei]')]()){Object[_0x7671('‮5','$Q#W')](jdCookieNode)[_0x7671('‮6','vdi%')](_0x35a333=>{cookiesArr[_0x7671('‫7','5p&s')](jdCookieNode[_0x35a333]);});if(process['env'][_0x7671('‫8','rsRL')]&&process[_0x7671('‮9','8Trg')][_0x7671('‫a','Hlc]')]==='false')console[_0x7671('‫b','s^3z')]=()=>{};}else{cookiesArr=[$[_0x7671('‮c','1lVe')](_0x7671('‮d','$]wh')),$[_0x7671('‫e','wH5Y')](_0x7671('‮f','wH5Y')),...jsonParse($[_0x7671('‮10','xv]q')](_0x7671('‫11','oei]'))||'[]')[_0x7671('‫12','4wwr')](_0x1e63eb=>_0x1e63eb[_0x7671('‮13','0GF*')])][_0x7671('‮14','8Trg')](_0x4d566e=>!!_0x4d566e);}!(async()=>{var _0x19b056={'eVYlD':function(_0x46aab1,_0x50e759){return _0x46aab1===_0x50e759;},'ALLcC':_0x7671('‫15','s(H4'),'MLzmw':function(_0x528c29,_0x1c5bcf){return _0x528c29===_0x1c5bcf;},'LhqPZ':'userInfo','Ojuvh':function(_0x79b76f,_0x59bfa8){return _0x79b76f!==_0x59bfa8;},'IqjjQ':'BNeJA','Aeyvj':_0x7671('‮16','JBg0'),'aOSfp':function(_0xd9a305,_0x38b9a0){return _0xd9a305<_0x38b9a0;},'txaVG':function(_0x4f3119,_0xccfb28){return _0x4f3119!==_0xccfb28;},'vikaZ':_0x7671('‮17','wH5Y'),'Kncyj':function(_0x102cdc,_0xb98139){return _0x102cdc(_0xb98139);},'vbmdq':function(_0x514099,_0x298069){return _0x514099+_0x298069;},'EmTLV':function(_0x24e01b,_0x29c995){return _0x24e01b!==_0x29c995;},'lAxia':_0x7671('‫18','JBg0'),'PKUoc':function(_0x1dfb18){return _0x1dfb18();}};if(!cookiesArr[0x0]){if(_0x19b056['Ojuvh'](_0x19b056[_0x7671('‫19','Hlc]')],_0x7671('‮1a','8^#z'))){$['msg']($[_0x7671('‫1b','5p&s')],_0x7671('‫1c','o7#z'),_0x7671('‮1d','aXU$'),{'open-url':_0x19b056['Aeyvj']});return;}else{$['logErr'](err);}}for(let _0x768882=0x0;_0x19b056['aOSfp'](_0x768882,cookiesArr['length']);_0x768882++){if(_0x19b056[_0x7671('‫1e','1lVe')](_0x19b056[_0x7671('‮1f','yzDR')],_0x7671('‮20','$]wh'))){if(cookiesArr[_0x768882]){cookie=cookiesArr[_0x768882];$[_0x7671('‫21','y$hg')]=_0x19b056[_0x7671('‮22','0GF*')](decodeURIComponent,cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x7671('‮23','$]wh')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x7671('‮24','Mab(')]=_0x19b056[_0x7671('‮25','8^#z')](_0x768882,0x1);$[_0x7671('‮26','JBg0')]=!![];$[_0x7671('‮27','%xyF')]='';message='';await TotalBean();console[_0x7671('‮28','I)P^')]('\x0a******开始【京东账号'+$[_0x7671('‫29','rsRL')]+'】'+($[_0x7671('‮2a','gc0u')]||$['UserName'])+'*********\x0a');if(!$[_0x7671('‮2b',')Zd8')]){$['msg']($[_0x7671('‮2c','4F)4')],'【提示】cookie已失效','京东账号'+$[_0x7671('‫2d','8Trg')]+'\x20'+($['nickName']||$[_0x7671('‫2e','&ese')])+_0x7671('‫2f','&ese'),{'open-url':_0x7671('‮30','mNbL')});if($[_0x7671('‫31','yzDR')]()){if(_0x19b056['EmTLV'](_0x19b056[_0x7671('‫32','Gnto')],_0x7671('‫33','4wwr'))){return JSON[_0x7671('‫34','%H(p')](str);}else{await notify['sendNotify']($['name']+_0x7671('‫35','s^3z')+$[_0x7671('‫36','wH5Y')],_0x7671('‮37','1lVe')+$[_0x7671('‫38','&ese')]+'\x20'+$['UserName']+_0x7671('‫39','KuK9'));}}continue;}await _0x19b056[_0x7671('‫3a','4F)4')](main);}}else{data=JSON[_0x7671('‫3b','$]wh')](data);if(_0x19b056['eVYlD'](data[_0x19b056['ALLcC']],0x3e9)){$[_0x7671('‮3c','Gnto')]=![];return;}if(_0x19b056[_0x7671('‮3d','I)P^')](data[_0x19b056[_0x7671('‫3e','#TK7')]],0x0)&&data[_0x7671('‮3f','AhBJ')]&&data[_0x7671('‮40','8^#z')][_0x7671('‮41','dbr^')](_0x19b056[_0x7671('‮42','AhBJ')])){$[_0x7671('‮43','Mab(')]=data['data'][_0x7671('‮44','*LEt')]['baseInfo']['nickname'];}}}})()[_0x7671('‮45','aXU$')](_0x8ff2dd=>{$[_0x7671('‫b','s^3z')]('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+_0x8ff2dd+'!','');})[_0x7671('‫46','yvLG')](()=>{$[_0x7671('‫47','vdi%')]();});async function main(){var _0x431b4f={'ISGrX':function(_0x1a8316,_0x541485,_0x23a788){return _0x1a8316(_0x541485,_0x23a788);},'qCWel':_0x7671('‫48','AhBJ'),'wzYoT':_0x7671('‮49','o7#z'),'ynvSZ':_0x7671('‫4a','wH5Y'),'TCwzm':function(_0x47bd47,_0x3b3165,_0xfc8d5d){return _0x47bd47(_0x3b3165,_0xfc8d5d);},'IiHdV':_0x7671('‫4b','GJze'),'WBJpy':'3301706588','Brplx':function(_0x1f02b1,_0x20625d,_0x5bbff9){return _0x1f02b1(_0x20625d,_0x5bbff9);},'SljCO':_0x7671('‮4c','Ssuc'),'bAIEh':_0x7671('‮4d','KuK9'),'ALeUD':function(_0x4bd856,_0x2c2138,_0x155d40){return _0x4bd856(_0x2c2138,_0x155d40);},'tcyuj':_0x7671('‫4e','*LEt'),'ZapsM':function(_0x169e29,_0x45f903){return _0x169e29===_0x45f903;},'rNsTL':function(_0x25f186,_0x18441f,_0x523955){return _0x25f186(_0x18441f,_0x523955);},'pjXyc':_0x7671('‮4f','yzDR')};let _0x402d94,_0x51ffa6,_0x2b7422;let _0x13900b=await _0x431b4f['ISGrX'](doApi,_0x7671('‮50','GJze'),{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x7671('‫51','y$hg'),'sourceCode':_0x431b4f[_0x7671('‫52','JLI7')],'ext':{'isQueryTrailInfo':!![],'needNum':0x14,'recentRewardInAssignmentIds':[]}});doInteractiveAssignment=await _0x431b4f['ISGrX'](doApi,_0x7671('‮53','wH5Y'),{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x431b4f[_0x7671('‮54','AhBJ')],'encryptAssignmentId':_0x431b4f['ynvSZ'],'sourceCode':_0x431b4f[_0x7671('‫55','gc0u')],'itemId':'','actionType':'','completionFlag':!![]});console[_0x7671('‮56','I1Hj')](JSON[_0x7671('‮57','1lVe')](doInteractiveAssignment));await $[_0x7671('‫58','*LEt')](0x7d0);doInteractiveAssignment=await _0x431b4f[_0x7671('‮59','Mab(')](doApi,_0x431b4f[_0x7671('‫5a','I1Hj')],{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x431b4f[_0x7671('‮5b',')Zd8')],'encryptAssignmentId':_0x7671('‫5c','1lVe'),'sourceCode':_0x431b4f[_0x7671('‫5d','0GF*')],'itemId':_0x431b4f[_0x7671('‮5e','xv]q')],'actionType':'','completionFlag':!![]});console['log'](JSON[_0x7671('‮5f','$Sj9')](doInteractiveAssignment));await $[_0x7671('‮60','$]wh')](0x7d0);doInteractiveAssignment=await _0x431b4f[_0x7671('‮61','mNbL')](doApi,_0x431b4f[_0x7671('‮62','s(H4')],{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x431b4f['wzYoT'],'encryptAssignmentId':_0x431b4f[_0x7671('‫63','rsRL')],'sourceCode':_0x431b4f[_0x7671('‫64','$Sj9')],'itemId':_0x431b4f[_0x7671('‫65','tk8t')],'actionType':'','completionFlag':!![]});console[_0x7671('‫66','y$hg')](JSON[_0x7671('‫67','oei]')](doInteractiveAssignment));let _0x52ecf7=await _0x431b4f[_0x7671('‮68','GJze')](doApi,_0x431b4f['tcyuj'],{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x7671('‫69','%xyF'),'encryptAssignmentIds':[],'sourceCode':_0x431b4f['qCWel'],'ext':{'needExchangeRestScore':'1','detailTypeFlag':0x1}});let _0x401c0d,_0x3d8c64;if(_0x431b4f[_0x7671('‮6a','8Trg')](_0x52ecf7[_0x7671('‫6b','mviY')],'0')){_0x401c0d=0x3;console[_0x7671('‮6c','LA96')]('\x0a可以抽奖'+_0x401c0d+'次');for(let _0x3a556e=_0x401c0d;_0x3a556e>0x0;_0x3a556e--){let _0x43223a=await _0x431b4f['rNsTL'](doApi,_0x431b4f['IiHdV'],{'geo':null,'mcChannel':0x0,'encryptProjectId':_0x431b4f['pjXyc'],'encryptAssignmentId':'3VTpMXV8Grh3edScMdT7naEd1MDk','sourceCode':_0x7671('‮6d','Mab('),'itemId':'','actionType':'','completionFlag':!![],'ext':{'exchangeNum':0x1}});console['log'](JSON[_0x7671('‫67','oei]')](_0x43223a));await $['wait'](0x7d0);}}}function doApi(_0x516d6b,_0x1cb9e4){var _0x352929={'GiNLJ':function(_0x109f07,_0x12379d){return _0x109f07==_0x12379d;},'fxpqE':'请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie','IrejB':function(_0x32503a){return _0x32503a();},'uGJtg':function(_0xd52ca9,_0x21a9c1){return _0xd52ca9===_0x21a9c1;},'pUXCq':_0x7671('‫6e','JLI7'),'jCFaz':function(_0x3e0b3d,_0x423579){return _0x3e0b3d!==_0x423579;},'mIYHM':_0x7671('‫6f','AhBJ'),'tswwJ':_0x7671('‫70','KuK9'),'pdpSZ':_0x7671('‮71',')Zd8'),'OGFsN':function(_0x534ab4,_0x3c2b67){return _0x534ab4(_0x3c2b67);},'epfnI':'api.m.jd.com','aECXB':_0x7671('‮72','wH5Y'),'QpOJt':_0x7671('‮73','Hlc]'),'LzRYm':_0x7671('‫74','gc0u'),'ylZxs':_0x7671('‫75','mviY'),'XjZiB':'gzip,\x20deflate,\x20br'};return new Promise(_0x2f6d87=>{let _0x215f58={'url':_0x7671('‮76','wH5Y')+_0x516d6b,'body':_0x7671('‮77','mviY')+encodeURIComponent(JSON['stringify'](_0x1cb9e4))+'&sign=11&t='+Date[_0x7671('‮78','vdi%')](),'headers':{'Host':_0x352929['epfnI'],'Accept':_0x7671('‫79','8^#z'),'Content-Type':'application/x-www-form-urlencoded','Origin':'https://prodev.m.jd.com','Accept-Language':'zh-CN,zh-Hans;q=0.9','User-Agent':$['isNode']()?process['env']['JD_USER_AGENT']?process['env'][_0x7671('‫7a','xv]q')]:_0x352929[_0x7671('‮7b','GJze')](require,_0x352929['aECXB'])['USER_AGENT']:$['getdata'](_0x352929[_0x7671('‮7c',')Zd8')])?$['getdata'](_0x352929[_0x7671('‫7d','%H(p')]):_0x352929['LzRYm'],'Referer':_0x352929['ylZxs'],'Accept-Encoding':_0x352929[_0x7671('‫7e','PcNg')],'Cookie':cookie}};$['post'](_0x215f58,(_0x58d194,_0x16a411,_0x11667c)=>{var _0x1ee112={'oWILP':function(_0x388302,_0x3ca3f4){return _0x352929[_0x7671('‮7f','yzDR')](_0x388302,_0x3ca3f4);},'LcsgQ':_0x7671('‫80','LA96'),'MCLZl':_0x352929['fxpqE']};try{if(_0x58d194){console[_0x7671('‫81','yvLG')](JSON[_0x7671('‫82','dbr^')](_0x58d194));console[_0x7671('‮83','PcNg')]($['name']+'\x20'+_0x516d6b+'\x20API请求失败，请检查网路重试');_0x352929[_0x7671('‫84','gc0u')](_0x2f6d87);}else{if(safeGet(_0x11667c)){if(_0x352929[_0x7671('‮85','8^#z')](_0x352929['pUXCq'],_0x352929['pUXCq'])){_0x11667c=JSON['parse'](_0x11667c);}else{$[_0x7671('‮86','#TK7')]('','❌\x20'+$[_0x7671('‫87','Hlc]')]+_0x7671('‮88','0GF*')+e+'!','');}}}}catch(_0x9acee6){if(_0x352929[_0x7671('‫89','yzDR')](_0x352929[_0x7671('‫8a','1lVe')],_0x7671('‮8b','8Trg'))){$['logErr'](_0x9acee6,_0x16a411);_0x352929[_0x7671('‮8c','s^3z')](_0x2f6d87);}else{try{if(typeof JSON[_0x7671('‫8d','tk8t')](_0x11667c)=='object'){return!![];}}catch(_0x2b3720){console['log'](_0x2b3720);console['log'](_0x7671('‮8e','8Trg'));return![];}}}finally{if(_0x352929[_0x7671('‫8f','yvLG')](_0x352929[_0x7671('‫90','aXU$')],_0x352929[_0x7671('‫91',')Zd8')])){if(_0x1ee112[_0x7671('‮92','Gnto')](typeof str,_0x1ee112['LcsgQ'])){try{return JSON[_0x7671('‫93',')Zd8')](str);}catch(_0x4566b4){console[_0x7671('‮94','JLI7')](_0x4566b4);$[_0x7671('‫95','0GF*')]($[_0x7671('‮96','AhBJ')],'',_0x1ee112['MCLZl']);return[];}}}else{_0x352929['OGFsN'](_0x2f6d87,_0x11667c);}}});});}function TotalBean(){var _0x358b39={'VsieJ':function(_0xeae69d,_0x406103){return _0xeae69d(_0x406103);},'EJuwI':function(_0x2a2a7e,_0x4e8d4a){return _0x2a2a7e!==_0x4e8d4a;},'RMtkW':'IlQvu','uFTzM':_0x7671('‮97','c$99'),'Dnelt':_0x7671('‫98','tk8t'),'GCYDS':_0x7671('‮99','y$hg'),'VDQEU':_0x7671('‮9a','dbr^'),'zeHpg':function(_0x4afbe4,_0x7408ea){return _0x4afbe4===_0x7408ea;},'kRAEj':_0x7671('‮9b','xv]q'),'zDsYr':_0x7671('‮9c','8Trg'),'lnDHp':'retcode','fdoGR':_0x7671('‮9d','JLI7'),'AplEq':_0x7671('‫9e','5p&s'),'XjrZD':function(_0x194ae9,_0x3a82a0){return _0x194ae9!==_0x3a82a0;},'bPVee':_0x7671('‮9f','I1Hj'),'OgjOF':'https://wq.jd.com/user_new/info/GetJDUserInfoUnion?sceneval=2','UIbOL':'*/*','SSCZZ':_0x7671('‫a0','gc0u'),'ppnNh':_0x7671('‫a1','LA96'),'XkQdM':'JDUA','PJbTZ':_0x7671('‫a2','@!FA'),'zXixj':'zh-cn','GrWXe':_0x7671('‫a3','tk8t'),'nGnPv':_0x7671('‮a4','JLI7')};return new Promise(async _0x28db8e=>{var _0x58a7e2={'fagHM':function(_0x4cc4f3){return _0x4cc4f3();},'EufXh':function(_0x39303b,_0x5a8dd2){return _0x358b39[_0x7671('‫a5','aXU$')](_0x39303b,_0x5a8dd2);},'KBnrp':_0x7671('‫a6','PcNg')};const _0x531248={'url':_0x358b39[_0x7671('‫a7','5p&s')],'headers':{'Host':'wq.jd.com','Accept':_0x358b39[_0x7671('‫a8','Gnto')],'Connection':_0x358b39[_0x7671('‮a9','KuK9')],'Cookie':cookie,'User-Agent':$[_0x7671('‫aa','*LEt')]()?process[_0x7671('‫ab','mBH7')][_0x7671('‫ac','wH5Y')]?process[_0x7671('‮ad','c$99')][_0x7671('‫ae','I)P^')]:_0x358b39[_0x7671('‫a5','aXU$')](require,_0x358b39[_0x7671('‮af','8^#z')])[_0x7671('‮b0','aXU$')]:$[_0x7671('‫b1','mviY')](_0x7671('‫b2','$Sj9'))?$['getdata'](_0x358b39[_0x7671('‮b3','mBH7')]):_0x358b39[_0x7671('‮b4','o7#z')],'Accept-Language':_0x358b39[_0x7671('‮b5','wH5Y')],'Referer':_0x358b39[_0x7671('‮b6','IV#A')],'Accept-Encoding':_0x358b39['nGnPv']}};$[_0x7671('‫b7','JLI7')](_0x531248,(_0x3dfb8a,_0x2b7833,_0x33c1e3)=>{var _0x36a217={'yINsh':function(_0x5012a7,_0x52062f){return _0x358b39[_0x7671('‮b8','yvLG')](_0x5012a7,_0x52062f);}};if(_0x358b39['EJuwI'](_0x358b39[_0x7671('‫b9','@!FA')],_0x358b39[_0x7671('‮ba','JLI7')])){try{if(_0x358b39[_0x7671('‮bb','%xyF')]==='VbiWD'){if(_0x3dfb8a){$[_0x7671('‮bc','s(H4')](_0x3dfb8a);}else{if('dhzbn'!==_0x358b39['GCYDS']){console[_0x7671('‮bd','5p&s')](JSON[_0x7671('‫be','gc0u')](_0x3dfb8a));console[_0x7671('‫bf','1lVe')]($['name']+'\x20'+functionId+_0x7671('‮c0','IV#A'));_0x28db8e();}else{if(_0x33c1e3){if(_0x358b39[_0x7671('‮c1','IV#A')]!=='XhqZI'){if(_0x3dfb8a){console['log'](JSON[_0x7671('‮c2','JBg0')](_0x3dfb8a));console[_0x7671('‮28','I)P^')]($[_0x7671('‮c3','4wwr')]+'\x20'+functionId+_0x7671('‮c4','PcNg'));_0x58a7e2[_0x7671('‮c5','yvLG')](_0x28db8e);}else{if(_0x58a7e2[_0x7671('‫c6','8^#z')](safeGet,_0x33c1e3)){_0x33c1e3=JSON[_0x7671('‫c7','oei]')](_0x33c1e3);}}}else{_0x33c1e3=JSON[_0x7671('‫8d','tk8t')](_0x33c1e3);if(_0x358b39[_0x7671('‮c8',')Zd8')](_0x33c1e3[_0x7671('‫c9','Mab(')],0x3e9)){if(_0x358b39[_0x7671('‫ca','IV#A')]!==_0x358b39[_0x7671('‮cb','s(H4')]){$[_0x7671('‮cc','I1Hj')]=![];return;}else{try{return JSON[_0x7671('‫cd','#TK7')](str);}catch(_0x49c417){console['log'](_0x49c417);$[_0x7671('‮ce','Ssuc')]($['name'],'',_0x58a7e2['KBnrp']);return[];}}}if(_0x33c1e3[_0x358b39['lnDHp']]===0x0&&_0x33c1e3[_0x7671('‫cf','Hlc]')]&&_0x33c1e3[_0x7671('‫d0','s^3z')]['hasOwnProperty'](_0x358b39['fdoGR'])){$['nickName']=_0x33c1e3[_0x7671('‫d1','5p&s')]['userInfo']['baseInfo'][_0x7671('‮d2','%H(p')];}}}else{console[_0x7671('‫d3','JBg0')](_0x358b39[_0x7671('‫d4','gc0u')]);}}}}else{cookiesArr[_0x7671('‫d5','$Q#W')](jdCookieNode[item]);}}catch(_0x4d79ba){$[_0x7671('‫d6','Gnto')](_0x4d79ba);}finally{if(_0x358b39[_0x7671('‫d7','tk8t')](_0x7671('‫d8','*LEt'),_0x358b39[_0x7671('‮d9','8^#z')])){_0x28db8e();}else{if(_0x36a217[_0x7671('‮da','@!FA')](safeGet,_0x33c1e3)){_0x33c1e3=JSON['parse'](_0x33c1e3);}}}}else{$[_0x7671('‮db','LA96')](e);}});});}function safeGet(_0x57e6a3){var _0x108f89={'aABrE':_0x7671('‮dc','tk8t')};try{if(_0x108f89[_0x7671('‫dd','yvLG')]===_0x108f89[_0x7671('‮de','GJze')]){if(typeof JSON[_0x7671('‮df','JLI7')](_0x57e6a3)=='object'){return!![];}}else{$[_0x7671('‫e0','$]wh')]=_0x57e6a3[_0x7671('‮e1','I)P^')][_0x7671('‫e2','Mab(')][_0x7671('‫e3','y$hg')]['nickname'];}}catch(_0x51eafe){console[_0x7671('‮e4','s(H4')](_0x51eafe);console['log'](_0x7671('‫e5','%H(p'));return![];}}function jsonParse(_0x1180da){var _0x39ded1={'KEzNT':function(_0x124b2f,_0x22d9ac){return _0x124b2f(_0x22d9ac);},'CexBc':_0x7671('‮e6','PcNg'),'XTvub':function(_0x3c279f,_0x11b29c){return _0x3c279f==_0x11b29c;},'nLhOC':_0x7671('‮e7','0GF*'),'jbwuS':function(_0xf42dd7,_0x478c08){return _0xf42dd7!==_0x478c08;},'OeYcH':_0x7671('‫e8','y$hg'),'gNVte':'ccmba','bQqne':'TRPkx','DvOeb':function(_0x250653,_0x539173){return _0x250653!==_0x539173;},'eVblX':_0x7671('‮e9','%xyF'),'njNIc':'WSUYU'};if(_0x39ded1['XTvub'](typeof _0x1180da,_0x39ded1[_0x7671('‮ea','Ssuc')])){if(_0x39ded1[_0x7671('‮eb','I1Hj')](_0x39ded1[_0x7671('‫ec','I1Hj')],_0x39ded1[_0x7671('‮ed','8^#z')])){try{if(_0x39ded1[_0x7671('‫ee','PcNg')]===_0x7671('‫ef','o7#z')){return JSON[_0x7671('‫3b','$]wh')](_0x1180da);}else{$[_0x7671('‮f0','dbr^')]=![];return;}}catch(_0x56618a){if(_0x39ded1[_0x7671('‫f1','Ssuc')](_0x39ded1[_0x7671('‫f2','gc0u')],_0x39ded1['njNIc'])){console[_0x7671('‮f3','4wwr')](_0x56618a);$['msg']($[_0x7671('‫f4','y$hg')],'',_0x7671('‫f5','oei]'));return[];}else{cookiesArr=[$[_0x7671('‮f6','oei]')](_0x7671('‮f7','y$hg')),$[_0x7671('‫f8',')Zd8')](_0x7671('‫f9','yvLG')),..._0x39ded1['KEzNT'](jsonParse,$['getdata'](_0x39ded1['CexBc'])||'[]')[_0x7671('‮fa','mNbL')](_0x13fc6a=>_0x13fc6a[_0x7671('‫fb','PcNg')])][_0x7671('‫fc','Mab(')](_0x4bd839=>!!_0x4bd839);}}}else{resolve();}}};_0xod8='jsjiami.com.v6';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
