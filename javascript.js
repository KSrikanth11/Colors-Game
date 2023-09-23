  const players=["player1","player2"];
    const playersColor=["green","blue"];
     var currentPlayerIndex =0;
   
// const button=document.getElementsByTagName("button");
     const Buttons=document.querySelectorAll(".btn-group");
    const btns = document.querySelectorAll(".blue");
    const cir2s=document.querySelectorAll(".cir2");
    const cir3s=document.querySelectorAll(".cir3");
  const sameclrs = document.querySelectorAll(".sameclr");
  const playerColorShow1 =document.getElementsByClassName(".player1");
  const playerColorShow2 =document.getElementsByClassName(".player2");
//   const allblue =false;
    //console.log(currentPlayerIndex++);
        function playerTerm(event){
            const clickbtn = event.target;
           const parentDiv=clickbtn.parentElement;
           const sameclrs= document.querySelectorAll(".sameclr");
            const btns = parentDiv.querySelectorAll(".blue");
            const cir2s = parentDiv.querySelectorAll(".cir2");
            const cir3s =parentDiv.querySelectorAll(".cir3");
            //var currentPlayerIndex =0;

           
            currentPlayerIndex = currentPlayerIndex +2;
            // console.log(currentPlayerIndex);
            
            btns.forEach(btn => {

                const white="#f8f2f7";
                // var cir1 = btn.textContent ==='C1';
                /* var cir22=btn.textContent==='C2';
                var cir33=btn.textContent==='C3'; */
            
                function switchingPlayers(){
                   
                    //  var counter=0;
                    currentPlayerIndex=(currentPlayerIndex+1)%players.length;
                    var currentPlayer =players[currentPlayerIndex];
                    document.getElementById("player").innerHTML= currentPlayer;
                     
                    
                    if(currentPlayerIndex==1){
                  
                       





                        
                        if(btn.style.backgroundColor != "green" && btn.style.backgroundColor!="blue"){
                            
                            btn.style.backgroundColor="blue";
                           
                               
                        }
                             
                           else if(btn.style.backgroundColor==="blue"){
                            
                                cir2s.forEach(cir2 =>{
                                    if(cir2.style.backgroundColor!="blue"){
                                         cir2.style.display="block";
                                         cir2.style.backgroundColor="blue";
                                         btn.style.width="20px";
                                         btn.style.height="20px";
                                         btn.style.marginLeft="13px";
                                         btn.style.marginTop="10px";
                                         
                                    }
                                    else if(cir2.style.backgroundColor==="blue" && btn.style.backgroundColor==="blue"){
                                        cir3s.forEach(cir3 =>{
                                            if(cir3.style.backgroundColor!="blue"){

                                                cir3.style.display="block";
                                                cir3.style.backgroundColor="blue";
                                            }
                                            else if(btn.style.backgroundColor==="blue" && cir2.style.backgroundColor==="blue" &&  cir3.style.backgroundColor==="blue"){
                                                const buttonType=getCornerBtnType(btn);
                                                console.log(buttonType);
                                                if(buttonType==='center'){
                                                    const adjacentButtons=changeNeighbour( btn, sameclrs );
                                             
                                                    // console.log(adjacentButtons);
                                                    //  console.log(randomButton);
                                                      
                                                       adjacentButtons.forEach(adjButton =>{
                                                        if(adjButton.style.backgroundColor==="green"){
        
                                                            adjButton.style.backgroundColor="blue";
                                                            //btn.style.backgroundColor="#f2f2f8";
                                                            btn.style.width="35px";
                                                            btn.style.height="35px";
                                                            btn.style.marginLeft="7px";
                                                            btn.style.marginTop="7px";
        
                                                            cir2.style.backgroundColor="#f2f2f8";
                                                            cir3.style.backgroundColor="#f2f2f8";
        
                                                            cir2.style.display="none";
                                                            cir3.style.display="none";
                                                        //    currentPlayerIndex++;
                                                        //    currentPlayerIndex++;
                                                        }
                                                    });
                                                
                                                    }else if(buttonType === 'corner'){
                                                    const cornerIndeces=getCornerAdjBtns(btn);
                                                   cornerIndeces.forEach(cornerIndece=>{
                                                        console.log(cornerIndece);
                                                        
                                                        cornerIndece.style.backgroundColor="blue";
                                                        btn.style.backgroundColor="#f2f2f8";
                                                        btn.style.width="35px";
                                                        btn.style.height="35px";
                                                        btn.style.marginLeft="7px";
                                                        btn.style.marginTop="7px";
                                                        
                                                        cir2.style.backgroundColor="#f2f2f8";
                                                        cir3.style.backgroundColor="#f2f2f8";
                                                        
                                                        cir2.style.display="none";
                                                        cir3.style.display="none";
                                                   })
                                               }
                                              

                                               
                                               

                                                 
                                                
                                              

                               
                                        
                                            }
                                        });
                                    }
                                    
                                    
                                });
                              
                               
                            }
                            else{
                                currentPlayerIndex++; //to switch correct player
                               
                            }
                             if(checkWin()){
                            alert("blue color is win");
                         return;
                        }
                           
                        }

                    if(currentPlayerIndex==0){

                        // if(checkWin()){
                        //     alert("green color is win");


                        // }
                        
                        if(btn.style.backgroundColor != "blue" && btn.style.backgroundColor != "green" ){
        
                             btn.style.backgroundColor="green";
                            
                         }
                         else if(btn.style.backgroundColor==="green"){
                                
                            cir2s.forEach(cir2 =>{
                                if(cir2.style.backgroundColor!="green"){
                                    cir2.style.display="block";
                                    cir2.style.backgroundColor="green";
                                    btn.style.width="20px";
                                    btn.style.height="20px";
                                    btn.style.marginLeft="13px";
                                    btn.style.marginTop="10px";
                                 }
                                else if(cir2.style.backgroundColor==="green" && btn.style.backgroundColor==="green"){
                                    cir3s.forEach(cir3 =>{
                                        if(cir3.style.backgroundColor!="green"){

                                            cir3.style.display="block";
                                            cir3.style.backgroundColor="green";
                                        }

                                       else if(btn.style.backgroundColor==="green" && cir2.style.backgroundColor==="green" &&  cir3.style.backgroundColor==="green"){
                                        const buttonType=getCornerBtnType(btn);
                                        const adjacentButtons=changeNeighbour( btn, sameclrs );
                                             
                                              //console.log(adjacentButtons);
                                            if(buttonType==='center'){

                                                adjacentButtons.forEach(adjButton =>{
                                                    if(adjButton.style.backgroundColor==="blue"){
                                                        
                                                        adjButton.style.backgroundColor="green";
                                                        // btn.style.backgroundColor="#f2f2f8";
                                                        btn.style.width="35px";
                                                        btn.style.height="35px";
                                                        btn.style.marginLeft="7px";
                                                        btn.style.marginTop="7px";
                                                        
                                                        cir2.style.backgroundColor="#f2f2f8";
                                                        cir3.style.backgroundColor="#f2f2f8";
                                                        
                                                        cir2.style.display="none";
                                                        cir3.style.display="none";
                                                        //    currentPlayerIndex++;
                                                        
                                                    }
                                                });
                                            }
                                            if(buttonType === 'corner'){
                                                const cornerIndeces=getCornerAdjBtns(btn);
                                               cornerIndeces.forEach(cornerIndece=>{
                                                     console.log(cornerIndece);
                                                    
                                                    cornerIndece.style.backgroundColor="green";
                                                    btn.style.backgroundColor="#f2f2f8";
                                                    btn.style.width="35px";
                                                    btn.style.height="35px";
                                                    btn.style.marginLeft="7px";
                                                    btn.style.marginTop="7px";
                                                    
                                                    cir2.style.backgroundColor="#f2f2f8";
                                                    cir3.style.backgroundColor="#f2f2f8";
                                                    
                                                    cir2.style.display="none";
                                                    cir3.style.display="none";
                                               })
                                           }
                               
                                              



                                       }
                                    })
                                }
                               
                                        
                            })
                            
                                   
                        }
                        else{
                            currentPlayerIndex++;
                           
                        }
        
        
        
                         if(checkWin()){
                            alert("green color is win");
                         return;
                        }
        
                    }
                    
                // const allblue=Array.from(btns).every(btn=> btn.style.backgroundColor==="blue");
                       


                   
                }
                // var currentplayercolor=playersColor[currentPlayerIndex - 1];

            
                // if(checkWin()){
                //     alert( playersColor[currentPlayerIndex - 1]+"IS WIN" );
              //  }         
                        
                       
                        
                               
                          
                               
                            
                                    
                       
                //         //console.log(currentPlayerIndex++);



              
                
                // //currentPlayerIndex++;
                 
                switchingPlayers();
                
                    
        
                 
            });
            
            
        }
        
        
         
        function checkWin(){
            const currentplayercolor=playersColor[currentPlayerIndex ];
            console.log(currentplayercolor);
            var winPlayer=true;
            var count =0;
           btns.forEach(button =>{
            if(button.style.backgroundColor!=currentplayercolor){
                winPlayer=false;
                count++;
                console.log(winPlayer);
                // console.log(count);
                // console.log();
            }
           })
           if(currentplayercolor=="blue"){

               document.getElementById("score1").innerHTML=56-count;
               document.getElementById("score11").innerHTML=count;
           }else{

                  document.getElementById("score2").innerHTML=56-count;
                  document.getElementById("score22").innerHTML=count;
           }
           
           if(count==0){
            winPlayer=true;
           }
           
               
            
            console.log(winPlayer);
            return winPlayer;
        }
        
       


         function changeNeighbour(currentButton ,sameclrs){
           
            const currentBtnIndex=Array.from(btns).indexOf(currentButton);
            
            //console.log(currentBtnIndex);
           // console.log(Array(btns));
            const adjacentIndices = [
                currentBtnIndex - 9 ,currentBtnIndex - 8, currentBtnIndex - 7,
                currentBtnIndex - 1 ,                    , currentBtnIndex + 1,
                currentBtnIndex + 7,  currentBtnIndex + 8, currentBtnIndex + 9
            ].filter(index => index >=0 && index < btns.length);
            const adjacentButtons= adjacentIndices.map(index => btns[index]);

            // const cornerAdjacentIndices = [
            //     currentBtnIndex - 9 ,currentBtnIndex - 8, currentBtnIndex - 7,
            //     currentBtnIndex - 1 ,                    , currentBtnIndex + 1,
            //     currentBtnIndex + 7,  currentBtnIndex + 8, currentBtnIndex + 9
            // ].filter(index1 => index1 >=0 && index1 < btns.length);
            // const cornerAdjacentButtons =cornerAdjacentIndices.map(index1 => btns[index1]);

           
           cir2s.forEach(cir2=>{
            const cir2sIndex = Array.from(cir2s).indexOf(cir2);
            if(adjacentIndices.includes(cir2sIndex)){
                // console.log(cir2sIndex);
               
    
                           adjacentButtons.push(cir2);
             
                }
                
            })
            cir3s.forEach(cir3=>{
                const cir3sIndex = Array.from(cir3s).indexOf(cir3);
                if(adjacentIndices.includes(cir3sIndex)){
                    // console.log(cir3sIndex);
                   
        
                               adjacentButtons.push(cir3);
                 
                    }
                   
                })
            
            return adjacentButtons;

        }
                function getCornerBtnType(currentButton1){
                    const currentButtonIndex=Array.from(btns).indexOf(currentButton1);
                    if(
                        
                        (currentButtonIndex === 0)||(currentButtonIndex === 8 - 1)
                        ||(currentButtonIndex === 8*7- 8)||(currentButtonIndex === 8*7- 1) 
                        
                           // console.log(currentButtonIndex);
                    )
                    {
                        return 'corner';
                    // }else if(
                    //     (currentButtonIndex >= 1 && currentButtonIndex <= 8 - 2) ||
                    //     (currentButtonIndex >= 8 * 8 - 8 + 1 && currentButtonIndex <= 8 * 8 - 2) ||
                    //     (currentButtonIndex % 8 === 0 && currentButtonIndex !== 0 && currentButtonIndex !== 8 * 8 - 8 ) 
                    // ){
                    //     return 'edge';
                    }else{
                        return 'center';
                    }
                }
                
                function getCornerAdjBtns(cornerBtn){
                    const cornerBtnIndex=Array.from(btns).indexOf(cornerBtn);
                    const row = Math.floor(cornerBtnIndex / 8);
                    const col = cornerBtnIndex % 8;
                    const cornerAdjIndices = [];
                    if(row === 0 && col === 0){
                        cornerAdjIndices.push(cornerBtnIndex + 1);
                        cornerAdjIndices.push(cornerBtnIndex + 8);
                        cornerAdjIndices.push(cornerBtnIndex + 8 + 1);

                    }
                    else if(row === 0 && col === 8 - 1){
                        cornerAdjIndices.push(cornerBtnIndex - 1);
                        cornerAdjIndices.push(cornerBtnIndex + 8);
                        cornerAdjIndices.push(cornerBtnIndex + 8 - 1);

                    }
                    else if(row === 7- 1 && col === 0){
                        cornerAdjIndices.push(cornerBtnIndex + 1);
                        cornerAdjIndices.push(cornerBtnIndex - 8);
                        cornerAdjIndices.push(cornerBtnIndex - 8 + 1);

                    }
                    else if(row === 7 - 1 && col === 8 - 1){
                        cornerAdjIndices.push(cornerBtnIndex - 1);
                        cornerAdjIndices.push(cornerBtnIndex - 8);
                        cornerAdjIndices.push(cornerBtnIndex - 8 - 1);

                    }
                    const cornerAdjacentButtons =cornerAdjIndices.map(index1 => btns[index1]);
                    cir2s.forEach(cir2=>{
                     const cir2sIndex = Array.from(cir2s).indexOf(cir2);
                      if(cornerAdjIndices.includes(cir2sIndex)){
                // console.log(cir2sIndex);
               
    
                           cornerAdjacentButtons.push(cir2);
             
                   }
                
            })
            cir3s.forEach(cir3=>{
                const cir3sIndex = Array.from(cir3s).indexOf(cir3);
                if(cornerAdjIndices.includes(cir3sIndex)){
                    // console.log(cir3sIndex);
                   
        
                               cornerAdjacentButtons.push(cir3);
                 
                   }
                   
               })

                    return cornerAdjacentButtons;
                }




         Buttons.forEach( Button =>{  
             const btns = Button.querySelectorAll(".blue");
            
            // console.log(allblue);
            // if(checkWin()){
            //     alert("blue color is win");
            // }
            btns.forEach(btn=>{
                
                btn.addEventListener("click", playerTerm);
                
            })
           
        })
    
        
            
        
                    
                    
                    
                   
                
               
          
            
            
           
            

    
    
    

