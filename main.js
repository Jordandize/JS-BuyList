$(document).ready(function () {
    var LIST = $('.bl-list');
    var LIST_LAST = $('.bl-row-right.last');
    var LIST_BOUGHT = $('.bl-row-right.bought');
    
    var ANOTHER_ONE_ITEM = $('#item').html();
    var ANOTHER_ONE_LAST = $('#last-pattern').html();
    var ANOTHER_ONE_BOUGHT = $('#bought-pattern').html();
    
    addItem('Drake');
    addItem('Kanye West');
    addItem('Sia');
    addItem('Lady Gaga');
    
    function addItem(title) {
        var node = $(ANOTHER_ONE_ITEM);
        
        node.find('.bl-product_label').text(title);
        node.find('.bl-buttons-cancel').click(function() {
            node.remove();
            node_last.remove();
            node_bought.remove();
        });
        node.find('.bl-buttons-boughted').click(function() {
            var but_name = node.find('.bl-buttons-boughted').text();
            if(but_name === "Купленo") {
                node.find('.bl-product_label').css("text-decoration", "line-through");
                node.find('.bl-minus-nonactive').css("visibility", "hidden");
                node.find('.bl-minus').css("visibility", "hidden");
                node.find('.bl-plus').css("visibility", "hidden");
                node.find('.bl-buttons-cancel').hide();
                node_last.hide();

                node_bought.show();
                node.find('.bl-buttons-boughted').text('Не куплено');
                node.find('.bl-buttons-boughted').css("width", "124px");
            } else {
                node.find('.bl-product_label').css("text-decoration", "none");
                node.find('.bl-minus-nonactive').css("visibility", "visible");
                node.find('.bl-minus').css("visibility", "visible");
                node.find('.bl-plus').css("visibility", "visible");
                node.find('.bl-buttons-cancel').show();
                node_last.show();

                node_bought.hide();
                node.find('.bl-buttons-boughted').text('Купленo');
                node.find('.bl-buttons-boughted').css("width", "80px");
            }
        });
        
        node.find('.bl-plus').click(function() {
            var counter = parseInt(node.find('.bl-label').text());
            counter++;
            changeNum(counter);
            if(counter === 2) {
                node.find('.bl-minus-nonactive').addClass('bl-minus').removeClass('bl-minus-nonactive');
            }
        });
        
        node.find('.bl-minus-nonactive').click(function() {
            var counter = parseInt(node.find('.bl-label').text());
            if(counter > 1) {
                counter--;
                changeNum(counter);
                if(counter == 1) {
                    node.find('.bl-minus').addClass('bl-minus-nonactive').removeClass('bl-minus');
                }
            }
        });
        
        function changeNum(number) {
            node.find('.bl-label').text(number);
            node_last.find('.bl-last-item-count').text(number);
            node_bought.find('.bl-bought-item-count').text(number);
        }
        
        node.find('.bl-product_label').click(function() {
            var but_name = node.find('.bl-buttons-boughted').text();
            if(but_name === "Купленo") {
                node.find('.bl-product_label').hide();
                var name = node.find('.bl-product_label').text();
                node.find('input').show().focus().val(name);
            }
        });
        
        node.find('input').focusout(function() {
            var new_name = node.find('input').val();
            if(new_name) {
                changeName(new_name);
            }
            node.find('input').hide();
            node.find('.bl-product_label').show();
        });
        
        function changeName(name) {
            node.find('.bl-product_label').text(name);
            node_last.find('.bl-row-right-name').text(name);
            node_bought.find('.bl-row-bought-name').text(name);
        }
        
        node.find('input').hide();
        
        LIST.append(node);
    
        var node_last = $(ANOTHER_ONE_LAST);
        node_last.find('.bl-row-right-name').text(title);
        LIST_LAST.append(node_last);
        
        var node_bought = $(ANOTHER_ONE_BOUGHT);
        node_bought.find('.bl-row-bought-name').text(title);
        node_bought.hide();
        LIST_BOUGHT.append(node_bought);
    }
    
    $('.add-button').click(function() {
        var FIELD = $('.add-field');
        var name = FIELD.val();
        if(name != "")
            addItem(name);
        FIELD.val('');
        FIELD.focus();
    });
});