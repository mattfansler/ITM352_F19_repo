<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        //Product data
        
        //Product 1
        var item1 = 'Nike';
        var quantity1 = 2
        var price1 = 100.00;
        
        //Product 2
        var item2 = 'Addidas';
        var quantity2 = 1;
        var price2 = 75.00;
        
        //Product 3
        var item3 = 'New Balance';
        var quantity3 = 1;
        var price3 = 50.00;
        
        //Product 4
        var item4 = 'Converse';
        var quantity4 = 3;
        var price4 = 50.00;
        
        //Product 5
        var item5 = 'Jordan';
        var quantity5 = 12;
        var price5 = 100.00;
        var subtotal = 0;
        // Table
        document.write(`
    
    <table border="2">
      <tbody>
        <tr>
          <th style="text-align: center;" width="43%">Product</th>
          <th style="text-align: center;" width="11%">Quantity</th>
          <th style="text-align: center;" width="13%">Price</th>
          <th style="text-align: center;" width="54%">Extended Price</th>
        </tr>
        `);
        //compute extended price of item1
        var extended_price = price1 * quantity1;
        //compute running subtotal
        var subtotal = extended_price;
        document.write(`
        <tr>
          <td width="43%">Nike</td>
          <td align="center" width="11%">${quantity1}</td>
          <td width="13%">$\n${price1}</td>
          <td width="54%">$\n${extended_price.toFixed(2)}</td>
        </tr>
        `);
        //compute extended price of item2
        extended_price = (price2 * quantity2);
        //compute running subtotal
        subtotal += extended_price;
        document.write(`
        <tr>
          <td width="43%">Addidas</td>
          <td align="center" width="11%">${quantity2}</td>
          <td width="13%">$\n${price2}</td>
          <td width="54%">$\n${extended_price.toFixed(2)}</td>
        </tr>
        `);
        //compute extended price of item3
        extended_price = (price3 * quantity3);
        //compute running subtotal
        subtotal += extended_price;
        document.write(`
        <tr>
          <td width="43%">New Balance</td>
          <td align="center" width="11%">${quantity3}</td>
          <td width="13%">$\n${price3}</td>
          <td width="54%">$\n${extended_price.toFixed(2)}</td>
        </tr>
        `);
        //compute extended price of item4
        extended_price = (price4 * quantity4);
        //compute running subtotal
        subtotal += extended_price;
        document.write(`
        <tr>
          <td width="43%">Converse</td>
          <td align="center" width="11%">${quantity4}</td>
          <td width="13%">$\n${price4}</td>
          <td width="54%">$\n${extended_price.toFixed(2)}</td>
        </tr>
        `);
        //Compute extended price of item5
        extended_price = (price5 * quantity5);
        //Compute running subtotal
        subtotal += extended_price;
        document.write(`
        <tr>
          <td width="43%">Jordans</td>
          <td align="center" width="11%">${quantity5}</td>
          <td width="13%">$\n${price5}</td>
          <td width="54%">$\n${extended_price.toFixed(2)}</td>
        </tr>
        `);
        //Compute tax
        var tax_rate = .0575;
        var tax = tax_rate * subtotal;
        //Compute total
        var total = subtotal + tax;
        document.write(`
        <tr>
          <td colspan="4" width="100%">&nbsp;</td>
        </tr>
        <tr>
          <td style="text-align: center;" colspan="3" width="67%">Sub-total</td>
          <td width="54%">$\n${subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Tax @ 5.75%</span></td>
          <td width="54%">$\n${tax.toFixed(2)}</td>
        </tr>
        <tr>
          <td style="text-align: center;" colspan="3" width="67%"><strong>Total</strong></td>
          <td width="54%"><strong>$\n${total.toFixed(2)}</strong></td>
        </tr>
      </tbody>
    </table>
    
    `);
    </script>