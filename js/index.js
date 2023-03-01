const lodeMeals = async(search = 'fish')=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const data =  await res.json()
    // const sicke=  data.slice(0,6)
    const short = ((data.meals).slice(0,6))
    showMale(short);
}


const showMale = males =>{
    console.log(males);
    const malesContainer = document.getElementById('meal-container');
    malesContainer.innerText = ' '
    males.forEach((male) => {
        const maleDiv = document.createElement('div')
        maleDiv.classList.add('card')
        maleDiv.classList.add('lg:card-side')
        maleDiv.classList.add('bg-base-100')
        maleDiv.classList.add('shadow-xl')
        maleDiv.innerHTML = `
            <img class="w-52 mx-auto mt-2 rounded-md" src="${male.strMealThumb}" alt="Album"/>
              <div class="card-body">
                <h2 class="card-title">${male.strMeal}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <label onclick="showDetails(${male.idMeal})" for="my-modal-6" class="underline text-yellow-400 text-xl font-semibold cursor-pointer">View Details</label>
              </div>
        `
        malesContainer.appendChild(maleDiv)
    });

   
}

const showDetails =async id =>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await res.json()
    displaySingleMealData(data.meals[0]);
}
const displaySingleMealData = male =>{
    let inductions = male.strInstructions
    inductions = inductions.substring(0,200)
    const modalContainer = document.getElementById('modal')
    modalContainer.innerHTML = `

    <div class="modal-box">
    <h3 class="font-bold text-lg">${male.strMeal}</h3>
    <img class="w-3/5 mt-5 mx-auto rounded-md" src="${male.strMealThumb}" alt="Album"/>
    <p class="mt-5"><span class="font-semibold text-lg">Category: </span> ${male.strCategory}</p>
    <p class="mt-5"><span class="font-semibold text-lg">Area:</span> ${male.strArea}</p>
    <p class="py-5"><span class="font-semibold text-lg">Instructions: </span> ${inductions}</p>
    <p class="py-5"><span class="font-semibold text-lg">Youtube: </span>  <a target="_blank" id="link" href="${male.strYoutube}">${male.strYoutube}</a></p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn bg-red-700 hover:bg-red-700 px-8 text-white">Close</label>
    </div>
  </div>
    
  `
}

let value;
const showAll = async(search2 = 'fish')=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    const data =  await res.json()
    showMale(data.meals)
    console.log(search2);
    
}


lodeMeals()

const searchMeal = () =>{
    const searchText = document.getElementById('search').value;
    lodeMeals(searchText)
    value=searchText
}



