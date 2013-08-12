#Онлайн редактор на Декл. обр. 6

С оглед на липсата на подобен продукт и при това безплатен - реших да си направя такъв.
Идеята е да могат да се създават или редактират съществуващи файлове годни за предаване в НАП.<br/>
За целта ще има и валидатор на данните.<br/>
Ще е достъпен за всеки на който му е полезен.

#Изисквания

Засега го разработвам на Chrome. Текущата ми версия е 28.0.1500.95 m<br/>
В крайния вариянт ще се старая да работи под IE (поне ver. 10), FF, и Chrome.

---
#Връзки
Засега демото е на:<br/>
http://kanchev.cloudvps.bg/filedrag2/<br/>
в последствие ще го преместя

спецификацията на файла според сайта на НАП<br/>
http://nap.bg/document?id=827<br/>

---
#Структура и формат на файл за подаване на данни в електронен вид
съгласно чл. 6, ал.3, т.3 от Наредбата за изменение и допълнение на Наредба № Н-8 от 29 декември 2005 г. за съдържанието, сроковете, начина и реда за подаване и съхранение на данни от работодателите, осигурителите за осигурените при тях лица, както и от самоосигуряващите се лица (ДВ бр.7 от 23.01.2007 г.) по Декларация обр. № 6 "Данни за дължими вноски и данък по чл.42 ЗДДФЛ", одобрена от Изпълнителния директор на НАП със заповед ЗЦУ-8/02.01.2013г.

№	ПОЛЕ	ТИП	РАЗМЕР	СТОЙНОСТ	Съответства на поле № от декларация №6
1	Код на задълженото лице	Character	=9, 10 или 13	9, 10 или 13 цифри	1
2	Наименование на задълженото лице	Character	<=60		2
3	Член на осигурителна каса	Numeric	 =1	0- не е член на осигурителна каса
1- член на осигурителна каса	3
4	E-mail	Character	<=50	Символи отговарящи на конвенциите	4
5	Телефон	Character	<=20	Цифри	5
6	GSM	Character	<=20	Цифри	6
7	Месец	Numeric	=2	Цифри	9
8	Година	Numeric	=4	Цифри	9
9	Дата на изплащане	Date	дд/мм/гггг	Дата	18
10	Флаг за промяна	Numeric	 =1	0-редовни данни
1-коригиращи данни	7.1
11	Флаг за вид плащане	Numeric	 =1	Допустими стойности – 1, 2, 3, 4, 5, 6 и 9	8.1

12	Дължими вноски за ДОО	Numeric	 <=13.2		10
13	Дължими вноски за учителски пенсионен фонд	Numeric	 <=13.2		11
14	Дължими вноски за ДЗПО – Универсален пенсионен фонд	Numeric	 <=13.2		12
15	Дължими вноски за ДЗПО-Професионален пенсионен фонд	Numeric	 <=13.2		13
16	Дължими вноски за здравно осигуряване	Numeric	 <=13.2		14
17	Дължими вноски за фонд "Гарантиране на вземанията на работниците и служителите”	Numeric	 <=13.2		15
18	Авансово удържан данък по чл.42 от ЗОДФЛ	Numeric	 <=13.2		16
19	Авансов данък по чл.42, ал.5 от ЗДДФЛ	Numeric	 <=13.2		17
20	Месец	Numeric	=2	Цифри	9
21	Година	Numeric	=4	Цифри	9
22	Дата на изплащане	Date	дд/мм/гггг	Дата	18
23	Флаг за промяна	Numeric	 =1	0-редовни данни
1-коригиращи данни	7.2
24	Флаг за вид плащане	Numeric	 =1	Допустими стойности – 1, 2, 3, 4, 5, 6 и 9	8.2

25	Дължими вноски за ДОО	Numeric	 <=13.2		10
26	Дължими вноски за учителски пенсионен фонд	Numeric	 <=13.2		11
27	Дължими вноски за ДЗПО – Универсален пенсионен фонд	Numeric	 <=13.2		12
28	Дължими вноски за ДЗПО-Професионален пенсионен фонд	Numeric	 <=13.2		13
29	Дължими вноски за здравно осигуряване	Numeric	 <=13.2		14
30	Дължими вноски за фонд "Гарантиране на вземанията на работниците и служителите”	Numeric	 <=13.2		15
31	Авансово удържан данък по чл.42 от ЗОДФЛ	Numeric	 <=13.2		16
32	Авансов данък по чл.42, ал.5 от ЗДДФЛ	Numeric	 <=13.2		17
33	Месец	Numeric	=2	Цифри	9
34	Година	Numeric	=4	Цифри	9
35	Дата на изплащане	Date	дд/мм/гггг	Дата	18
36	Флаг за промяна	Numeric	 =1	0-редовни данни
1-коригиращи данни	7.3
37	Флаг за вид плащане	Numeric	 =1	Допустими стойности – 1, 2, 3, 4, 5, 6 и 9	8.3

38	Дължими вноски за ДОО	Numeric	 <=13.2		10
39	Дължими вноски за учителски пенсионен фонд	Numeric	 <=13.2		11
40	Дължими вноски за ДЗПО – Универсален пенсионен фонд	Numeric	 <=13.2		12
41	Дължими вноски за ДЗПО-Професионален пенсионен фонд	Numeric	 <=13.2		13
42	Дължими вноски за здравно осигуряване	Numeric	 <=13.2		14
43	Дължими вноски за фонд "Гарантиране на вземанията на работниците и служителите”	Numeric	 <=13.2		15
44	Авансово удържан данък по чл.42 от ЗОДФЛ	Numeric	 <=13.2		16
45	Авансов данък по чл.42, ал.5 от ЗДДФЛ	Numeric	 <=13.2		17
46	Месец	Numeric	=2	Цифри	9
47	Година	Numeric	=4	Цифри	9
48	Дата на изплащане	Date	дд/мм/гггг	Дата	18
49	Флаг за промяна	Numeric	 =1	0-редовни данни
1-коригиращи данни	7.4
50	Флаг за вид плащане	Numeric	 =1	Допустими стойности – 1, 2, 3, 4, 5, 6 и 9	8.4

51	Дължими вноски за ДОО	Numeric	 <=13.2		10
52	Дължими вноски за учителски пенсионен фонд	Numeric	 <=13.2		11
53	Дължими вноски за ДЗПО – Универсален пенсионен фонд	Numeric	 <=13.2		12
54	Дължими вноски за ДЗПО-Професионален пенсионен фонд	Numeric	 <=13.2		13
55	Дължими вноски за здравно осигуряване	Numeric	 <=13.2		14
56	Дължими вноски за фонд "Гарантиране на вземанията на работниците и служителите”	Numeric	 <=13.2		15
57	Авансово удържан данък по чл.42 от ЗОДФЛ	Numeric	 <=13.2		16
58	Авансов данък по чл.42, ал.5 от ЗДДФЛ	Numeric	 <=13.2		17
59	БУЛСТАТ на осигурителната каса
или
БУЛСТАТ на разработчика	Character	= 9 или 13	- БУЛСТАТ на осигурителната каса (задължително при наличие на код 1 в поле No.3)
или 
- БУЛСТАТ на разработчика на софтуерен продукт (не е задължително)	

---
Изисквания към съдържанието:

1.	Файлът  носи наименованието NRA62007.TXT.<br/>
2.	Всички суми са винаги само положителни.<br/>
3.	Полетата се отделят едно от друго САМО със запетая.<br/>
4.	Данните от тип Character се заграждат с двойни кавички (“). Например:”Петров”. Вътре в текстовите полета не трябва да се пишат две двойки кавички, а само една, например: да не се изписва “”Петров””, а само ”Петров”.<br/>
5.	Текстът се записва само с главни букви.<br/>
6.	В текстовите полета НЕ СЕ ДОПУСКАТ ЗАПЕТАИ.<br/>
7.	Десетичен разделител за цифровите полета е точка  (.)<br/>
8.	Разделител за поле от тип дата е дясно наклонена черта (/) с формат дд/мм/гггг.<br/>
9.	Всички разделители на полета е задължително да присъстват във файла. Ако в едно поле няма стойност в него не се попълва нищо.<br/>
10.	Всеки запис (редове) задължително завършва с CR и LF (CHR(13)+CHR(10)).<br/>
11.	Маркерът за край на файл е CTRL+Z (или CHR(26) или 1А) И Е ЗАДЪЛЖИТЕЛЕН.<br/>
12.	Текстовите файлове трябва да отговарят на ANSI стандарта Windows-1251 (CP1251).<br/>

<pre>
•  Online-File-Editor 
	o	Online file editor for declaration form  6
</pre>
