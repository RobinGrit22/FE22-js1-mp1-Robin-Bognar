
for(let i = 1; i<6; i++){
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Rad ' + i;
    document.body.appendChild(h1Element);
    h1Element.style.color = "hsl(265 100% 64%)";
    h1Element.style.textAlign ="center";
    h1Element.style.fontSize = i + '5px';
    h1Element.style.backgroundColor = `hsl(${120 + i*16}, 90%, 85%)`
}

const main = document.createElement('main');
document.body.appendChild(main);
main.style.border = "solid 3px black";
main.style.display = "flex";
main.style.justifyContent = 'space-around';


let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');
main.appendChild(box1);
main.appendChild(box2);
main.appendChild(box3);
box1.style.border = '10px solid hsl(240, 71%, 80%)'
box2.style.border = '10px solid hsl(240, 71%, 80%)'
box3.style.border = '10px solid hsl(240, 71%, 80%)'


for(let i = 0; i<10; i++){
    const p1Element = document.createElement('p');
    p1Element.innerText = [i];
    box1.appendChild(p1Element);
    box1.style.width = '50px'
    p1Element.style.margin = '0'
    box1.style.margin = '50px'

     if(i == 4){
        p1Element.style.backgroundColor = 'hsl(240, 71%, 80%)'
        p1Element.style.color = 'white'
    }
    else if(i % 2 == 0){
        p1Element.style.backgroundColor = 'black'
        p1Element.style.color = 'white'
    }
}

//box2
for(let i = 9; i>=0; i--){
    const p2Element = document.createElement('p');
    p2Element.innerText = [i];
    box2.appendChild(p2Element);
    box2.style.width = '50px'
    box2.style.margin = '50px'
    p2Element.style.margin = '0'
    box2.style.textAlign = 'center'

    if(i == 8){
        p2Element.style.backgroundColor = 'hsl(240, 71%, 80%)'
        p2Element.style.color = 'white'
    }
    else if(i % 2 == 0){
        p2Element.style.backgroundColor = 'black'
        p2Element.style.color = 'white'
    }
}

//box3
let nummer = ['ett', 'två', 'tre', 'fyra', 'fem','sex', 'sju', 'åtta', 'nio', 'tio']
for(let i = 0; i<10; i++){
    const p3Element = document.createElement('p');
    p3Element.innerText = nummer[i];
    box3.appendChild(p3Element);
    box3.style.width = '50px'
    p3Element.style.margin = '0'
    box3.style.margin = '50px'
    box3.style.textAlign = 'right'

     if(i == 5){
        p3Element.style.backgroundColor = 'hsl(240, 71%, 80%)'
        p3Element.style.color = 'white'
    }
    else if(i % 2 == 0){
        p3Element.style.backgroundColor = 'black'
        p3Element.style.color = 'white'
    }

}
