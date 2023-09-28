

export const mobileTest=()=>{
    //!mobile testing
  const devInfo = navigator.userAgent;
  const regexDev = /android|iphone|kindle|ipad/i;

  const isMobileDev = regexDev.test(devInfo);
if(isMobileDev){
    document.documentElement.append.className = 'mobile'
} else{
    document.documentElement.append.className = 'desktop'
}
 

}