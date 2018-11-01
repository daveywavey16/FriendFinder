// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
        name:"Tom",
        photo:"https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg",
        scores:[
           5,
           1,
           4,
           4,
           2,
           1,
           1,
           5,
           4,
           1
         ]
      },
      {
        name:"Jimmy",
        photo:"https://media.newyorker.com/photos/59c3e4d2c6b56222ba2239ea/master/w_727,c_limit/Crouch-Jimmy-Kimmel-Healthcare-Crusader.jpg",
        scores:[
           5,
           5,
           5,
           4,
           5,
           1,
           2,
           5,
           4,
           5
         ]
      },
      {
        name:"Trae",
        photo:"https://theundefeated.com/wp-content/uploads/2018/11/Trae_Young-e1541081654664.jpg?quality=70&strip=info&w=700&ssl=1",
        scores:[
           5,
           1,
           4,
           4,
           5,
           1,
           4,
           3,
           3,
           3
         ]
      },
      {
        name:"Brad",
        photo:"https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
        scores:[
           2,
           1,
           4,
           4,
           3,
           3,
           3,
           3,
           3,
           3
         ]

      }

      
      ];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
