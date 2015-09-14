-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 14 2015 г., 12:56
-- Версия сервера: 5.5.45
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `petPet`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(37) NOT NULL,
  `price` varchar(7) NOT NULL,
  `color` varchar(23) DEFAULT NULL,
  `discount` varchar(8) NOT NULL,
  `sex` varchar(5) NOT NULL,
  `category` varchar(16) NOT NULL,
  `imgUrl` varchar(86) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `color`, `discount`, `sex`, `category`, `imgUrl`) VALUES
(1, 'Bomber jacket-long', '1999,00', 'black,khaki', '0', 'men', 'coat', 'coats/id_1_b.jpg,coats/id_2_h.jpg'),
(2, 'Coat with asymmetrical bottom', '3499,00', 'black', '0', 'men', 'coat', 'coats/id_2.jpg'),
(3, 'Dark-blue coat', '2599,00', 'darkblue', '0', 'men', 'coat', 'coats/id_3.jpg'),
(4, 'Boots made of soft leather', '2399,00', 'black', '0', 'men', 'shoes', 'shoes/id_4.jpg'),
(5, 'Moccasin with the effect of aged skin', '1199,00', 'black', '0', 'men', 'shoes', 'shoes/id_5.jpg'),
(6, 'Superslim T-Shirt', '499,00', 'black,white', '0', 'men', 'tShirts', 'tShirts/id_6_b.jpg,tShirts/id_6_w.jpg'),
(7, 'Top with 3/4 sleeves', '599,00', 'black,white', '0', 'men', 'tShirts', 'tShirts/id_7_b.jpg,tShirts/id_7_w.jpg'),
(8, 'Just hat', '699,00', 'black,sienna,grey', '0', 'men', 'accessories', 'accessories/id_8_b.jpg,accessories/id_8_s.jpg,accessories/id_8_g.jpg'),
(9, 'Gop cap', '449,00', 'cornflowerblue', '0', 'men', 'accessories', 'accessories/id_9.jpg'),
(10, 'Shorts with belt', '899,00', 'tomato,skyblue,pink', '0', 'men', 'shorts', 'shorts/id_10_t.jpg,shorts/id_10_s.jpg,shorts/id_10_p.jpg'),
(11, 'Jacquard dress', '1399,00', 'black', '0', 'women', 'dress', 'dress/id_11.jpg'),
(12, 'Dress long velvet', '2599,00', 'black', '0', 'women', 'dress', 'dress/id_12.jpg'),
(13, 'Leather Ankle', '1599,00', 'black', '0', 'women', 'shoes', 'shoes/id_13.jpg'),
(14, 'Skirt Gode', '899,00', 'seashell,gray,black', '0', 'women', 'skirts', 'skirts/id_14.jpg'),
(15, 'Leather mini skirt', '1399,00', NULL, '0', 'women', 'skirts', 'skirts/id_15.jpg'),
(16, 'Top with fringe', '999,00', 'seashell', '0', 'women', 'blousesAndShirts', 'blousesAndShirts/id_16.jpg'),
(17, 'Basic shirt', '699,00', 'skyblue,white,pink', '0', 'women', 'blousesAndShirts', 'blousesAndShirts/id_17_s.jpg,blousesAndShirts/id_17_w.jpg,blousesAndShirts/id_17_p.jpg'),
(18, 'Assimetric T-Shirt', '699,00', 'palevioletred ,darkgray', '0', 'women', 'tShirts', 'tShirts/id_18_p.jpg,tShirts/id_18_d.jpg'),
(19, 'Top without sleeves', '349,00', 'crimson,seashell,black', '0', 'women', 'tShirts', 'tShirts/id_19_c.jpg,tShirts/id_19_s.jpg,tShirts/id_19_b.jpg'),
(20, 'Top with drapery', '799,00', 'black', '0', 'women', 'tShirts', 'tShirts/id_20.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
