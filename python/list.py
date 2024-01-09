# for num in range(1,16):
#     if(num%3==0 and num%5==0):
#         print("FizzBuzz")
#     elif(num%3==0):
#             print("Fizz")
#     else:
#         print("Buzz")        
        
        
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-2:])        

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant"]
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)

thislist = ["apple", "banana", "cherry"]
tropical = ("mango", "pineapple", "papaya")
thislist.extend(tropical)
print(thislist)