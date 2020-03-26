const progressCats = document.querySelector('.progress-bar-cats')
const progressParrots = document.querySelector('.progress-bar-parrots')
const progressDogs = document.querySelector('.progress-bar-dogs')

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
    var votesResult = JSON.parse(message.data);
    let summa = votesResult.cats+votesResult.parrots+votesResult.dogs;

    progressCats.style.cssText = `width: ${votesResult.cats/summa*100}%;`;
    progressCats.textContent = `Кошки ${votesResult.cats/summa*100}% (${votesResult.cats} голосов)`;
    progressParrots.style.cssText = `width: ${votesResult.parrots/summa*100}%;`;
    progressParrots.textContent = `Попугаи ${votesResult.parrots/summa*100}% (${votesResult.parrots} голосов)`;
    progressDogs.style.cssText = `width: ${votesResult.dogs/summa*100}%;`;
    progressDogs.textContent = `Собаки ${votesResult.dogs/summa*100}% (${votesResult.dogs} голосов)`;
}