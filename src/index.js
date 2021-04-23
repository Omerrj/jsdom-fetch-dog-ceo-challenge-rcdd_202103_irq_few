window.addEventListener('DOMContentLoaded', (e) => {
  const dogImageContainer=document.getElementById("dog-image-container");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogBreeds=document.getElementsByTagName('ul')[0];
  
  const renderImgs=(imgs)=>{
    imgs.message.forEach((img)=>{
      const image=document.createElement('img');
      image.width=200;
      image.height=200;
      image.src=img;
      
      dogImageContainer.append(image);
    });
  };
  

   for (const breed in breeds) {
      const li=document.createElement('li');
      li.textContent=breed.message;
      
      dogBreeds.append(li);
    }
    
  };
  
  
  fetch(imgUrl)
  .then(r=>r.json())
  .then(renderImgs)
  .catch(e=>console.log(e));
  
  
  fetch(breedUrl)
  .then(r=>r.json())
  .then(console.log)
  .catch(e=>console.log(e));

});
