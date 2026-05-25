from time import perf_counter
abcdario_1 = "abcdefghijklmnñopqrstuvwxyz1234567890"
abcdario_2 = "abcdefghijklmnñopqrstuvwxyz1234567890"
abcdario_3 = "abcdefghijklmnñopqrstuvwxyz1234567890"

diccionario = {}
i = 1
inicio = perf_counter()
from itertools import product

diccionario = {}
i = 0

for combinacion in product(
    abcdario_1,
    abcdario_2,
    abcdario_3
):
    diccionario[''.join(combinacion)] = i
    i += 1
print("password" in diccionario)
fin = perf_counter()
print(f"Total elementos en el diccionario: {len(diccionario)}")
print(f"Tiempo de búsqueda: {(fin - inicio)*1000:.8f} ms")

'''
for a in abcdario_1:
    for b in abcdario_2:
        for c in abcdario_3:
            for d in abcdario_4:
                for e in abcdario_5:
                    for f in abcdario_6:
                        for g in abcdario_7:
                            for h in abcdario_8:
                                diccionario[a + b + c + d + e + f + g + h] = i
                                i += 1
'''
