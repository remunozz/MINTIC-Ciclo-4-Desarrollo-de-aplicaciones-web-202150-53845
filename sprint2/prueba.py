# crear una funcion que reciba una lista de numeros y devuelva una lista con los numeros pares  
def par(lista):
	lista_par = []
	for i in lista:
		if i % 2 == 0:
			lista_par.append(i)
	return lista_par

print(par([1,2,3,4,5,6,7,8,9,10]))