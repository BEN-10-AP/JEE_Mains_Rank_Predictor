
let gameResult = document.getElementById("gameResult");
let diffResult = document.getElementById("diffResult");
let diffu = document.getElementById("diff");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
const dif = [1.77, 1.67, 1.72, 1.63, 1.75, 1.57, 1.62, 1.7, 1.77, 1.68];
function checkGuess() {
  let marks = parseInt(userInput.value);
  if(marks<0 || marks>300)
  {
      gameResult.textContent = "Enter a valid score";
  }
  else{
      
  if (marks==300) {
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+1;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>292 && marks< 300) {
      let min=2;
      let max=12;
      let x= max-(((marks-292)/(300-292))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*30;
      let thi=Math.round(th);
      let thf=Math.round(th+5);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>286 && marks< 293) {
      let min=12;
      let max=19;
      let x= max-(((marks-286)/(293-286))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*90;
      let thi=Math.round(th-1);
      let thf=Math.round(th+6);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>280 && marks< 287) {
      let min=23;
      let max=42;
      let x= max-(((marks-280)/(287-280))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*120;
      let thi=Math.round(th-1);
      let thf=Math.round(th+6);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>268 && marks< 281) {
      let min=64;
      let max=106;
      let x= max-(((marks-268)/(281-268))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*160;
      let thi=Math.round(th-2);
      let thf=Math.round(th+10);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>250 && marks< 269) {
      let min=108;
      let max=524;
      let x= max-(((marks-250)/(269-250))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*350;
      let thi=Math.round(th-2);
      let thf=Math.round(th+15);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>231 && marks< 251) {
      let min=546;
      let max=1385;
      let x= max-(((marks-231)/(251-231))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*600;
      let thi=Math.round(th-5);
      let thf=Math.round(th+50);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>215 && marks< 232) {
      let min=1421;
      let max=2798;
      let x= max-(((marks-215)/(232-215))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*1500;
      let thi=Math.round(th-30);
      let thf=Math.round(th+120);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>200 && marks< 216) {
      let min=4667;
      let max=2863;
      let x= max-(((marks-200)/(216-200))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*2800;
      let thi=Math.round(th-20);
      let thf=Math.round(th+250);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>189 && marks< 201) {
      let min=4830;
      let max=6664;
      let x= max-(((marks-189)/(201-189))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*6000;
      let thi=Math.round(th-300);
      let thf=Math.round(th+1200);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>175 && marks< 190) {
      let min=7152;
      let max=10746;
      let x= max-(((marks-175)/(190-175))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*15000;
      let thi=Math.round(th-300);
      let thf=Math.round(th+1500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>160 && marks< 176) {
      let min=11018;
      let max=16163;
      let x= max-(((marks-160)/(174-160))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*20000;
      let thi=Math.round(th-400);
      let thf=Math.round(th+1600);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>149 && marks< 161) {
      let min=16495;
      let max=21145;
      let x= max-(((marks-149)/(161-149))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*28000;
      let thi=Math.round(th-500);
      let thf=Math.round(th+2000);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>132 && marks< 150) {
      let min=22238;
      let max=32826;
      let x= max-(((marks-132)/(150-132))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*35000;
      let thi=Math.round(th-600);
      let thf=Math.round(th+2100);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>120 && marks< 133) {
      let min=33636;
      let max=43174;
      let x= max-(((marks-120)/(133-120))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*45000;
      let thi=Math.round(th-500);
      let thf=Math.round(th+2500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>110 && marks< 121) {
      let min=44115;
      let max=54293;
      let x= max-(((marks-110)/(121-110))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*55000;
      let thi=Math.round(th-500);
      let thf=Math.round(th+3500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>102 && marks< 111) {
      let min=55269;
      let max=65758;
      let x= max-(((marks-102)/(111-102))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*55000;
      let thi=Math.round(th-500);
      let thf=Math.round(th+3200);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>95 && marks< 103) {
      let min=66999;
      let max=76260;
      let x= max-(((marks-95)/(95-103))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*55000;
      let thi=Math.round(th-600);
      let thf=Math.round(th+3500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>89 && marks< 96) {
      let min=78111;
      let max=87219;
      let x= max-(((marks-89)/(94-89))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*70000;
      let thi=Math.round(th-700);
      let thf=Math.round(th+3800);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>79 && marks< 90) {
      let min=90144;
      let max=109329;
      let x= max-(((marks-79)/(90-79))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*80000;
      let thi=Math.round(th-800);
      let thf=Math.round(th+4500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>62 && marks< 80) {
      let min=92303;
      let max=169542;
      let x= max-(((marks-62)/(89-62))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*90000;
      let thi=Math.round(th-1000);
      let thf=Math.round(th+5500);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
  if (marks>41 && marks< 63) {
      let min=173239;
      let max=326517;
      let x= max-(((marks-41)/(61-41))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*190000;
      let thi=Math.round(th-2500);
      let thf=Math.round(th+6000);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
   if (marks>-1 && marks< 42) {
      let min=334080;
      let max=100209;
      let x= max-(((marks-0)/(42-0))*(max-min));
      let th=x;
      th=th+(1.68-dif[diffu.value])*290000;
      let thi=Math.round(th-4500);
      let thf=Math.round(th+8000);
      if(Math.abs(dif[diffu.value]-1.68)<=0.02)
      {diffResult.textContent = "Your shift paper was moderate";}
      else if(dif[diffu.value]-1.68>0.02)
      {diffResult.textContent = "Your shift paper was relatively difficult";}
      else
      {diffResult.textContent = "Your shift paper was relatively easy";}
    gameResult.textContent = "Your predicted rank is "+thi+" to "+thf;
    gameResult.style.backgroundColor = "#1e217c";
  }
   
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
      
  }
}