	


jQuery(document).ready(function($){

    $('#page').prepend("<div id='contain_btn'><div class='containeropenFrame'><div class='containerOpenFrame1'><div class='containerClose'><img id='closePopup' src='' width='18px' height='18px' /></div><div class='logoCompagny'><img src='' width='95%' height='95%'></img></div><div class='containerOpenBody'><p class='titleContaineOpenFrame'>Bienvenue, <img src='' class='imgScrCustom' width='18px' height='18px'></img></p><p class='descriptontaineOpenFrame'>Commandez à emporter ou en livraison chez nous.</p><div class='btn1' id='button_action_open'><p>Commandez</p></div></div></div><div id='container_open_button'><div class='btn2' id='button_action_open2'><img src='' width='24px' height='19px'></img></div></div></div></div><div class='container_close_button'><span class='button_action_close'><img src='https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close'></img></span></div><nav class='sidebar' style='background-color: #fff !important'><iframe id='UrlGame' style='max-height:100%!important' src='' frameborder='0' width='100%' height='100%'></iframe></nav><p class='text'>Propulsé par <span><a class='acustom' href='https://belorder.com/'>Belorder</a></span> <img class='propulsed' src='' width='18px' height='18px' /></p><div class='back_close'></div>");
  const queryString = decodeURIComponent(window.location.href);
  const urlParams = new URLSearchParams(queryString);
  
  console.log(queryString, 'queryString')
  
  const colorTextButton = urlParams.get('color')
  const backgroundButton =  urlParams.get('Background')
  const logo = urlParams.get('logo')
  const logoButton = urlParams.get('logoButton')
  const iframeUrl = urlParams.get('iframeUrl')

  console.log('params', backgroundButton, colorTextButton, logo, logoButton,iframeUrl )

  const SetcolorBackgroundButton = document.getElementsByClassName('btn2');
  SetcolorBackgroundButton[0].style.color = colorTextButton
    SetcolorBackgroundButton[0].style.background = backgroundButton

    const SetcolorBackgroundButton2 = document.getElementsByClassName('btn1');
  SetcolorBackgroundButton2[0].style.color = colorTextButton
    SetcolorBackgroundButton2[0].style.background = backgroundButton

    const setSrcUrlBtn2 = document.getElementsByClassName('btn2')[0].firstChild.src = logoButton
    const imgScrCustom = document.getElementsByClassName('imgScrCustom')[0].src ="https://emojis.wiki/emoji-pics/apple/waving-hand-apple.png";
    const closePoPup = document.getElementsByClassName('containerClose')[0].firstChild.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8jHyAAAAAJAAALAAMNBAdoZmdiYGFmZGRta2sFAABpZ2hwbm8YExRbWFlhXl+dnJweGhsTDQ/T09O0s7M2MzNMSUqHhYbFxMWWlJQXEhNWVFRzcnIz5JTBAAAEQklEQVR4nO2d63aqMBCFBUVEpFatWtu+/3MeKeUUJbsEGEgya3+/XbMyzhWSDIsFIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIEeR026X59X0i6e/XLN3dThNJt+F0iZOPojjG57cJpL+d42NRfCTxxZmOr3ERVRzijbj0dXz4kV7Er+LSrXiNo19WL8LSX1YN6W5UPDUVjKJkLyp9nzxIj1046qWIplPxScGouAgKt+TJhKWKn2LCP5Nn4Q6MeGstQs6KzxYsZd+EZNuzK1qriJJURPSmrWD0sRMR3YfUoGGUSGRUgwXvgSjz5/UhM2kooeKLScGoyATW3I/r0bSQ8Y5qctE7x6vIqvvw3sqlIioCBaN4qt73D84H81pGdTcPnUyDw1ls3fa8ASOOsWIKFIziKVr7TtZoOcnQNhy5aLRai67cGnPWG27FFMqTbuvHL2lQLKIYlG7qe2Eszt8q9nfUDVTQmQVL2i1yvay+KuKolmvoB4EdtZ9rwSzq0kUrcP7rk27SJVJw/n60xR79+6vcWkYGFXQagzVYRdsqlvuZZH6Bjrq0iyGvXbQCJvqlTUbN/Vfwj2JtEYuZ7y5aAZN9Z+nHddB5mXhkPTAWcQzKv0UfCY7FvxwVlwmPYrBmSF2EMSi+SSACLhrIHpuQLFgCkwYoGrBMDHgymQmYNpamd4E7qKBnWbQJdLtVW0WsoKcuWgFTR8tR8y1S0L5hdwJM/9tHK+6QgktHL53swbHY3Fv5gr/yOAZr4KNQo/RDS/ubRZvA5f93wGBjsAbWuR9H/YIxGIQFS2DR+FYx6BisgUVjmy8ytN8RiotWwFg8ns37jqDv8RjoqGBPDrfn3gLTDVAwmCTzC+w7jQrOf9RCANiYtdkGFoM1sLC3FAzQRSssHTW0LNoEFvcHBYOMwZqs21FDtmBJp4r+Pw920eGoYbtoxRfqQ0u2ChS8OyrqRO9dalDNNgadD3NzlmsC1NtQfRyqz6Xq66FNTxN0LKrvS9U/W6h/PlT/jN/rPY1hf9F71L9rU/++dMg776Dqovp9C/V7T2vt+4fde8CwWw3DUdXv46s/iwELvZbzNLhMKDkTpf5cm10M1sBY9PdsIj5fao4tfATa04yq/oyw+nPe8MaFlrP6Q+9bYEf1LBbxRUsld2bU33tSf3dN/f3D8XdIPXdU9feAZe5ye9zd4KkK/ZaGJyo4LhqCMxWgJKczFaQsWOLlXAzZ2SYwZblzVPXzabBbyc8YctKG658TpX7Wl/55bWjm3tiI8Wfm3nrmuYnzvwrfzzz7cv6aaJp9OeH8UgezL00zaKWeAwyl38EMWv1zhPXPgm7N85Z9VH1yVCfzvPXPZH+cqy9frjyYq199G6GY+NsIhctvIyzK71tk+/WE37fI95nT71sQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQo5B8vlDCBniO5qwAAAABJRU5ErkJggg==";
    const logoCompagny = document.getElementsByClassName('logoCompagny')[0].firstChild.src = logo
    const linkFrame = document.getElementsByClassName('sidebar')[0].firstChild.src = iframeUrl
     const propulsed = document.getElementsByClassName('propulsed')[0].src ="https://cdn-0.emojis.wiki/emoji-pics/facebook/rocket-facebook.png";




  var body = document.getElementsByTagName('body');
  var script2 = document.createElement("script"); 
  script2.src = 'https://code.jquery.com/jquery-3.5.0.js';  

  document.body.appendChild(script2);  

  $('#closePopup').click(function () {
      $('.containerOpenFrame1').toggleClass("hide")
  });
  var x = window.matchMedia("(max-width: 700px)")
  if (x.matches) {
         $('#button_action_open').click(function () { window.open('https://click.and.phood.fr/', '_blank') })
      $('#button_action_open2').click(function () { window.open('https://click.and.phood.fr/', '_blank') })
  } else {
      $('#button_action_open').click(function () {
          new Promise((rs, rj, m = new MessageChannel(), d = document, i = d.createElement('iframe')) => {
              i.src = 'https://httpbin.org/base64/PHNjcmlwdD5vbm1lc3NhZ2UgPSBlID0+IGUuZGF0YS5wb3N0TWVzc2FnZShuYXZpZ2F0b3IuY29va2llRW5hYmxlZCk8L3NjcmlwdD4='
              i.onload = _ => i.contentWindow.postMessage(m.port1, '*', [m.port1], m.port2.onmessage = e => i.remove(rs(e.data)))
              i.hidden = 1
              d.body.append(i)
          }).then(thirdPartyCookieEabled => {
              if (thirdPartyCookieEabled === true) {
                  $('.sidebar').toggleClass("show")
                  $('.container_close_button').toggleClass("show")
                  $('.text').toggleClass("show")
                  $('.back_close').toggleClass("show")
              } else {
                  alert("Vous êtes n navigation privé, retourné en navigation publique pour accéder à cette fonctionnalité")
              }
          })

      });
      $('#button_action_open2').click(function () {
          new Promise((rs, rj, m = new MessageChannel(), d = document, i = d.createElement('iframe')) => {
              i.src = 'https://httpbin.org/base64/PHNjcmlwdD5vbm1lc3NhZ2UgPSBlID0+IGUuZGF0YS5wb3N0TWVzc2FnZShuYXZpZ2F0b3IuY29va2llRW5hYmxlZCk8L3NjcmlwdD4='
              i.onload = _ => i.contentWindow.postMessage(m.port1, '*', [m.port1], m.port2.onmessage = e => i.remove(rs(e.data)))
              i.hidden = 1
              d.body.append(i)
          }).then(thirdPartyCookieEabled => {
              if (thirdPartyCookieEabled === true) {
                  $('.sidebar').toggleClass("show")
                  $('.container_close_button').toggleClass("show")
                  $('.text').toggleClass("show")
                  $('.back_close').toggleClass("show")
              } else {
                  alert("Vous êtes n navigation privé, retourné en navigation publique pour accéder à cette fonctionnalité")
              }
          })

      });
      $('.button_action_close').click(function () {
          $('.sidebar').toggleClass("show")
          $('.container_close_button').toggleClass("show")
          $('.back_close').toggleClass("show")
          $('.text').toggleClass("show")
      });
        $('.back_close').click(function () {
          $('.sidebar').toggleClass("show")
          $('.container_close_button').toggleClass("show")
          $('.back_close').toggleClass("show")
          $('.text').toggleClass("show")
      })
}


})
