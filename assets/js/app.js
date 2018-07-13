// ----------
// TABLEAU 1
// ----------
//
// GRAPH CONTAINER
let tab1 = document.getElementById("table1");
let tab1Container = document.createElement("div");
let tab1Parent = document.getElementById("mw-content-text");
tab1Container.classList.add("graph__tab1__container");

tab1Parent.insertBefore(tab1Container, tab1);

// GETTING DATA
let rowInfr = tab1.getElementsByTagName("tr");
let rowInfr2 = tab1.querySelectorAll("tr");

console.log(rowInfr,rowInfr2);

let yearsInfr = rowInfr[1].getElementsByTagName("th");

let arrNumberInfr = [];
let arrYearInfr = [];


// SVG AND CHART
let dataInfr = [];


// ----------
// TABLEAU 2
// ----------

let tab2 = document.getElementById("table2");
let tab2Container = document.createElement("div");
let tab2Parent = document.getElementById("mw-content-text");
tab2Container.classList.add("graph__tab2__container");
tab2Parent.insertBefore(tab2Container, tab2);

let rowPop = tab2.getElementsByTagName("tr");
let yearsPop = rowPop[0].getElementsByTagName("th");

let arrNumberPop = [];
let arrYearPop = [];

let dataPop = [];


// Getting the years

for(i=2;i<yearsInfr.length;i++){
  let years = yearsInfr[i].firstChild.nodeValue;
  arrYearInfr.push(years);
}

// Get data from TD
for (i=2;i<rowInfr.length;i++){
  let rowElements = rowInfr[i].getElementsByTagName("td");
  let countryElement = rowElements[0].firstChild.nodeValue;
  rowInfr[i].addEventListener("click",function(){
      getDataNumber(rowElements,arrNumberInfr,1)
      createData()
      createTitle(countryElement)
      d3.select("svg").remove();
      createGraph()

  });

}

displayFirst(rowInfr[2]);

function getDataNumber (arr,newArr,indexStart){
  for(i=indexStart; i<arr.length; i++){
    let valueTab1 = arr[i].firstChild.nodeValue ;
      valueTab1 = parseFloat(valueTab1.replace(/,/g, "."));
      if(newArr.length<arr.length-1){
        newArr.push(valueTab1)
      }
      else{
        newArr.splice(i-1,1,valueTab1)
      }
  };
}

function createTitle(title){
  let titleContainer = "<h4 style='text-align:center'>"+title+"</h4>";
  tab1Container.innerHTML= titleContainer;

}

function createData(){
  for(i=0;i<arrYearInfr.length;i++){
    let obj ={
      "Année":arrYearInfr[i],
      "Nombre en milliers":arrNumberInfr[i]
    }
    if(isNaN(obj["Nombre en milliers"])){
      obj["Nombre en milliers"]=0;
    }

    if(dataInfr.length<11){
      dataInfr.push(obj)
    }
    else{
      dataInfr.splice(i,1,obj)
    }
  }
};

function createGraph(){
  let svg = dimple.newSvg(tab1Container, 800, 600);
  var chart = new dimple.chart(svg, dataInfr);
  chart.addCategoryAxis("x", "Année");
  chart.addMeasureAxis("y", "Nombre en milliers");
  chart.addSeries(null, dimple.plot.bar);
  chart.draw();
}

function displayFirst(row){
  let firstElement = row.getElementsByTagName('td');
  let countryFirst = firstElement[0].firstChild.nodeValue;
  getDataNumber(firstElement,arrNumberInfr,1);
  createData();
  createTitle(countryFirst)
  d3.select("svg").remove();
  createGraph()
  createGraphPop()

}

for(i=2;i<yearsPop.length;i++){
  let years = yearsPop[i].firstChild.nodeValue;
  // console.log(years)
  arrYearPop.push(years);
}


for (i=1;i<rowPop.length;i++){
  let rowElementsPop = rowPop[i].getElementsByTagName("td");
  let countryElementPop = rowElementsPop[0].firstChild.nodeValue;
  rowPop[i].addEventListener("click",function(){
      getDataNumber(rowElementsPop,arrNumberPop,1)
      createDataPop()
      createTitlePop(countryElementPop)
      // d3.select("svg").remove();
      createGraphPop()
      console.log(rowPop,yearsPop,arrNumberPop,dataPop);

  });

}

displayFirstPop(rowPop[1]);

function getDataNumber (arr,newArr,indexStart){
  for(i=indexStart; i<arr.length; i++){
    let valueTab1 = arr[i].firstChild.nodeValue ;
      valueTab1 = parseFloat(valueTab1.replace(/,/g, "."));
      if(newArr.length<arr.length-1){
        newArr.push(valueTab1)
      }
      else{
        newArr.splice(i-1,1,valueTab1)
      }
  };
}

function createTitlePop(title){
  let titleContainer = "<h4 style='text-align:center'>"+title+"</h4>";
  tab2Container.innerHTML= titleContainer;

}

function createDataPop(){
  for(i=0;i<arrYearPop.length;i++){
    let obj ={
      "Année":arrYearPop[i],
      "Population carcérale":arrNumberPop[i]
    }

    if(isNaN(obj["Population carcérale"])){
      obj["Population carcérale"]=0;
    }

    if(dataPop.length<1){
      dataPop.push(obj)
    }
    else{
      dataPop.splice(i,1,obj)
    }
  }
};

function createGraphPop(){
  let svg = dimple.newSvg(tab2Container, 800, 600);
  var chart = new dimple.chart(svg, dataPop);
  let xAxis = chart.addCategoryAxis("x", "Année");
   xAxis.addOrderRule("xAxis", false);
  chart.addMeasureAxis("y", "Population carcérale");
  chart.addSeries(null, dimple.plot.bar);
  chart.draw();
}

function displayFirstPop(row){
  let firstElementPop = row.getElementsByTagName('td');
  let countryFirstPop = firstElementPop[0].firstChild.nodeValue;
  getDataNumber(firstElementPop,arrNumberPop,1);
  createDataPop();
  createTitlePop(countryFirstPop)
  // d3.select("svg").remove();
  createGraphPop();

}




//GRAPH 3
let tab3Container = "";

function createContainer(){
  let tab3NextEl = document.getElementById("bodyContent");
   tab3Container = document.createElement("div");
  let tab3Parent = document.getElementById("content");
  tab3Container.classList.add("graph__tab3__container");
  tab3Parent.insertBefore(tab3Container, tab3NextEl);

}
createContainer();

// GETTING DATA

let arrNumberAjax = [];
let arrYearAjax = [];


// SVG AND CHART
let dataAjax,
 dataGraphAjax =[],
 chartAjax,
 requestAjax
 let compteur =1;

createGraphAjax()


function createGraphAjax(){

requestAjax = new XMLHttpRequest();

requestAjax.open('GET','https://inside.becode.org/api/v1/data/random.json');

requestAjax.onload = function(){
  dataAjax = JSON.parse(requestAjax.responseText);

  for (i =0; i<dataAjax.length;i++){
    dataGraphAjax.push(
      {"x": dataAjax[i][0],
       "y": parseInt( dataAjax[i][1])
     }
   );
  }

  console.log(dataAjax,dataGraphAjax)

  let svg = dimple.newSvg(tab3Container, 800, 600);
   chartAjax = new dimple.chart(svg, dataGraphAjax);
  chartAjax.addMeasureAxis("y", "y");
  chartAjax.addCategoryAxis("x", "x");
  chartAjax.addSeries(null, dimple.plot.bar);
  chartAjax.draw();
  updateChart();
}
requestAjax.send();
}


     function updateChart() {
       requestAjax.open('GET','https://inside.becode.org/api/v1/data/random.json');
       requestAjax.onload = function(){
         dataAjax = JSON.parse(requestAjax.responseText);
         for (i =0; i<dataAjax.length;i++){
           let objAjax = {"x": dataAjax[i][0], "y": parseInt( dataAjax[i][1])};
             dataGraphAjax.push(objAjax);

         }
         chartAjax.data = dataGraphAjax;
         chartAjax.draw(0);

          setTimeout(function(){updateChart()}, 1000);
     }
     requestAjax.send();

}
