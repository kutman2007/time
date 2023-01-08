 
 setInterval(()=>{
    let hours = document.getElementById('hours');
    let minuts = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let hr = document.querySelector('.hr')
    let min = document.querySelector('.min')
    let sec = document.querySelector('.sec')
    let am = h>=12 ? 'PM' : 'AM';
   
    hours.innerHTML=h + "<br><span>Hours</span>";
    minuts.innerHTML=m + "<br><span>Minutes</span>";
    seconds.innerHTML=s + "<br><span>Seconds</span>";
   
    if (h>12){
       h=h-12;
    }
   
    h = (h<10) ? '0' + h : h;
    m = (m<10) ? '0' + h : h;
    s = (s<10) ? '0' + h : h;

    hh.style.strokeDashoffset =440 - (440 * h) /12;
    mm.style.strokeDashoffset =440 - (440 * m) /60;
    ss.style.strokeDashoffset =440 - (440 * m) /60;

    hr.style.transform = `rotate(${h *30}deg)`;
    min.style.transform = `rotate(${m *6}deg)`;
    sec.style.transform = `rotate(${s *6}deg)`;
})
 

