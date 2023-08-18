    const players=["player1","player2"];
     var currentPlayerIndex =0;

// const button=document.getElementsByTagName("button");
     const Buttons=document.querySelectorAll(".btn-group");
    const btns = document.querySelectorAll(".blue");
    const cir2s=document.querySelectorAll(".cir2");
  const sameclrs = document.querySelectorAll(".sameclr");
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
            btns.forEach(btn => {

                const white="#f2f2f8";
                // var cir1 = btn.textContent ==='C1';
                /* var cir22=btn.textContent==='C2';
                var cir33=btn.textContent==='C3'; */
            
                function switchingPlayers(){
                   
                     var counter=0;
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
                                               const adjacentButtons=changeNeighbour( btn, sameclrs );
                                             
                                            //  console.log(adjacentButtons);
                                               //console.log(allThreeBtns);
                                               adjacentButtons.forEach(adjButton =>{
                                                if(adjButton.style.backgroundColor==="green"){

                                                    adjButton.style.backgroundColor="blue";
                                                    btn.style.backgroundColor="#f2f2f8";
                                                    btn.style.width="35px";
                                                    btn.style.height="35px";
                                                    btn.style.marginLeft="7px";
                                                    btn.style.marginTop="7px";

                                                    cir2.style.backgroundColor="#f2f2f8";
                                                    cir3.style.backgroundColor="#f2f2f8";

                                                    cir2.style.display="none";
                                                    cir3.style.display="none";
                                                   currentPlayerIndex++;
                                                   currentPlayerIndex++;
                                                }
                                              

                                               });
                                                //   cir2.style.backgroundColor="blue";
                                                    // cir3.style.backgroundColor="blue";

                                             //console.log("click");
                                            //  cir2s.forEach(cir2=>{
                                            //     cir2.style.backgroundColor="blue";
                                            // })
                                            // cir3s.forEach(cir3=>{
                                            //     cir3.style.backgroundColor="blue";
                                            // })
                                        
                                            }
                                        });
                                    }
                                    
                                    
                                });
                               
                            }
                            else{
                                currentPlayerIndex++; //to switch correct player
                            }
                           
                        }

                    if(currentPlayerIndex==0){
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
                                        
                                        const adjacentButtons=changeNeighbour( btn, sameclrs );
                                             
                                              console.log(adjacentButtons);
                                               //console.log(allThreeBtns);
                                               adjacentButtons.forEach(adjButton =>{
                                                if(adjButton.style.backgroundColor==="blue"){

                                                    adjButton.style.backgroundColor="green";
                                                    btn.style.backgroundColor="#f2f2f8";
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
                                    })
                                }
                               
                                        
                            })
                                   
                        }
                        else{
                            currentPlayerIndex++;
                        }
        
        
        
        
        
                    }
                       
                   
                }

                            
                            
                        
                       
                        
                               
                          
                               
                                  
                                   
                                    
                       
                //         //console.log(currentPlayerIndex++);



              
                
                // //currentPlayerIndex++;
                switchingPlayers();
                
                    
        
                
                
              
                 
            });

            
        }


         function changeNeighbour(currentButton ,sameclrs){
            //const parentbox=currentButton.parentElement;
            // allbuttons = parentbox.querySelectorAll(".blue");
          // const sameclr = parentbox.querySelectorAll(".sameclr");
            //const cir3s =parentbox.querySelectorAll(".cir3");
            const currentBtnIndex=Array.from(btns).indexOf(currentButton);
            
            
           // console.log(Array(btns));
            const adjacentIndices = [
                currentBtnIndex - 9 ,currentBtnIndex - 8, currentBtnIndex - 7,
                currentBtnIndex - 1 ,                    , currentBtnIndex + 1,
                currentBtnIndex + 7,  currentBtnIndex + 8, currentBtnIndex + 9
            ].filter(index => index >=0 && index < btns.length);
            const adjacentButtons= adjacentIndices.map(index => btns[index]);
            sameclrs.forEach(sameclr=>{
                const sameclrIndex = Array.from(btns).indexOf(sameclr);
                adjacentButtons.push(sameclr);
            })
            return adjacentButtons;

        }
        // function getCir23(currentButton){
        //     const parentbox=currentButton.parentElement;
        //     //const cir23btns = parentbox.querySelectorAll(".cir2, .cir3");
        //     const cir23Btns = parentbox.querySelectorAll(".cir2, .cir3");
        //     return Array.from(cir23Btns);
        // }

         Buttons.forEach( Button =>{  
             const btns = Button.querySelectorAll(".blue");
            btns.forEach(btn=>{
                btn.addEventListener("click", playerTerm);
               
            })
         })
                    
                    
                    
                   
                
               
          
            
            
           
            

    
    
    

