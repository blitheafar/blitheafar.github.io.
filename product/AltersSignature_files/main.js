function pageHasPcScript(){
  if(document.documentElement.innerHTML.includes('production.pc.min.js')) return true;
  if(document.querySelector('script[src*="production.pc.min.js"]')) return true;
  return false;
}

if(pageHasPcScript()){
  console.log('Pop Convert script found')
} else {
  const script = document.createElement('script')
  script.id = 'ck-pc-embed-script'
  script.setAttribute('src',`https://script.pop-convert.com/new-micro/production.pc.min.js`);
  script.async = true
  document.head.appendChild(script)    
}
