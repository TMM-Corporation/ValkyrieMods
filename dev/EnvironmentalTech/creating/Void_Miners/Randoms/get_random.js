function get_random(type){
	//сумма всех шансов
    var total = 0;
    //цикл для того чтобы прибавить шанс к остальным
	for (var i in type){
		//прибавление к сумме текущий шанс
		total += type[i].chance;
	}
	//задание числа рандом
	var random = Math.random() * total * 1.35;
	//шанс который сейчас
	var current = 0;
	//цикл для шансов
	for (var i in type){
		//переменная дроп для проверки текущего шанса с шансом который выпадет
		var drop = type[i];
		//0 меньше рандом и если 0+шанс дропа больше рандома
		if (current < random && current + drop.chance > random){
			//вернуть дроп
			return drop;
		}
		//шанс прибавить к шансу который сейчас
		current += drop.chance;
    //завершить цикл
	}
	//если выпадет null
	return {id: ItemID.litherite};
}
