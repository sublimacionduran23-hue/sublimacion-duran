(function(){
  var host=document.querySelector('#productos');
  if(!host)return;
  var assetBase='';
  var catalogBase='';
  var data=[
    ['bebe-01-cojin-azul.png','Cojín personalizado — diseño azul — ₡7.000'],
    ['bebe-02-cojin-rosa.png','Cojín personalizado — diseño rosa — ₡7.000'],
    ['bebe-03-cojin-girafa.png','Cojín personalizado — jirafa — ₡7.000'],
    ['bebe-04-ceramica-sofia.png','Cerámica personalizada — bebé Sofía — ₡6.000'],
    ['bebe-05-ceramica-isabella.jpeg','Cerámica personalizada — bebé Isabella — ₡6.000'],
    ['bebe-06-cojin-mateo.jpeg','Cojín personalizado — bebé Mateo — ₡6.000'],
    ['bebe-07-camisetas-baby-shower.png','Camisetas personalizadas para baby shower'],
    ['bebe-08-panos-de-mano.png','Paños de mano personalizados']
  ];
  var style=document.createElement('style');
  style.textContent='.baby-feature{padding:42px 0;background:linear-gradient(135deg,#fff7fb,#eef8ff)}.baby-feature .section-head{margin-bottom:22px}.baby-feature h2{color:#15346e}.baby-feature h2 span{color:#e93486}.baby-collage{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.baby-tile{margin:0;background:#fff;border:1px solid #e7dced;border-radius:20px;overflow:hidden;box-shadow:0 10px 24px #24104f14;cursor:zoom-in;transition:transform .2s,box-shadow .2s}.baby-tile:hover{transform:translateY(-4px);box-shadow:0 16px 30px #24104f26}.baby-tile:first-child{grid-column:span 2;grid-row:span 2}.baby-tile img{display:block;width:100%;height:180px;object-fit:cover}.baby-tile:first-child img{height:374px}.baby-tile figcaption{padding:11px 13px;font-weight:850;color:#24104f}.baby-tile small{display:block;color:#77809b;font-weight:600;margin-top:3px}@media(max-width:700px){.baby-collage{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.baby-tile:first-child{grid-column:span 2}.baby-tile img,.baby-tile:first-child img{height:190px}}';
  document.head.appendChild(style);
  var section=document.createElement('section');
  section.className='baby-feature';
  section.innerHTML='<div class="wrap"><div class="section-head"><h2>Productos para <span>bebé</span></h2><p>Detalles personalizados para celebrar sus primeros momentos.</p></div><div class="baby-collage"></div></div>';
  var collage=section.querySelector('.baby-collage');
  data.forEach(function(item){
    var tile=document.createElement('figure');
    tile.className='baby-tile';
    tile.innerHTML='<img src="'+assetBase+item[0]+'" alt="'+item[1]+'"><figcaption>'+item[1]+'<small>Haz clic para ver y agregar al carrito</small></figcaption>';
    tile.onclick=function(){
      var modal=document.getElementById('lightbox'),img=document.getElementById('lightbox-image'),title=document.getElementById('lightbox-title'),buy=document.getElementById('lightbox-buy');
      if(!modal||!img||!title||!buy)return;
      img.src=tile.querySelector('img').src;img.alt=item[1];title.textContent=item[1];buy.href='https://api.whatsapp.com/send?phone=50686458480&text='+encodeURIComponent('Hola Sublimación Durán, quiero cotizar: '+item[1]);modal.classList.add('open');
    };
    collage.appendChild(tile);
  });
  host.parentNode.insertBefore(section,host);
  var generalGrid=document.querySelector('.catalog-grid');
  var generalData=[
    ['24-tazas-magicas.jpeg','Tazas mágicas — diseños personalizados — ₡6.000'],
    ['25-tazas-magicas-modelos.jpeg','Tazas mágicas — modelos disponibles — ₡6.000'],
    ['26-vasos-graduacion.jpeg','Vasos de graduación — 24 oz: ₡4.500 / 16 oz: ₡4.000'],
    ['27-botellas-owala.png','Botellas Owala — ₡10.300']
  ];
  if(generalGrid)generalData.forEach(function(item){
    if(generalGrid.querySelector('img[src*="imagenes/'+item[0]+'"]'))return;
    var card=document.createElement('figure');
    card.className='catalog-item';
    card.innerHTML='<img src="'+catalogBase+item[0]+'" alt="'+item[1]+'" loading="lazy"><figcaption>'+item[1]+'<small>Personaliza con tu diseño</small></figcaption>';
    card.onclick=function(){
      var modal=document.getElementById('lightbox'),img=document.getElementById('lightbox-image'),title=document.getElementById('lightbox-title'),buy=document.getElementById('lightbox-buy');
      if(!modal||!img||!title||!buy)return;
      img.src=card.querySelector('img').src;img.alt=item[1];title.textContent=item[1];buy.href='https://api.whatsapp.com/send?phone=50686458480&text='+encodeURIComponent('Hola Sublimación Durán, quiero cotizar: '+item[1]);modal.classList.add('open');
    };
    generalGrid.appendChild(card);
  });
  var precios={
    '3.jpeg':'Popsockets — ₡3.500',
    '4.jpeg':'Placas para carro, moto o camión — ₡6.900',
    '5.jpeg':'Cerámicas personalizadas — 10x10 ₡5.000 / 15x15 ₡6.000 / 20x20 ₡7.000 / 20x30 ₡8.000',
    '6.jpeg':'Collares de acero inoxidable — ₡5.500',
    '7.jpeg':'Collares para parejas de acero inoxidable — ₡5.500',
    '8.jpeg':'Espejos personalizados — ₡3.900',
    '9.jpeg':'Llaveros de acero inoxidable — ₡4.500',
    '10.jpeg':'Camisa polo Waffit — lisa ₡8.000 / con diseño: cotizar',
    '11.jpeg':'Mini cojines — 20 cm ₡5.500 / 25 cm ₡6.500 / 30 cm ₡7.500',
    '12.jpeg':'Placas para mascotas — ₡3.500',
    'a.jpeg':'Mini cojín 20x20 cm — ₡5.000',
    'b.jpeg':'Cojines — ₡7.000 / bolso — ₡6.000',
    'c.jpeg':'Gorras para fiestas — ₡5.500 en DTF',
    'd.jpeg':'Vasos de colores — ₡4.500',
    'e.jpeg':'Placas para mascotas — ₡3.500',
    'f.jpeg':'Rompecabezas — de ₡2.500 a ₡5.000',
    'g.jpeg':'Tazas personalizadas — ₡3.500',
    'h.jpeg':'Jarras cerveceras — ₡5.500',
    'i.jpeg':'Vasos plásticos — lisos ₡1.900 / con diseño ₡2.400',
    'j.jpeg':'Popis gigantes — ₡4.000',
    'k.jpeg':'Tequileros — glaseados ₡2.900 / transparentes ₡1.500',
    'l.jpeg':'Loncheras plásticas — ₡6.500',
    'm.jpeg':'Caja de fotos giratoria para mamá — ₡7.000',
    'n.jpeg':'Tazas personalizadas para mamá — ₡3.500',
    'ñ.jpeg':'Tazas mágicas — ₡7.000',
    'o.jpeg':'Camisas personalizadas — adultos ₡6.000 / niños ₡5.000',
    'p.jpeg':'Llaveros con foto y diseño — ₡2.500',
    'q.jpeg':'Estuches para celular — ₡7.000',
    'r.jpeg':'Magnéticos acrílicos — ₡1.800 c/u',
    't.jpeg':'Pulseras — ₡2.500',
    'u.jpeg':'Pulseras personalizadas — ₡5.000',
    'v.jpeg':'Bolso de hombro personalizado — ₡9.500',
    '16.jpeg':'Camisetas familiares — adultos ₡6.000 / niños ₡5.000',
    '17.jpeg':'Mamelucos para bebé — 0 a 12 meses ₡5.500',
    '21.jpeg':'Gorras personalizadas — ₡5.500',
    '20.jpeg':'Tazas personalizadas — ₡3.500',
    '23.jpeg':'Stickers para emprendimiento — ₡100 (6x6 cm)'
  };
  Object.keys(precios).forEach(function(nombre){
    var img=generalGrid&&generalGrid.querySelector('img[src*="/'+nombre+'"]');
    var caption=img&&img.parentElement.querySelector('figcaption');
    if(caption){caption.firstChild.textContent=precios[nombre]+' ';}
  });
})();
