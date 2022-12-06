export interface News {
    autor: string;
    title: string;
    text: string;
    imgUrl: string;
  }

  
  export let news: News[] = [
    {autor: 'Adminchik', 
        title: 'Пропала грамота', 
        text:'Старий дяк просить молодь розіграти історію про його діда — славетного козака. Подальші події розгортаються як своєрідна уявна вистава. Після бою з бусурманами козак Василь повертається додому в Диканьку.', 
        imgUrl: 'https://armyinform.com.ua/wp-content/uploads/2022/06/1-74.jpg'},
    {autor: 'Adminchik', 
        title: 'Вавілон 20',
        text:'Місцевий трунар і філософ Фабіан слідом повертається до Вавилона, роздумуючи про те, що головне не пройти шлях, а багато що на ньому побачити.',
        imgUrl: 'https://takflix.com/sites/default/files/2021-01/Babylon_18.jpg'},
    {autor: 'Tori', 
        title: 'Тіні забутих предків',
        text:'Іван та Марічка ростуть і проводять багато часу разом і закохуються одне в одного. Однак їхня рідня обурена цими стосунками, памятаючи про ворожнечу родів.',
        imgUrl: 'https://detector.media/doc/images/news/archive/2016/170370/i75_ArticleImage_170370.jpg'},
    {autor: 'Adminchik', 
        title: 'Білий птах з чорною ознакою',
        text:'У священика зростає дочка-красуня Дана (Лариса Кадочникова), в яку закохані троє старших братів. Вона не може вибрати когось одного, що спричиняє сварку братів. Ця любов буде відігравати велику роль у житті кожного із синів Дзвонаря, але щастя любові не отримає ніхто.',
        imgUrl: 'https://planetakino.ua/res/get-poster/00000000000000000000000000003689/vend.jpg'},
  ]
  

export function pushNewsPost(post : News){
    news.push(post);
    console.log(news.length);
}

  //console.log("NOW");
  //let p: News = {title: 'Вавілон 20', text:'Місцевий трунар і філософ Фабіан слідом повертається до Вавилона, роздумуючи про те, що головне не пройти шлях, а багато що на ньому побачити.', imgUrl: 'https://takflix.com/sites/default/files/2021-01/Babylon_18.jpg'};
  //news.push(p);