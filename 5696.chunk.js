/*! For license information please see 5696.chunk.js.LICENSE.txt */
(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[5696,1953],{11897:function(e,u,a){!function(e){"use strict";var u="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),a=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",u[7],u[8],u[9]];function n(e,n,t,s){var i="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"ss":i=s?"sekunnin":"sekuntia";break;case"m":return s?"minuutin":"minuutti";case"mm":i=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":i=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":i=s?"päivän":"päivää";break;case"M":return s?"kuukauden":"kuukausi";case"MM":i=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":i=s?"vuoden":"vuotta"}return function(e,n){return e<10?n?a[e]:u[e]:e}(e,s)+" "+i}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(a(30381))},71953:(e,u,a)=>{var n={"./es-us":71146,"./es-us.js":71146};function t(e){var u=s(e);return a(u)}function s(e){if(!a.o(n,e)){var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=s,e.exports=t,t.id=71953}}]);