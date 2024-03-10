# Камень я дам

# Функциональные требования 
Функциональные требования к системе:
Система – магазин по продаже камней, название «Камень я дам». Требования составлены на основе анализа заинтересованных сторон и бизнес-процессов. Общее требование – быть коммерчески выгодным магазином по продаже камней.  
Задача системы – автоматизировать следующие процессы:  
1. Покупка товара. С помощью онлайн-заказа, пользователь может совершать покупку товара. Технические требования к пользовательскому интерфейсу:  
Просмотр каталога товара  
Возможность просмотра всех свойств товара  
Возможность онлайн-оплаты покупок  
Просмотр корзины покупок  
Просмотр истории покупок  
Персонализированные рекомендации на основе предыдущих покупок и покупок пользователей с похожим поведением  
2. Приём и обработка заказов. Система должна взаимодействовать с логистической службой и отправлять ей всю необходимую для осуществления доставки информацию, такую как:  
Название товара  
Количество товара 
Точный адрес доставки – город и пункт выдачи  
Дополнительную информацию об условиях доставки товара  
3. Закупка товара. Система должна взаимодействовать с логистической службой, чтобы определять количество недостающего товара и автоматически закупать его. Логистическая служба должна отправлять информацию о количестве каждого вида товара на складе, на основе чего система в полуавтоматическом режиме с помощью интерфейса закупок и ответственного за закупки должна осуществлять запрос в логистическую службу на закупку товара.  
4. Доставка товара. Система должна взаимодействовать с ресурсами логистической службы: получать информацию о статусе доставки товара для того, чтобы сообщать её покупателю.  
5. Возврат товара: Если пользователя не устроил товар, то система должна обрабатывать его возврат - делать соответствующие записи в базы данных, сопровождать возврат средств; согласно описанию соответствующего бизнес-процесса.  

# Ссылка на макет
https://www.figma.com/file/fNnfCoxTaYQVdUub9OFBx2/Untitled?type=design&node-id=0%3A1&mode=design&t=L9bdKk4Me7nEnzDA-1

# Критика макета
https://docs.google.com/document/d/12VWFEz1BASJv5BKvC6Taj1sMLB4cnxp7r6hYHnpmu9g/edit?usp=sharing

# Ссылка на модели и диаграммы 
https://drive.google.com/file/d/1qti0p4eiksP_n_B6XOT3IIjgxSQeeDNo/view?usp=sharing_eip_se_dm&ts=65c63363 


# Бизнес процессы:
## Список обозначений: 
![symbols](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Условные_обозначения.PNG)

## Процессы:
![bpsecond](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Возврат_товара.PNG)
![bpthird](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Доставка_товара.PNG)
![bpfourth](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Закупка_товара.PNG)
![bpfifth](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Иневентаризация.PNG)
![bpsixth](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Онлайн_заказ_товара.PNG)
![bpseventh](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Оплата_товара.PNG)
![bpeightth](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Получение_и_хранение_товара.PNG)
![bpninth](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Прием_и_обработка_заказа.PNG)


# Контекстная диаграмма
Информация о взаимодействиях системы: https://docs.google.com/document/d/1LyJ6ZyQQuPcwKKIbPfOoMwiVOB9JGCCt3p7kMRVc148/edit?usp=sharing
![bpkd](https://github.com/Kirill-Bokov/I-ll-give-you-the-stone/blob/master/Reports/BuisnessProcess/Контекстная_диаграмма.PNG)

# Заинтересованные лица

