app.controller('appCtrl', ['ROOT_CONSTANTS', function(ROOT_CONSTANTS){
	this.appName = ROOT_CONSTANTS.APP_NAME;

	this.TestProducts = [{
	"id": 1,
	"name": "Bomber jacket-long",
	"price": "1999,00",
	"color": ["black","khaki"],
	"discount": 0,
	"sex": "men",
	"category": "coat",
	"imgUrl": ["coats/id_1_b.jpg", "coats/id_2_h.jpg"]
},
{
	"id": 2,
	"name": "Coat with asymmetrical bottom",
	"price": "3499,00",
	"color": "black",
	"discount": 0,
	"sex": "men",
	"category": "coat",
	"imgUrl": "coats/id_2.jpg"
},
{
	"id": 3,
	"name": "Dark-blue coat",
	"price": "2599,00",
	"color": "darkblue",
	"discount": 0,
	"sex": "men",
	"category": "coat",
	"imgUrl": "coats/id_3.jpg"
},
{
	"id": 4,
	"name": "Boots made of soft leather",
	"price": "2399,00",
	"color": "black",
	"discount": 0,
	"sex": "men",
	"category": "shoes",
	"imgUrl": "shoes/id_4.jpg"
},
{
	"id": 5,
	"name": "Moccasin with the effect of aged skin",
	"price": "1199,00",
	"color": "black",
	"discount": 0,
	"sex": "men",
	"category": "shoes",
	"imgUrl": "shoes/id_5.jpg"
},
{
	"id": 6,
	"name": "Superslim T-Shirt",
	"price": "499,00",
	"color": ["black", "white"],
	"discount": 0,
	"sex": "men",
	"category": "tShirts",
	"imgUrl": ["tShirts/id_6_b.jpg", "tShirts/id_6_w.jpg"]
},
{
	"id": 7,
	"name": "Top with 3/4 sleeves",
	"price": "599,00",
	"color": ["black", "white"],
	"discount": 0,
	"sex": "men",
	"category": "tShirts",
	"imgUrl": ["tShirts/id_7_b.jpg", "tShirts/id_7_w.jpg"]
},
{
	"id": 8,
	"name": "Just hat",
	"price": "699,00",
	"color": ["black", "sienna", "grey"],
	"discount": 0,
	"sex": "men",
	"category": "accessories",
	"imgUrl": ["accessories/id_8_b.jpg", "accessories/id_8_s.jpg", "accessories/id_8_g.jpg"]
},
{
	"id": 9,
	"name": "Gop cap",
	"price": "449,00",
	"color": "cornflowerblue ",
	"discount": 0,
	"sex": "men",
	"category": "accessories",
	"imgUrl": "accessories/id_9.jpg"
},
{
	"id": 10,
	"name": "Shorts with belt",
	"price": "899,00",
	"color": ["tomato","skyblue", "pink"],
	"discount": 0,
	"sex": "men",
	"category": "shorts",
	"imgUrl": ["shorts/id_10_t.jpg", "shorts/id_10_s.jpg", "shorts/id_10_p.jpg" ]
},
{
	"id": 11,
	"name": "Jacquard dress",
	"price": "1399,00",
	"color": "black",
	"discount": 0,
	"sex": "women",
	"category": "dress",
	"imgUrl": "dress/id_11.jpg"
},
{
	"id": 12,
	"name": "Dress long velvet",
	"price": "2599,00",
	"color": "black",
	"discount": 0,
	"sex": "women",
	"category": "dress",
	"imgUrl": "dress/id_12.jpg"
},
{
	"id": 13,
	"name": "Leather Ankle",
	"price": "1599,00",
	"color": "black",
	"discount": 0,
	"sex": "women",
	"category": "shoes",
	"imgUrl": "shoes/id_13.jpg"
},
{
	"id": 14,
	"name": "Skirt Gode",
	"price": "899,00",
	"color": ["seashell", "gray", "black"],
	"discount": 0,
	"sex": "women",
	"category": "skirts",
	"imgUrl": "skirts/id_14.jpg"
},
{
	"id": 15,
	"name": "Leather mini skirt",
	"price": "1399,00",
	"color": "",
	"discount": 0,
	"sex": "women",
	"category": "skirts",
	"imgUrl": "skirts/id_15.jpg"
},
{
	"id": 16,
	"name": "Top with fringe",
	"price": "999,00",
	"color": "seashell",
	"discount": 0,
	"sex": "women",
	"category": "blousesAndShirts",
	"imgUrl": "blousesAndShirts/id_16.jpg"
},
{
	"id": 17,
	"name": "Basic shirt",
	"price": "699,00",
	"color": ["skyblue","white", "pink"],
	"discount": 0,
	"sex": "women",
	"category": "blousesAndShirts",
	"imgUrl": ["blousesAndShirts/id_17_s.jpg", "blousesAndShirts/id_17_w.jpg", "blousesAndShirts/id_17_p.jpg"]
},
{
	"id": 18,
	"name": "Assimetric T-Shirt",
	"price": "699,00",
	"color": ["palevioletred ","darkgray"],
	"discount": 0,
	"sex": "women",
	"category": "tShirts",
	"imgUrl": ["tShirts/id_18_p.jpg", "tShirts/id_18_d.jpg"]
},
{
	"id": 19,
	"name": "Top without sleeves",
	"price": "349,00",
	"color": ["crimson","seashell", "black"],
	"discount": 0,
	"sex": "women",
	"category": "tShirts",
	"imgUrl": ["tShirts/id_19_c.jpg", "tShirts/id_19_s.jpg", "tShirts/id_19_b.jpg"]
},
{
	"id": 20,
	"name": "Top with drapery",
	"price": "799,00",
	"color": "black",
	"discount": 0,
	"sex": "women",
	"category": "tShirts",
	"imgUrl": "tShirts/id_20.jpg"
}
];
}])