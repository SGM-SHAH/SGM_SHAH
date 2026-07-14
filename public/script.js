// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();

// STARS
const canvas=document.getElementById('stars-canvas');
const ctx=canvas.getContext('2d');
let stars=[];
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
function initStars(){stars=[];for(let i=0;i<180;i++)stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.1+.2,o:Math.random()*.5+.1,s:Math.random()*.3+.05});}
function drawStars(){ctx.clearRect(0,0,canvas.width,canvas.height);stars.forEach(s=>{s.o+=Math.sin(Date.now()*.001*s.s)*.005;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(180,210,255,${Math.max(.05,s.o)})`;ctx.fill();});requestAnimationFrame(drawStars);}
window.addEventListener('resize',()=>{resizeCanvas();initStars();});
resizeCanvas();initStars();drawStars();

// 3D TILT
const scene=document.getElementById('avatarScene');
const card=document.getElementById('avatarCard');
scene.addEventListener('mousemove',e=>{const r=scene.getBoundingClientRect();const dx=(e.clientX-(r.left+r.width/2))/(r.width/2);const dy=(e.clientY-(r.top+r.height/2))/(r.height/2);card.style.transform=`rotateY(${dx*18}deg) rotateX(${-dy*14}deg) translateZ(20px)`;card.style.transition='transform .1s ease-out';});
scene.addEventListener('mouseleave',()=>{card.style.transition='transform .6s cubic-bezier(.25,.46,.45,.94)';card.style.transform='';});

// IDLE FLOAT
let idle=0;
(function idleFloat(){idle+=.008;if(!scene.matches(':hover')){card.style.transform=`rotateY(${Math.sin(idle)*4}deg) rotateX(${Math.cos(idle*.7)*3}deg)`;card.style.transition='none';}requestAnimationFrame(idleFloat);})();

// SCROLL REVEAL
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*90);obs.unobserve(e.target);e.target.querySelectorAll('.skill-bar-fill').forEach(b=>{setTimeout(()=>b.style.width=b.dataset.width+'%',400+i*90);});}});},{threshold:.1});
reveals.forEach(el=>obs.observe(el));

// STAT COUNTER
document.querySelectorAll('.stat-num[data-target]').forEach(el=>{
  const statObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const target=+el.dataset.target;const suffix=target===92||target===82?'%':'+';let start=null;const dur=1400;(function step(ts){if(!start)start=ts;const prog=Math.min((ts-start)/dur,1);const ease=1-Math.pow(1-prog,3);el.textContent=Math.round(target*ease)+(prog>=1?suffix:'');if(prog<1)requestAnimationFrame(step);else el.textContent=target+suffix;})(performance.now());statObs.unobserve(el);}});},{threshold:.5});
  statObs.observe(el);
});

// AUDIO PLAYER
(function(){
  let currentAudio = null;
  let currentTrack = null;
  let animFrame = null;

  function formatTime(s){
    if(isNaN(s)) return '0:00';
    const m = Math.floor(s/60);
    const sec = Math.floor(s%60);
    return m+':'+(sec<10?'0':'')+sec;
  }

  function updateProgress(){
    if(!currentAudio||!currentTrack) return;
    const fill = currentTrack.querySelector('.track-progress-fill');
    const timeEl = currentTrack.querySelector('.track-time');
    if(currentAudio.duration){
      const pct = (currentAudio.currentTime/currentAudio.duration)*100;
      fill.style.width = pct+'%';
    }
    timeEl.textContent = formatTime(currentAudio.currentTime);
    animFrame = requestAnimationFrame(updateProgress);
  }

  function stopCurrent(){
    if(currentAudio){
      currentAudio.pause();
      currentAudio.currentTime = 0;
      cancelAnimationFrame(animFrame);
      const play = currentTrack.querySelector('.track-play');
      play.textContent = '▶';
      currentTrack.classList.remove('playing');
      const fill = currentTrack.querySelector('.track-progress-fill');
      fill.style.width = '0%';
      const timeEl = currentTrack.querySelector('.track-time');
      timeEl.textContent = '0:00';
      currentAudio = null;
      currentTrack = null;
    }
  }

  document.querySelectorAll('.track[data-src]').forEach(t=>{
    t.addEventListener('click',()=>{
      const src = t.dataset.src;
      const play = t.querySelector('.track-play');

      // If clicking the currently playing track → toggle pause/play
      if(currentTrack === t && currentAudio){
        if(currentAudio.paused){
          currentAudio.play();
          play.textContent = '⏸';
          t.classList.add('playing');
          animFrame = requestAnimationFrame(updateProgress);
        } else {
          currentAudio.pause();
          play.textContent = '▶';
          t.classList.remove('playing');
          cancelAnimationFrame(animFrame);
        }
        return;
      }

      // Stop whatever is playing
      stopCurrent();

      // Start new track
      currentTrack = t;
      currentAudio = new Audio(src);
      currentAudio.play();
      play.textContent = '⏸';
      t.classList.add('playing');
      animFrame = requestAnimationFrame(updateProgress);

      currentAudio.addEventListener('ended',()=>{
        stopCurrent();
      });
    });
  });
})();

// EMAIL SOCIAL BUTTON CLICK
(function() {
  const emailBtn = document.getElementById('email-social-btn');
  if (!emailBtn) return;

  emailBtn.addEventListener('click', (e) => {
    if (e) e.preventDefault();
    const email = 'sgmshah07@gmail.com';
    
    // Copy to clipboard safely
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(err => {
        console.error('Could not copy', err);
      });
    } else {
      // Fallback copy method
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed'; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }

    // Create or show toast/tooltip
    let toast = document.getElementById('email-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'email-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = `Copied to clipboard: ${email}`;
    toast.classList.add('show');

    // Change button content temporarily to show the email ID
    const textSpan = emailBtn.querySelector('.btn-text-content');
    if (textSpan) {
      const originalContent = textSpan.innerHTML;
      textSpan.textContent = email;
      emailBtn.style.borderColor = 'var(--accent3)';
      emailBtn.style.color = 'var(--accent3)';

      setTimeout(() => {
        toast.classList.remove('show');
        textSpan.innerHTML = originalContent;
        emailBtn.style.borderColor = '';
        emailBtn.style.color = '';
      }, 3000);
    }
  });
})();





