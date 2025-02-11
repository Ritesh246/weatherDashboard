document.querySelector(".webname li img").addEventListener("click", () => {
  document.querySelector(".dropside").style.display = "block";
  document.querySelector(".dropside").style.opacity = "1";
  document.querySelector(".dropside").style.width = "18vw";
  document.querySelector(".dropside").style.height = "100vh";
});

document.querySelector(".dropside img").addEventListener("click", () => {
  document.querySelector(".dropside").style.display = "none";
  document.querySelector(".dropside").style.opacity = "0";
  document.querySelector(".dropside").style.width = "0";
  document.querySelector(".dropside").style.height = "100vh";
});

document.querySelector(".home-btn").addEventListener("click", () => {
  document.querySelector(".home").style.display = "block";
  document
    .querySelectorAll(
      ".About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".bottom .home-btn").addEventListener("click", () => {
  document.querySelector(".home").style.display = "block";
  document
    .querySelectorAll(
      ".About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dhome-btn").addEventListener("click", () => {
  document.querySelector(".home").style.display = "block";
  document
    .querySelectorAll(
      ".About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".abt-us-btn").addEventListener("click", () => {
  document.querySelector(".About_us,.dAbout_us").style.display = "block";
  document
    .querySelectorAll(
      ".home,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dabt-us-btn").addEventListener("click", () => {
  document.querySelector(".About_us,.dAbout_us").style.display = "block";
  document
    .querySelectorAll(
      ".home,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".agro").addEventListener("click", () => {
  document.querySelector(".Agro_help").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dagro").addEventListener("click", () => {
  document.querySelector(".Agro_help").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.NewsLetter,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".news").addEventListener("click", () => {
  document.querySelector(".NewsLetter").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dnews").addEventListener("click", () => {
  document.querySelector(".NewsLetter").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.AI-WEMAN,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".AI").addEventListener("click", () => {
  document.querySelector(".AI-WEMAN").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dAI").addEventListener("click", () => {
  document.querySelector(".AI-WEMAN").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.Setting,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".set-the-things").addEventListener("click", () => {
  document.querySelector(".Setting").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dset-the-things").addEventListener("click", () => {
  document.querySelector(".Setting").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.mails_part"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".mails").addEventListener("click", () => {
  document.querySelector(".mails_part").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});
document.querySelector(".dmails_part").addEventListener("click", () => {
  document.querySelector(".mails_part").style.display = "block";
  document
    .querySelectorAll(
      ".home,.About_us,.Agro_help,.NewsLetter,.AI-WEMAN,.Setting"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
});

document.querySelector("#search").addEventListener("click", () => {
  document.querySelector(".searchTheWeather").style.display = "block";
});

document.querySelector(".dsearch").addEventListener("click", () => {
  document.querySelector(".searchTheWeather").style.display = "block";
});

document.querySelector(".dsearch").addEventListener("click", () => {
  document.querySelector(".searchTheWeather").style.transform = "";
});

document.querySelector(".Box-section2").addEventListener("click", () => {
  document.querySelector(".searchTheWeather").style.display = "none";
  document.querySelector(".dropside").style.display = "none";
});

function NewsCard(topic_name, news_para, image) {
  let html = `<div class="head-contentNews">
                        <div class="newsTopics">${news_para}<div class="inside_text">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        </div></div>
                        <div class="newsHeadingRecent">${topic_name}</div>
                      </div>
                         <div class="image_news">
                          <img src="${image}" alt="">
                         </div>
                         `;

  document.querySelector(".newsContent").innerHTML =
    document.querySelector(".newsContent").innerHTML + html + "<br>";
}
function NewsCard2(topic_name, news_para, image) {
  let html = `<div class="head-contentNews">
                        <div class="newsTopics">${news_para}<div class="inside_text">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        </div></div>
                        <div class="newsHeadingRecent">${topic_name}</div>
                      </div>
                         <div class="image_news">
                          <img src="${image}" alt="">
                         </div>
                         `;

  document.querySelector(".nC2").innerHTML =
    document.querySelector(".nC2").innerHTML + html + "<br>";
}
function NewsCard3(topic_name, news_para, image) {
  let html = `<div class="head-contentNews">
                        <div class="newsTopics">${news_para}<div class="inside_text">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        </div></div>
                        <div class="newsHeadingRecent">${topic_name}</div>
                      </div>
                         <div class="image_news">
                          <img src="${image}" alt="">
                         </div>
                         `;
  document.querySelector(".nC3").innerHTML =
    document.querySelector(".nC3").innerHTML + html + "<br>";
}
function NewsCard4(topic_name, news_para, image) {
  let html = `<div class="head-contentNews">
                        <div class="newsTopics">${news_para}<div class="inside_text">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        </div></div>
                        <div class="newsHeadingRecent">${topic_name}</div>
                      </div>
                         <div class="image_news">
                          <img src="${image}" alt="">
                         </div>
                         `;

  document.querySelector(".nC4").innerHTML =
    document.querySelector(".nC4").innerHTML + html + "<br>";
}

NewsCard(
  "California Facing Fire Strokes",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi animi aspernatur velit natus deserunt fugiat id aliquid nihil assumenda?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, placeat!",
  "images.jpg"
);

NewsCard2(
  "California Facing Fire Strokes This is second",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi animi aspernatur velit natus deserunt fugiat id aliquid nihil assumenda?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, placeat!",
  "images.jpg"
);
NewsCard3(
  "California Facing Fire Strokes This is THIRD",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi animi aspernatur velit natus deserunt fugiat id aliquid nihil assumenda?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, placeat!",
  "images.jpg"
);
NewsCard4(
  "California Facing Fire Strokes This is FOURTH",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi animi aspernatur velit natus deserunt fugiat id aliquid nihil assumenda?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, placeat!",
  "images.jpg"
);

//card

function updateEventListeners() {
  document.querySelector(".btnCard4").addEventListener("click", () => {
    Button3();
    updateEventListeners();
  });

  document.querySelector(".btnCard3").addEventListener("click", () => {
    Button2();
    updateEventListeners();
  });

  document.querySelector(".btnCard2").addEventListener("click", () => {
    Button1();
    updateEventListeners();
  });

  document.querySelector(".btnCard1").addEventListener("click", () => {
    Button4();
    updateEventListeners();
  });
}

function Button3() {
  let html = `<h1>Additional Analytics of Weather of Mumbai</h1>
              <div class="additional_info_box">
                  <div class="cards_add card4">
                    <div class="cardup">
                       <h3>This is Card 4</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard4">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card1">
                    <div class="cardup">
                       <h3>This is Card 1</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard1">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card2">
                    <div class="cardup">
                       <h3>This is Card 2</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard2">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card3">
                    <div class="cardup">
                       <h3>This is Card 3</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard3">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  
              </div>`;
  document.querySelector(".additional").innerHTML = html;
  document.querySelector(".card4").style.margin = "60px";
  document.querySelector(".card1").style.margin = "90px";
  document.querySelector(".card2").style.margin = "120px";
  document.querySelector(".card3").style.margin = "150px";
  updateEventListeners();
}

function Button2() {
  let html = `<h1>Additional Analytics of Weather of Mumbai</h1>
              <div class="additional_info_box">
                  <div class="cards_add card3">
                    <div class="cardup">
                       <h3>This is Card 3</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard3">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card4">
                    <div class="cardup">
                       <h3>This is Card 4</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard4">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card1">
                    <div class="cardup">
                       <h3>This is Card 1</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard1">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card2">
                    <div class="cardup">
                       <h3>This is Card 2</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard2">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  
                  
                  
              </div>`;
  document.querySelector(".additional").innerHTML = html;
  document.querySelector(".card3").style.margin = "60px";
  document.querySelector(".card4").style.margin = "90px";
  document.querySelector(".card1").style.margin = "120px";
  document.querySelector(".card2").style.margin = "150px";
  updateEventListeners();
}

function Button1() {
  let html = `<h1>Additional Analytics of Weather of Mumbai</h1>
              <div class="additional_info_box">
                   <div class="cards_add card2">
                    <div class="cardup">
                       <h3>This is Card 2</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard2">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                   <div class="cards_add card3">
                    <div class="cardup">
                       <h3>This is Card 3</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard3">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                   <div class="cards_add card4">
                    <div class="cardup">
                       <h3>This is Card 4</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard4">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  <div class="cards_add card1">
                    <div class="cardup">
                       <h3>This is Card 1</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard1">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  
                  
                 
              </div>`;
  document.querySelector(".additional").innerHTML = html;
  document.querySelector(".card2").style.margin = "60px";
  document.querySelector(".card3").style.margin = "90px";
  document.querySelector(".card4").style.margin = "120px";
  document.querySelector(".card1").style.margin = "150px";
  updateEventListeners();
}

function Button4() {
  let html = `<h1>Additional Analytics of Weather of Mumbai</h1>
              <div class="additional_info_box">
                   <div class="cards_add card1">
                    <div class="cardup">
                       <h3>This is Card 1</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard1">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                   <div class="cards_add card2">
                    <div class="cardup">
                       <h3>This is Card 2</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard2">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                   <div class="cards_add card3">
                    <div class="cardup">
                       <h3>This is Card 3</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard3">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                   <div class="cards_add card4">
                    <div class="cardup">
                       <h3>This is Card 4</h3>
                  <div class="nextCardDisplay">
                    <button class="btnCard4">Next</button>
                  </div>
                    </div>
                    <div class="cardDown">

                    </div>
                  </div>
                  
                  
                  
                 
              </div>`;
  document.querySelector(".additional").innerHTML = html;
  document.querySelector(".card1").style.margin = "60px";
  document.querySelector(".card2").style.margin = "90px";
  document.querySelector(".card3").style.margin = "120px";
  document.querySelector(".card4").style.margin = "150px";
  updateEventListeners();
}

updateEventListeners();

setTimeout(()=>{
  window.location.href='Login.html';
},10000);

