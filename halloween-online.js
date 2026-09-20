(function () {
  var products = [
    ['halloween-01.png', 'Camiseta blanca — calavera'], ['halloween-02.jpeg', 'Camiseta negra — Friends'],
    ['halloween-03.jpeg', 'Camiseta negra — manos rojas de sangre'], ['halloween-04.jpeg', 'Camiseta negra — charro calavera'],
    ['halloween-05.jpeg', 'Camiseta negra — Freddy Krueger'], ['halloween-06.png', 'Camiseta negra — calavera grande'],
    ['halloween-07.jpeg', 'Camiseta negra — Friends'], ['halloween-08.jpeg', 'Camiseta negra — Saw'],
    ['halloween-09.jpeg', 'Camiseta negra — It'], ['halloween-10.jpeg', 'Camiseta negra — Catrina'],
    ['halloween-11.jpeg', 'Camiseta blanca — calavera'], ['halloween-12-taza-it.png', 'Taza blanca — Pennywise'],
    ['halloween-13-tazas-terror.png', 'Tazas — personajes de terror'], ['halloween-14-taza-saw.png', 'Taza negra — Saw'],
    ['halloween-15-camisetas-terror.jpeg', 'Camisetas blancas — terror'], ['halloween-16-taza-doll.jpeg', 'Taza negra — muñeca de terror'],
    ['halloween-17.png', 'Camiseta Halloween — diseño adulto 1'], ['halloween-18.png', 'Camiseta Halloween — diseño adulto 2'],
    ['halloween-19.png', 'Camiseta Halloween — diseño adulto 3'], ['halloween-20.png', 'Camiseta Halloween — diseño adulto 4'],
    ['halloween-21.png', 'Camiseta Halloween — diseño adulto 5'], ['halloween-22.png', 'Camiseta Halloween — diseño adulto 6'],
    ['halloween-23.png', 'Camiseta Halloween — diseño adulto 7'], ['halloween-24.png', 'Camiseta Halloween — diseño adulto 8'],
    ['halloween-25.png', 'Camiseta Halloween — diseño adulto 9'],
    ['halloween-26.png', 'Camiseta infantil Halloween — diseño 1'], ['halloween-27.png', 'Camiseta infantil Halloween — diseño 2'],
    ['halloween-28.png', 'Camiseta infantil Halloween — diseño 3'], ['halloween-29.png', 'Camiseta infantil Halloween — diseño 4'],
    ['halloween-30.png', 'Camiseta infantil Halloween — diseño 5'], ['halloween-31.png', 'Camiseta infantil Halloween — diseño 6'],
    ['halloween-32.png', 'Camiseta infantil Halloween — diseño 7'], ['halloween-33.png', 'Camiseta infantil Halloween — diseño 8'],
    ['halloween-34.png', 'Camiseta infantil Halloween — diseño 9'], ['halloween-35.png', 'Camiseta infantil Halloween — diseño 10'],
    ['halloween-36.png', 'Camiseta infantil Halloween — diseño 11'], ['halloween-37.png', 'Taza personalizada Halloween — diseño 1'],
    ['halloween-38.png', 'Taza personalizada Halloween — diseño 2'], ['halloween-39.png', 'Taza personalizada Halloween — diseño 3'],
    ['halloween-40.png', 'Taza personalizada Halloween — diseño 4'], ['halloween-41.png', 'Camiseta negra Halloween — diseño 1'],
    ['halloween-42.png', 'Camiseta negra Halloween — diseño 2'], ['halloween-43.png', 'Camiseta negra Halloween — diseño 3'],
    ['halloween-44.png', 'Camiseta negra Halloween — diseño 4'], ['halloween-45.png', 'Camiseta negra Halloween — diseño 5'],
    ['halloween-46.png', 'Camiseta negra Halloween — diseño 6'], ['halloween-47.png', 'Camiseta negra Halloween — diseño 7'],
    ['halloween-48.png', 'Camiseta negra Halloween — diseño 8'], ['halloween-49.png', 'Camiseta negra Halloween — diseño 9'],
    ['halloween-50.png', 'Camiseta negra Halloween — diseño 10'], ['halloween-51.png', 'Camiseta negra Halloween — diseño 11'],
    ['halloween-52.png', 'Camiseta negra Halloween — diseño 12'], ['halloween-53.png', 'Camiseta negra Halloween — diseño 13']
  ];
  function start() {
    var assetBase = 'imagenes/';
    var strip = document.querySelector('.strip'), lightbox = document.getElementById('lightbox');
    var big = document.getElementById('lightbox-image'), title = document.getElementById('lightbox-title'), buy = document.getElementById('lightbox-buy');
    if (!strip || !lightbox || !big || !title || !buy) return;
    var section = document.createElement('section'); section.className = 'online-halloween';
    section.innerHTML = '<div class="wrap"><div class="online-halloween-head"><span>✦ Productos de temporada</span><h2>Lo más nuevo: <strong>Halloween</strong></h2><p>Diseños especiales para celebrar con un toque de terror.</p></div><div class="online-halloween-track"></div><div class="online-halloween-help">Carrusel lento · pasa el cursor para detenerlo →</div></div>';
    var track = section.querySelector('.online-halloween-track');
    products.forEach(function (item) {
      var card = document.createElement('article'); card.className = 'online-halloween-card';
      card.innerHTML = '<img src="' + assetBase + item[0] + '" alt="' + item[1] + '"><div class="online-halloween-info"><b>' + item[1] + '</b><button type="button">Agregar al carrito</button></div>';
      var img = card.querySelector('img'), button = card.querySelector('button');
      function open() { big.src = img.src; big.alt = item[1]; title.textContent = item[1]; buy.href = 'https://api.whatsapp.com/send?phone=50686458480&text=' + encodeURIComponent('Hola Sublimación Durán, quiero cotizar: ' + item[1]); lightbox.classList.add('open'); }
      img.addEventListener('click', open); button.addEventListener('click', function (event) { event.stopPropagation(); open(); }); track.appendChild(card);
    });
    strip.parentNode.insertBefore(section, strip);
    var autoScroll = true;
    setInterval(function(){
      if(!autoScroll) return;
      var max = track.scrollWidth - track.clientWidth;
      if(max <= 0) return;
      if(track.scrollLeft >= max - 2) track.scrollLeft = 0;
      else track.scrollLeft += 1;
    }, 90);
    track.addEventListener('mouseenter', function(){ autoScroll = false; });
    track.addEventListener('mouseleave', function(){ autoScroll = true; });
    track.addEventListener('touchstart', function(){ autoScroll = false; }, {passive:true});
    track.addEventListener('touchend', function(){ setTimeout(function(){ autoScroll = true; }, 1200); }, {passive:true});
    var reels = document.querySelectorAll('.moving-banner');
    if (reels[1]) strip.parentNode.insertBefore(reels[1], strip.nextSibling);
    var style = document.createElement('style'); style.textContent = '.online-halloween{padding:58px 0 48px;background:url("imagenes/fondo-halloween-casa.jpeg") center/cover;color:#fff;overflow:hidden}.online-halloween-head{text-align:center;margin-bottom:26px}.online-halloween-head>span{color:#ffd52a;font-weight:900;text-transform:uppercase;letter-spacing:.12em;font-size:.78rem}.online-halloween-head h2{font-family:Georgia,serif;font-size:clamp(2.2rem,5vw,4.2rem);line-height:1;margin:12px 0 14px;color:#ff2020;text-shadow:3px 4px 0 #170710,0 0 15px #ff4b3d}.online-halloween-head h2 strong{position:relative;display:inline-block}.online-halloween-head h2 strong:after{content:"\\2022  \\2022  \\2022";position:absolute;left:24%;bottom:-25px;color:#c10d18;font-size:1.1rem;letter-spacing:.2em}.online-halloween-head p{margin:0;color:#f5dff0}.online-halloween-track{display:flex;gap:16px;overflow-x:auto;padding:8px 2px 18px;scroll-snap-type:none}.online-halloween-card{flex:0 0 270px;background:#fff;color:#24104f;border-radius:18px;overflow:hidden;scroll-snap-align:start;box-shadow:0 12px 28px #000b;border:3px solid #fff}.online-halloween-card img{display:block;width:100%;height:270px;object-fit:cover;cursor:zoom-in}.online-halloween-info{padding:12px}.online-halloween-info b{display:block;min-height:48px}.online-halloween-info button{margin-top:9px;border:0;border-radius:999px;background:#ed2184;color:#fff;padding:10px 14px;font-weight:900;cursor:pointer}.online-halloween-help{text-align:center;color:#ffd52a;font-weight:900}.online-cart{position:fixed;right:18px;bottom:18px;z-index:40;background:#24104f;color:#fff;border-radius:18px;padding:16px;width:min(320px,calc(100% - 36px));box-shadow:0 14px 35px #0008}.online-cart h3{margin:0 0 8px}.online-cart-list{font-size:.9rem;max-height:130px;overflow:auto}.online-cart button{border:0;border-radius:999px;padding:9px 13px;margin-top:10px;cursor:pointer;font-weight:800}.online-cart-send{background:#25d366;color:#fff;width:100%}@media(max-width:850px){.online-cart{right:12px;bottom:12px;width:min(300px,calc(100% - 24px));padding:11px 13px;max-height:52px;overflow:hidden;transition:max-height .2s ease}.online-cart.expanded{max-height:230px}.online-cart h3{margin:0;cursor:pointer;font-size:1rem}.online-cart-list,.online-cart-send{display:none}.online-cart.expanded .online-cart-list,.online-cart.expanded .online-cart-send{display:block}.online-cart-send{margin-top:8px}.online-halloween{padding:42px 0 34px}.online-halloween-card{flex-basis:220px}.online-halloween-card img{height:220px}}'; document.head.appendChild(style);
    var bloodStyle = document.createElement('style'); bloodStyle.textContent = '@import url("https://fonts.googleapis.com/css2?family=Nosifer&display=swap");.online-halloween-head h2{font-family:"Nosifer",fantasy;letter-spacing:.02em}.online-halloween-head h2 strong:after{content:"";left:12%;right:8%;bottom:-30px;height:26px;background:radial-gradient(ellipse at 8% 0,#c10d18 0 5px,transparent 6px),linear-gradient(#c10d18,#c10d18) 28% 0/5px 23px no-repeat,radial-gradient(ellipse at 62% 0,#c10d18 0 4px,transparent 5px),linear-gradient(#c10d18,#c10d18) 84% 0/4px 18px no-repeat;filter:drop-shadow(0 2px 0 #170710);display:block}'; document.head.appendChild(bloodStyle);
    var audio = new Audio('imagenes/terror-halloween.mp3'); audio.loop = true; audio.volume = .65;
    var audioButton = document.createElement('button'); audioButton.type = 'button'; audioButton.textContent = '🔊 Activar sonido de Halloween'; audioButton.style.cssText = 'display:block;margin:0 auto 18px;border:0;border-radius:999px;padding:10px 16px;background:#ffd52a;color:#24104f;font-weight:900;cursor:pointer'; section.querySelector('.online-halloween-head').appendChild(audioButton);
    var audioReady = false; audioButton.onclick = function(){ audioReady = !audioReady; audioButton.textContent = audioReady ? '🔇 Sonido activo — pasa el cursor' : '🔊 Activar sonido de Halloween'; if(audioReady){ audio.play().catch(function(){}); } else { audio.pause(); audio.currentTime = 0; } };
    section.addEventListener('mouseenter', function(){ if(audioReady) audio.play().catch(function(){}); });
    var cart = [], cartBox = document.createElement('aside'); cartBox.className = 'online-cart'; cartBox.innerHTML = '<h3>🛒 Mi selección</h3><div class="online-cart-list">Aún no has agregado productos.</div><button class="online-cart-send" type="button">Enviar pedido por WhatsApp</button>'; document.body.appendChild(cartBox);
    cartBox.querySelector('h3').addEventListener('click', function(){ cartBox.classList.toggle('expanded'); });
    var cartList = cartBox.querySelector('.online-cart-list');
    function renderCart() { cartList.innerHTML = cart.length ? cart.map(function (x) { return '<div>' + x + '</div>'; }).join('') : 'Aún no has agregado productos.'; }
    buy.textContent = 'Agregar al carrito'; buy.onclick = function (event) { event.preventDefault(); var item = title.textContent || 'Producto Halloween'; cart.push(item); renderCart(); lightbox.classList.remove('open'); };
    cartBox.querySelector('.online-cart-send').onclick = function () { if (!cart.length) return; window.open('https://api.whatsapp.com/send?phone=50686458480&text=' + encodeURIComponent('Hola Sublimación Durán, quiero comprar:\n- ' + cart.join('\n- ')), '_blank'); };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
