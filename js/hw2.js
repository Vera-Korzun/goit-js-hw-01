//----------------------------Задача 2
        let invoice;
        const stock = 100;
        // Write code under this line
        let message;

        invoice = 100;
        message = (invoice <= stock) ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
        console.log(message);

        //если invoice равен 100
        // то значение message будет равно
        // 'Заказ оформлен, с вами свяжется менеджер'
        invoice = 50;
        message = (invoice <= stock) ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
        console.log(message);
        //если invoice равен 50
        // то значение message будет равно
        // 'Заказ оформлен, с вами свяжется менеджер'  
        invoice = 150;
        message = (invoice <= stock) ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
        console.log(message);
        //если invoice равен 150
        // то значение message будет равно
        // 'На складе недостаточно товаров!'  