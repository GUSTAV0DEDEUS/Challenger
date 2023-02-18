var dkl1n = {
  nome: "DKL1N",
  img: [],
  campeao: [],
  kills: [],
  deaths: [],
  assists: [],
  tempo: [],
  w_d: []
};
var kda = []
var count = 0

function openModal(){
  var modal = document.getElementById('modalID')
  modal.style.display = 'grid';
}

function closeModal(){
  var modal = document.getElementById('modalID')
  modal.style.display = 'none';
}



function adicionarPartida() {
  var imagem = document.getElementById('imagem').value;
  var champion = document.getElementById('name').value;
  var kills = document.getElementById('kills').value;
  var deaths = document.getElementById('deaths').value;
  var assists = document.getElementById('assists').value;
  var time = document.getElementById('time').value;
  var win_defeat = document.getElementById('w/d').value;

  if (imagem != "" && champion != "" && kills != "" && deaths != "" && assists != "" && time != "" && win_defeat != "" ){

    dkl1n.img.push(imagem); 
    dkl1n.campeao.push(champion); 
    dkl1n.kills.push(parseInt(kills)); 
    dkl1n.deaths.push(parseInt(deaths)); 
    dkl1n.assists.push(parseInt(assists)); 
    dkl1n.tempo.push(time); 
    dkl1n.w_d.push(win_defeat);
    console.log(dkl1n)
    if (imagem.endsWith("jpg") || imagem.endsWith("jpeg")|| imagem.endsWith("png")){
      count ++;
      carregarTable();
      limparCampos();
    }else{
      alert("Insira um link com imagens em JPG, PNG ou JPEG. Por favor")
    }

  }else{
    alert("Por favor preencha os campos")
  }
}
var gamesJogados = document.getElementById('games');
gamesJogados.innerText = "Você ainda não jogou"

function carregarTable(){
  var tableBody = document.getElementById('tBody');
  tableBody.innerHTML = "";
  for (var i = 0; i < count; i++){
  kda.push(((dkl1n.kills[i] + dkl1n.assists[i]) / dkl1n.deaths[i]).toFixed(1))
  gamesJogados.innerText = ` Você jogou ${i + 1} games` ;
  console.log(kda)
  tableBody.innerHTML = tableBody.innerHTML +=
    `
      <div class="item">
        <div class="col2">
          <img src="${dkl1n.img[i]}"
            alt="campeão">
          <div class="champion">
            <h3>${dkl1n.campeao[i]}</h3>
            <h4>${dkl1n.nome}</h4>
          </div>
        </div>
        <div class="col1">
          <p class="text-primary"><span>${dkl1n.kills[i]}<span>/<span>${dkl1n.deaths[i]}/</span><span>${dkl1n.assists[i]}</span></p>
        </div>
        <div class="col1">
          <p class="text-primary">${dkl1n.tempo[i]}</p>
        </div>
        <div class="col1">
          <p class="text-secondary">${kda[i]}</p>
        </div>
        <div class="col1">
          <p class="${dkl1n.w_d[i]}">${dkl1n.w_d[i]}</p>
        </div>
        <div class="col1">
          <input type="checkbox" name="favorite" id="favorite">
          <label for="favorite">
            <i class="fa-regular fa-bookmark"></i>
          </label>
        </div>
    </div>
  `;
}
}

function limparCampos(){

  imagem = document.getElementById('imagem').value  ="";
  champion = document.getElementById('name').value ="";
  kills = document.getElementById('kills').value ="";
  deaths = document.getElementById('deaths').value ="";
  assists = document.getElementById('assists').value ="";
  time = document.getElementById('time').value ="";
  win_defeat = document.getElementById('w/d').value ="";
}



