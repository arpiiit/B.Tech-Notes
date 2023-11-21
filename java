Java

Java is a high-level programming language that was developed by James Goshling in the year 1982. It is based on the principle of OOPS and can be used to develop large-scale application.

Java supports primitive data type-byte, boolean, char, short, int, float, long and double and hence it is not a pure OOPs.

Stack memory-Stack memory is the portion of memory that was assigned to every individual program and it was fixed.

Heap Memory-It is not allocated to the java program but it will be available for use by the java program when it is required, mostly during the run time.

Is java is a pure OOPs language-Java is not a pure object-oriented programming language, because it has direct access to primitive data types. And these primitive data types don't directly belong to the Integer classes.

Instance Variable-Those variable that are accessible by all methods in the class. They are declared outside the methods and inside the class.
ex:- class Athlete {
public String athleteName;
public double athleteSpeed;
public int athleteAge;
}

Local Variable-Those variables present within a block, function, or constructor and can be accessed only inside them. it is block scope. Whenever a local variable is declared inside a method, the other class methods don’t have any knowledge about the local variable.
Ex:-public void athlete() {
String athleteName;
double athleteSpeed;
int athleteAge;
}

Java regex- regular expression is an API to define a patten for searching or manipulating string.

Arraylist-Java Arraylsist class uses a dynamic array for storing the elements. It is like an array but there is no size limit. we can add or remove element any time. It can have the duplicate elements also.

HashSet- java hashset class is used to create a collection that uses a hash table.
1-HashSet stores the elements by using a mechanism called hashing.
2-HashSet contains unique elements only.
3-HashSet allows null value

Exception Handling-Exception is an abnormal condition. It is the machanism to handle the runtime errors such as ClassNotFoundException so that the normal flow of the application can be maintained. It is used for normal flow of the application.
1-checked 
2-unchecked
3-error.
by try catch block we handled error and exceptions.

Multithreading in java-It is a process of execution multiple threads simultaneously. A thread is lightewight sub-process. Multiprocessing ans multithreading, both are used to achive multitasking. It is mostly used in games and animation.
Advantage-
1-doesn't block the user
2-can perform many operations togather, so it saves time.

Multitasking-Multitasking is a process of executing multiple tasks simultaneously. We use multitasking to utilize the CPU. 

Thread-A thread is a lightweight subprocess, the smallest unit of processing. It is a separate path of execution.
methods-
start()
run()
sleep()
join()
setName()
stop()

Life cycle of a thread-
new
Active
blocked/waiting
timed waiting
terminated

Synchronization-Synchronization in Java is the capability to control the access of multiple threads.
