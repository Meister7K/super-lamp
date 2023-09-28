

export const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

export const keepTheme=()=> {
    console.log(localStorage.getItem('theme'))
if(!localStorage.getItem('theme')){
    setTheme('theme-light')
}
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-dark')
  }
}