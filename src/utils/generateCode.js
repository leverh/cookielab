export function getBannerHTML(state) {
  const isCorner = state.pos === 'corner'
  const padding = isCorner ? '20px' : '16px 24px'
  const flexDir = isCorner ? 'column' : 'row'
  const align = isCorner ? 'flex-start' : 'center'
  const justify = isCorner ? 'flex-start' : 'space-between'
  const borderRadius = isCorner ? '12px' : '0'
  const maxW = isCorner ? '320px' : '100%'

  return `<div id="cookieBanner" style="background:${state.cBg};color:${state.cText};padding:${padding};display:flex;flex-direction:${flexDir};align-items:${align};justify-content:${justify};gap:${isCorner ? '14px' : '16px'};font-family:sans-serif;border-radius:${borderRadius};max-width:${maxW};box-shadow:0 4px 24px rgba(0,0,0,0.18);">
  <p style="margin:0;font-size:14px;line-height:1.5;flex:1;">${state.msg}${state.learnMore ? ` <a href="#" style="color:${state.cLink};text-decoration:underline;">${state.learnMore}</a>` : ''}</p>
  <div style="display:flex;gap:8px;flex-shrink:0;${isCorner ? 'width:100%;' : ''}">
    <button id="cookieDecline" style="padding:8px 16px;border-radius:6px;border:none;background:${state.cDecline};color:${state.cBtnText};font-size:13px;cursor:pointer;${isCorner ? 'flex:1;' : ''}font-family:sans-serif;">${state.btnDecline}</button>
    <button id="cookieAccept" style="padding:8px 16px;border-radius:6px;border:none;background:${state.cAccept};color:${state.cBtnText};font-size:13px;cursor:pointer;${isCorner ? 'flex:1;' : ''}font-family:sans-serif;font-weight:500;">${state.btnAccept}</button>
  </div>
</div>`
}

export function getPositionCSS(pos) {
  if (pos === 'top') return 'position:fixed;top:0;left:0;right:0;z-index:9999;'
  if (pos === 'corner') return 'position:fixed;bottom:20px;right:20px;z-index:9999;width:320px;'
  return 'position:fixed;bottom:0;left:0;right:0;z-index:9999;'
}

export function getAnimCSS(anim, pos) {
  if (anim === 'none') return ''
  if (anim === 'fade') {
    return `
@keyframes cookieFadeIn { from { opacity: 0; } to { opacity: 1; } }
#cookieBanner { animation: cookieFadeIn 0.4s ease; }`
  }
  const dir = pos === 'top' ? 'translateY(-100%)' : 'translateY(100%)'
  return `
@keyframes cookieSlideIn { from { transform: ${dir}; opacity: 0; } to { transform: translateY(0); opacity: 1; } }
#cookieBanner { animation: cookieSlideIn 0.4s ease; }`
}

export function getFullHTML(state) {
  return `<!-- Cookie Banner -->
<style>
#cookieBannerWrap { ${getPositionCSS(state.pos)} }${getAnimCSS(state.anim, state.pos)}
</style>

<div id="cookieBannerWrap">
  ${getBannerHTML(state)}
</div>`
}

export function getJS(output) {
  if (output === 'html') return '/* No JavaScript — add your own dismiss logic */'
  return `document.addEventListener('DOMContentLoaded', function() {
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  if (localStorage.getItem('cookieConsent')) {
    banner.style.display = 'none';
    return;
  }

  document.getElementById('cookieAccept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
  });

  document.getElementById('cookieDecline').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'declined');
    banner.style.display = 'none';
  });
});`
}
