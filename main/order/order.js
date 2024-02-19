import { sleep } from "../AllSocialPanel/dayTime.js"

let navBar = document.querySelector('.pagination-container')
let paginatedList = document.querySelector('.tbody')
export async function orders (stt, uid, get, child){
  if(window.location.pathname === '/main/order/order.html'){
    let div = document.createElement('tbody')


    get(child(stt, 'users/' + uid )).then((snapshot) => {
      if(snapshot.exists()) {
      
        let usd = Object.values(snapshot.val())[4]
        paginatedList.style.display = 'none'
        div.innerHTML = usd

        let arr = div.querySelectorAll('tr')
        let reverseObject = (Object.entries(arr).reverse())
        for(let i = 0; i < reverseObject.length; i++){
            paginatedList.append(reverseObject[i][1])
        }
        const paginationNumbers = document.getElementById("pagination-numbers");
        // const paginatedList = document.getElementById("paginated-list");
        const listItems = paginatedList.querySelectorAll("tr");
        const nextButton = document.getElementById("next-button");
        const prevButton = document.getElementById("prev-button");
        
        const paginationLimit = 10;
        const totalNumberList = 5;
        const pageCount = Math.ceil(listItems.length / paginationLimit);
        const totalPageCount = Math.ceil(pageCount / totalNumberList)
        
        let currentPage = 1;
        let currentPages = 1;
        if(pageCount > 1){
          navBar.style.display = 'flex'
        }
        
      const disableButton = (button) => {
      button.classList.add("disabled");
      button.setAttribute("disabled", true);
      };
      
      const enableButton = (button) => {
      button.classList.remove("disabled");
      button.removeAttribute("disabled");
      };
      
      const handlePageButtonsStatus = () => {
      if (currentPage === 1) {
      disableButton(prevButton);
      } else {
      enableButton(prevButton);
      }
      
      if (pageCount === currentPage) {
      disableButton(nextButton);
      } else {
      enableButton(nextButton);
      }
      };
      
      const handleActivePageNumber = () => {
      document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentPage) {
        button.classList.add("active");
      }
      });
      };

      const pageCountNumber = (i)=>{
        let num = 1;
        while(i > 5){
          break

        }
      }
      
      const paginatedNumber = (pageNum, pageNumber) => {
        currentPages = pageNum;

           const prevRange = (pageNum - 1) * totalNumberList;
           const currRange = pageNum * totalNumberList;
           
           pageNumber.forEach((item, index) => {
             item.classList.add("hidden");
             if (index >= prevRange && index < currRange) {
               item.classList.remove("hidden");
             }
           });
         };

         const paginatedNumberList = (pageNum, pageNumber) =>{
          if(currentPage >= 4){
            console.log((pageNum / totalNumberList) + 0.8)
            paginatedNumber((pageNum / totalNumberList) + 0.8, pageCountNumber)
          }else(
            paginatedNumber(pageNum, pageNumber)
          )
         }
      
      const appendPageNumber = (index) => {
          const pageNumber = document.createElement("button");
          pageNumber.className = "pagination-number";
          pageNumber.innerHTML = index;
          pageNumber.setAttribute("page-index", index);
          pageNumber.setAttribute("aria-label", "Page " + index);
          
          paginationNumbers.appendChild(pageNumber);
          let allNumber = paginationNumbers.querySelectorAll('button')
          paginatedNumber(currentPage, allNumber)
        };
        
        const getPaginationNumbers = () => {
            for (let i = 1; i <= pageCount; i++) {
              appendPageNumber(i);
      }
      };
        
      const setCurrentPage = (pageNum) => {
        currentPage = pageNum;
         
           handleActivePageNumber();
           handlePageButtonsStatus();
           
           const prevRange = (pageNum - 1) * paginationLimit;
           const currRange = pageNum * paginationLimit;
           
           listItems.forEach((item, index) => {
             item.classList.add("hidden");
             if (index >= prevRange && index < currRange) {
               item.classList.remove("hidden");
             }
           });
         };



          
           setTimeout(()=>{
              let total = (currentPage / totalNumberList) + 0.8
             
             let allNumber = paginationNumbers.querySelectorAll('button')
             paginatedList.style.display = 'contents'
               getPaginationNumbers()
               setCurrentPage(1)
                 
                prevButton.addEventListener("click", () => {
                  let allNumber = paginationNumbers.querySelectorAll('button')
                  currentPages = currentPage
                  
                  setCurrentPage(currentPage - 1);
                   if(currentPage >= 4){
                     paginatedNumber((currentPages / totalNumberList) + 0.5, allNumber)
                    }else{
                      paginatedNumber(currentPages / currentPages, allNumber)
                    }


                });
           
             nextButton.addEventListener("click", () => {
               
               let allNumber = paginationNumbers.querySelectorAll('button')
               currentPages = currentPage
               
               setCurrentPage(currentPage + 1);
               if(currentPage >= 4){
                 paginatedNumber((currentPages / totalNumberList) + 0.5, allNumber)
                }else{
                  paginatedNumber(currentPages / currentPages, allNumber)
                }
               
               
              });
              
              document.querySelectorAll(".pagination-number").forEach((button) => {
                
                const pageIndex = Number(button.getAttribute("page-index"));
                
                if (pageIndex) {
                  button.addEventListener("click", () => {
                  let allNumber = paginationNumbers.querySelectorAll('button')
                    setCurrentPage(pageIndex);
                    if(currentPage % 4 === 0){
                      paginatedNumber((pageIndex / totalNumberList) + 0.5, allNumber)
                    }else if(currentPage <= 4){
                      paginatedNumber(currentPage / currentPage, allNumber)
                    }else{
                      paginatedNumber((pageIndex / totalNumberList) + 0.5, allNumber)
                    }
                    
                 });
               }
             });
            
         }, 500)
        } else{
          paginatedList.innerHTML = ''
        }

        })
      
        
    }
    
  }
  











// export async function orders (stt, uid, get, child){
//   if(window.location.pathname === '/main/order/order.html'){
//     let div = document.createElement('tbody')


//     get(child(stt, 'users/' + uid )).then((snapshot) => {
      
//       // if(snapshot.exists()) {
//         let usd = Object.values(snapshot.val())[4]
//         paginatedList.style.display = 'none'
//         div.innerHTML = usd

//         let arr = div.querySelectorAll('tr')
//         let reverseObject = (Object.entries(arr).reverse())
//         for(let i = 0; i < reverseObject.length; i++){
//             paginatedList.append(reverseObject[i][1])
//         }
//         const paginationNumbers = document.getElementById("pagination-numbers");
//         // const paginatedList = document.getElementById("paginated-list");
//         const listItems = paginatedList.querySelectorAll("tr");
//         const nextButton = document.getElementById("next-button");
//         const prevButton = document.getElementById("prev-button");
        
//         const paginationLimit = 10;
//         const totalNumberList = 5;
//         const pageCount = Math.ceil(listItems.length / paginationLimit);
//         const totalPageCount = Math.ceil(pageCount / totalNumberList)
        
//         let currentPage = 1;
//         if(pageCount > 1){
//           navBar.style.display = 'flex'
//         }
        
//       const disableButton = (button) => {
//       button.classList.add("disabled");
//       button.setAttribute("disabled", true);
//       };
      
//       const enableButton = (button) => {
//       button.classList.remove("disabled");
//       button.removeAttribute("disabled");
//       };
      
//       const handlePageButtonsStatus = () => {
//       if (currentPage === 1) {
//       disableButton(prevButton);
//       } else {
//       enableButton(prevButton);
//       }
      
//       if (pageCount === currentPage) {
//       disableButton(nextButton);
//       } else {
//       enableButton(nextButton);
//       }
//       };
      
//       const handleActivePageNumber = () => {
//       document.querySelectorAll(".pagination-number").forEach((button) => {
//       button.classList.remove("active");
//       const pageIndex = Number(button.getAttribute("page-index"));
//       if (pageIndex == currentPage) {
//         button.classList.add("active");
//       }
//       });
//       };

//       const pageCountNumber = ()=>{
//         if(pageCount > 5){
//           console.log(totalPageCount)
//         }
//       }
      
//       const appendPageNumber = (index) => {
//       const pageNumber = document.createElement("button");
//       pageNumber.className = "pagination-number";
//       pageNumber.innerHTML = index;
//       pageNumber.setAttribute("page-index", index);
//       pageNumber.setAttribute("aria-label", "Page " + index);
      
//       paginationNumbers.appendChild(pageNumber);
//       };
      
//       pageCountNumber()
//       const getPaginationNumbers = () => {
//       for (let i = 1; i <= pageCount; i++) {
//       appendPageNumber(i);
//       }
//       };
        
//       const setCurrentPage = (pageNum) => {
//         currentPage = pageNum;
         
//            handleActivePageNumber();
//            handlePageButtonsStatus();
           
//            const prevRange = (pageNum - 1) * paginationLimit;
//            const currRange = pageNum * paginationLimit;
         
//            listItems.forEach((item, index) => {
//              item.classList.add("hidden");
//              if (index >= prevRange && index < currRange) {
//                item.classList.remove("hidden");
//              }
//            });
//          };


//         //  window.addEventListener('load', ()=>{
//         //    console.log('hello')
//         //  })
//         //  window.addEventListener("load", async() => {
//         //    await sleep(5000)
//         //    console.log('hello')
//         //    getPaginationNumbers();
//         //    setCurrentPage(1);
         
//         //   });
          
          
//            setTimeout(()=>{
             
//              paginatedList.style.display = 'contents'
//                getPaginationNumbers()
//                setCurrentPage(1)
//              prevButton.addEventListener("click", () => {
//                setCurrentPage(currentPage - 1);
//              });
           
//              nextButton.addEventListener("click", () => {
//                setCurrentPage(currentPage + 1);
//              });
           
//              document.querySelectorAll(".pagination-number").forEach((button) => {
//                const pageIndex = Number(button.getAttribute("page-index"));
           
//                if (pageIndex) {
//                  button.addEventListener("click", () => {
//                    setCurrentPage(pageIndex);
//                  });
//                }
//              });
            
//          }, 500)

//         })
        
//     }
    
//   }
  




  
  
  
  




  // if(listItems.length > paginationLimit){
  //   let array = (Object.values(listItems))
  //   for(let l= 0; l < paginationLimit; l++){
  //     console.log(listItems[l])
  //     paginatedList.append(listItems[l])

  //   }
  //   const appendPageNumber = (index) => {
  //       const pageNumber = document.createElement("button");
  //       pageNumber.className = "pagination-number";
  //       pageNumber.innerHTML = index;
  //       pageNumber.setAttribute("page-index", index);
  //       pageNumber.setAttribute("aria-label", "Page " + index);
      
  //       paginationNumbers.appendChild(pageNumber);
  //     };

  //   for(let i = 1; i <= pageCount; i++){
  //     appendPageNumber(i)
  //   }