// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function() {
  const robotPanel = document.querySelector('#robot-details');
  console.log(robotPanel);
  const allRobotLinks = document.querySelectorAll('article.robot a');

  allRobotLinks.forEach((link) => {



    link.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('clicked!...............' , link.href);

      fetch(link.href+'.json',{
        method: 'GET',
       
      }).then(e=>e.json()).then((response) => {
        console.log('It worked!');
         console.log(response);
        // response.data
        // robotPanel.innerHTML = response;
        // console.log(response);

        const robotImage = document.createElement('img');
        robotImage.src = `http://robohash.org/${response.address}`;

        robotPanel.innerHTML = "";
        robotPanel.append(robotImage);

        const dl = document.createElement('dl');
        robotPanel.append(dl);

        const nameKeyTag = document.createElement('dt');
        nameKeyTag.innerText = 'Name';
        dl.append(nameKeyTag);

        const nameValueTag = document.createElement('dd');
        nameValueTag.innerText = response.name;
        dl.append(nameValueTag);

        // console.log(response.data);
      });

      //*****************************html format below */

      // fetch(link.href,{
      //   method: 'GET',
       
      // }).then(e=>e.text()).then((response) => {
      //   console.log('It worked!');
      //    console.log(response);
      //   // response.data
      //   // robotPanel.innerHTML = response;
      //   // console.log(response);

      // });

    });
  });


  // link.addEventListener('click', function() {
  //
  // });
});
