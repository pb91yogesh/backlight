if(window.location.pathname.indexOf('/debug/')<0){const whatsappStyle=document.createElement('style');whatsappStyle.innerText=`

      .whatsappLink {
          position: fixed;
          font-size: 16px;
          bottom: 0;
          right: 0;
          width: 2.5em;
          height: 2.5em;
          border-radius: 100% 0 0 0 / 100% 0 0 0;
          background-color: #777;
          box-shadow: 0 0 5px #0007;
          transform-origin: bottom right;
          transition: all 0.25s;
          cursor: pointer;
          z-index: 9999;
      }

      .whatsappLink:hover {
          background-color: #00a2f5;
          box-shadow: 0 0 10px #000;
          transform: scale(1.25);
      }

      .whatsappIcon {
          position: absolute;
          bottom: 0.2em;
          right: 0.2em;
          width: 1.5em;
          height: 1.5em;
          filter: drop-shadow(0 0 2px #0007);
      }
  `;document.querySelector('head').appendChild(whatsappStyle);const whatsappPath="whatsapp:contact=+916284492392@s.whatsapp.com";const whatsappLink=document.createElement('a');whatsappLink.classList="whatsappLink"
whatsappLink.addEventListener('click',()=>{window.open(whatsappPath,'_top');})
const whatsappIcon=document.createElement('img');whatsappIcon.classList="whatsappIcon"
whatsappIcon.src='whatsapp.png';whatsappLink.appendChild(whatsappIcon);document.querySelector('body').appendChild(whatsappLink);}