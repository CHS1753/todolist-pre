// 1. boards를 읽어오는 함수, 없으면 생성

function getBoards() {
  let boards = localStorage.getItem('boards');
  if(boards===null) {
    boards = [];
    localStorage.setItem('boards',JSON.stringify(boards));
  } else {
    boards = JSON.parse(boards);
  }
  return boards;
}
// 2. 글을 작성할 때 새로운 들번호를 작성하는 함수
function getNewBno () {
  
  let bno = localStorage.getItem('bno');
  if (bno===null) {
    bno =1;
    localStorage.setItem('bno','1');
   return 1;
  } else {
    bno = (+bno)+1
    localStorage.setItem('bno',bno)
  }
  return bno;
}

// 3. 글 한개를 읽어오는 함수 못읽으면 null로 표시
function getBoard (boards,bno) {
  for (const board of boards) {
    // console.log(board, board.bno===bno)
    if (board.bno === bno) {
      return board;
    }
  }
  return null;
}

// function doDelete(boards) {
//   for(let i=0; i<boards.lenth; ++i) {
//     if(boards[i].bno===bno) {
//       boards.splice(i,1);
//       localStorage.setItem('boards',JSON.stringify(boards))
//     }
//   }
//   // location.href="index-1.html";
// }