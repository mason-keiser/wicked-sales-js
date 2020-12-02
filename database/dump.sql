--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
80	12	15	9999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
4	2020-07-15 17:55:19.484199+00
5	2020-09-06 18:26:14.318124+00
6	2020-09-06 19:00:20.537575+00
7	2020-09-07 23:51:20.804505+00
8	2020-09-08 22:07:34.090162+00
9	2020-09-08 22:43:23.069438+00
10	2020-09-09 19:30:10.685336+00
11	2020-11-17 23:44:11.425852+00
12	2020-11-18 18:09:39.878878+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
3	1	mason	1234123512	9 sunningdale	2020-07-14 03:11:26.020496+00
5	5	masonksr5@gmail.com	8980809	9 sunningdale	2020-07-14 03:17:13.208745+00
6	5	legallycara@hotmail.com	23423532567	9 Sunningdale	2020-07-14 03:20:46.564442+00
7	5	legallycara@hotmail.com	19187439713240	9 Sunningdale	2020-07-14 03:26:30.822579+00
8	3	jim@gmail.com	2351351	9 Sunningdale	2020-07-14 21:53:44.219207+00
9	3	legallycara@hotmail.com	8980809	9 Sunningdale	2020-07-14 21:56:05.826889+00
10	3	masonksr5@gmail.com	8980809	9 sunningdale	2020-07-14 21:56:36.187154+00
11	4	masonksr5@gmail.com	112312131412	9 sunningdale	2020-07-16 01:10:39.935117+00
12	8	Mason Keiser	12312421412412421412	9 sunningdale	2020-09-08 22:40:24.719423+00
13	8	Mason Keiser	324234234	9 sunningdale	2020-09-08 23:00:56.238471+00
14	8	Cara Harshman	8980809	9 Sunningdale	2020-09-08 23:02:03.488985+00
15	8	Cara Harshman	8980809	9 Sunningdale	2020-09-08 23:02:24.238495+00
16	8	Mason Keiser	19187439713240	9 sunningdale	2020-09-08 23:04:20.163583+00
17	8	newemail.com	696969696	thius hous	2020-09-08 23:05:59.372532+00
18	11				2020-11-18 00:05:03.211846+00
19	11	thisis an	12423155	new address	2020-11-18 00:08:26.336891+00
20	11	thisguy@thehouse.com	34253524	9 sunningdale	2020-11-18 02:03:26.758182+00
21	12	newemail.com	23423532567	8 vilevile 1234124	2020-11-18 18:10:28.072957+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
14	King Size tent	16999	/images/tent.jpg	With a roomy interior that divides to create 2 private rooms, the King Size tent provides comfortable 3-season protection for you, your family and your gear	longDescription
15	ALPS Mountaineering Wasatch 55	9999	/images/hiking-backpack-packed-main.jpg	Perfectly sized for extended, overnight trail adventures, the ALPS Mountaineering Wasatch 55 pack rides comfortably on your back with Lycra® covered suspension components.	longDescription
16	Therm-a-Rest Slacker Hammock	5999	/images/hammock.png	Slack off in a soft polyester hammock that feels nicer feel than nylon. The Therm-a-Rest Slacker hammock stuffs into an attached pocket that doubles as a stash pocket for your tablet as you relax.	longDescription
17	ALPS Mountaineering Vertex	18999	/images/air.jpg	Whether you have out-of-town guests staying with you or youre camping in the great outdoors, the ALPS Mountaineering Vertex double air bed provides a comfortable place for slumber. Includes a pump.	longDescription
19	Miltons Hiker Jacket	29999	/images/the-best-hiking-jacket.webp	Classic mountaineering-inspired design lines in a tried-and-true waterproof fabric-this lightweight nylon rain jacket is an everyday favorite thanks to its stylish, efficient, and comfortable take on protecting you from the wind and wet weather.	longDescription
20	Komperdell Trekking Poles	4599	/images/trekker.jpg	Komperdell Free Touring Thermo trekking poles are that hiking partner who never lets you down. Nonslip grip extensions let you grab the pole lower on steep passages without adjusting the pole length.	longDescription
21	Coleman Foldable Chairs	2599	/images/campingchair.jpg	The comfortable and top quality camping chair is important to your enjoyment for afternoon fishing or campfire. This portable quad chair is perfect for camping activity. Also, it has side pockets & cooler to store your cold drinks, magazine & snacks.	longDescription
18	Triton Propane Stove	29999	/images/stove.jpg	Take camp cooking to the next level with the Triton Propane Stove. Just light it up and dial in your heat with the two independently adjustable burners and you can be cooking over 22,000 BTUs of power in no time. The cooking surface offers plenty of room to fit a 12-in. and 10-in. pan simultaneously.	longDescription
22	Napier Camo Truck Tent	49999	/images/trucktent.jpg	With a seamless assembly in the bed of your truck, you can take to the back roads or the back woods in the back of your pick-up. The must-have accessory for every outdoor adventure enthusiast. The Backroadz Camo Truck Tent assembles seamlessly in the bed of your truck, providing you with the ultimate campsite for every outdoors trip!	longDescription
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 80, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 12, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 21, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

