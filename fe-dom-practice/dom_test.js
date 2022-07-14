const container = document.querySelector('#container'); // Read
const tweetDiv = document.createElement('div'); // Create

tweetDiv.textContent = 'dev'; // Update
tweetDiv.classList.add('tweet'); // Update

container.append(tweetDiv); // Append

// tweetDiv.remove(); // Delete

// while (container.firstChild) {
//     container.removeChild(container.firstChild);
// }
// 자식 요소가 남아있지 않을 때까지, 첫 번째 자식 요소를 삭제


// while (container.children.length > 1){
//     container.removeChild(container.lastChild);
// }
// container의 자식 요소가 1개만 남을 때까지, 마지막 자식 요소를 제거


// for (let tweet of tweets) {
//     tweetDiv.remove();
// }
// class 이름이 tweet인 요소만 찾아서 제거