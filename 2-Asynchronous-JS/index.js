const fs = require('fs');
const superagent = require('superagent');


/////////working with promise and promisify the readFile and writeFile function

const readFilePro = file=>{
    return new Promise((resolve, reject) =>{
        fs.readFile(file, (err,data) =>{
            if(err) reject('Such file is not find');
            resolve(data);
        });
    });
};

const writeFilePro = (file, data)=>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(file, data, (err) =>{
            if (err) reject('Such file is not find');
            resolve("success");
        });
    });
};

//consuming promises with Async/Await

const getDogPic = async () => {
    try {
        const data =await readFilePro('dog.txt');
        console.log(`Breed:${data}`);

        const res =await superagent.get(`https://dog.ceo/api/breed/${data}/images/random `);
        console.log(res.body.message);

        await writeFilePro('dog-img.txt', res.body.message);
        console.log('something is written in the text');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return '2: READY 🐶';
  };
  
  (async () => {
    try {
      console.log('1: Will get dog pics!');
      const x = await getDogPic();
      console.log(x);
      console.log('3: Done getting dog pics!');
    } catch (err) {
      console.log('ERROR 💥');
    }
  })();
  
  /*
  console.log('1: Will get dog pics!');
  getDogPic()
    .then(x => {
      console.log(x);
      console.log('3: Done getting dog pics!');
    })
    .catch(err => {
      console.log('ERROR 💥');
    });
  */


    //////working with promice

    /* readFilePro('dog.txt')
.then(data =>{
    console.log(`Breed:${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random `)
})
.then(res=>{
      console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message)
})
 .then(() => {
 console.log('something is written in the text');
 })
 .catch(err => {
        console.log(err.message);
}); 
*/


////working with callback:callbacka Hell
/*
fs.readFile(`${__dirname}/dog.txt`, (err, data) =>{
    console.log(`Breed:${data}`)

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random `).end((err, res) =>{
      if(err) return console.log(err.message);
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if(err) return console.log(err.message);
        console.log('something is written in the text');
       });
    });
});
*/

