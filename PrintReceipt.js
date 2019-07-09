function printReceipt(barcodes){
    if(!isValid(barcodes)){
        return "[ERROR]:"
    }

    var items = getItems(barcodes);

    var sum = calculatePrice(items);

    return print(items, sum);
}

function isValid(barcodes){
    
    return typeof(barcodes) == Array && barcodes.length >0;
    
}


function getItems(barcodes){
    var items = new Array();
    const storeSet = new Set();

    for(var i in storeItem){
        storeSet.add(storeItem[i].id);
    }
    
    for(var i in barcodes){
        if(storeSet.has(barcodes[i])){
            for(var j in storeItem){
                if(barcodes[i] == storeItem[j].id){
                    items.push(storeItem[j]);
                    break;
                }
            }
        }else{
            return "[ERROR]:";
        }
    }
    return items;
}

function calculatePrice(items){
    var sum = 0;
    for(var i in items){
        sum += items[i].price;
    }
    return sum;
}

function print(items, sum){

    var receipt ='Receipts\n';
    receipt +="------------------------------------------------------------\n";
    const set = new Set();
    var arr = new Array();
    for(var i in items){
        if(!set.has(items[i].id)){
            var obj = {id:items[i].id,name:items[i].name,price:items[i].price,count:1};
            arr.push(obj);
            set.add(items[i].id);
        }else{
            for(var j in arr){
                if(arr[j].id==items[i].id){
                    arr[j].count++;
                }
            }
        }
    }
    console.log(set);
    console.log(arr);
    for(var i in arr){
        receipt +=arr[i].name+"\t"+arr[i].price+"\t"+arr[i].count+"\n";
    }
    receipt +="------------------------------------------------------------\n";
    receipt +="Price: "+sum;
    return receipt;
}

const storeItem = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

module.exports = {
    printReceipt,
    isValid,
    getItems,
    calculatePrice,
    print
}