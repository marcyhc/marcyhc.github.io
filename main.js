let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #98cc3b;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7d9f0a;"> Creo y diseño páginas web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
