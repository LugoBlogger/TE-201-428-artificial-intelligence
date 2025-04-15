# Assignment 3

Full name (Student ID Number)

You can answer in English or Bahasa Indonesia. If you insert some images
to your markdown file, please use relative path and submit your work 
in a compressed file `.zip`.


You may use ChatGPT, but be careful that it may give you a false answer 
and sometimes it is hallucinated. The point of learning is to understand what you write. 
Without understanding your answer by yourself, this assignment is useless.

To finish this assignment, you have to fully understand the slide on 
Week-04 and 05. And also the program `01-fis-case-01-project-risk.ipynb`. 
Even if you just copy it to the AI chatbot, you will get gribberish answers.
Any kind of those answers are automatically grade to the minimum.

[**Notice**]: If you submit your answer in a compressed file, please make
sure that after you have done the compression, extract the compressed file
to make sure that you have compresed the right files.


## Problem 1 (70 points)
In this problem, you are the manager of a service center of electrical 
equipments that keeps spare parts and repairs failed ones. This store
will repair the failed spare parts and keep them as future usages for
other customers. If there is no available spare parts in the service center, 
the customer needs to wait until the items are available. Your task as 
the manager is to keep the customers satisfy with the service by
measuring how many spare parts that you need to stock in the service center.

To do that, you define the following four main linguistic variables
- $m$, average waiting time or mean delay
- $\rho$, repair utilisation factor of the service center
- $s$, number of servers who repair the equipments
- $n$, initial number of spare part in the service center

and the range for its linguistic values:   
Mean delay, $m$
| Linguistic value | Notation | Numerical range (normalised) |
|------------------|----------|------------------------------|
| Very Short       | VS       | [0, 0.3]                     |
| Short            | S        | [0.1, 0.5]                   |
| Medium           | M        | [0.4, 0.7]                   |

Number of servers, $s$
| Linguistic value | Notation | Numerical range (normalised) |
|------------------|----------|------------------------------|
| Small            | S        | [0, 0.35]                    | 
| Medium           | M        | [0.30, 0.70]                 |
| Large            | L        | [0.60, 1]                    |

Repair utilizationi factor, $\rho$
| Linguistic value | Notation | Numerical range (normalised) |
|------------------|----------|------------------------------|
| Low              | L        | [0, 0.6]                     |
| Medium           | M        | [0.4, 0.8]                   |
| High             | H        | [0.6, 1]                     |

Number of spares, $n$
| Linguistic value | Notation | Numerical range (normalised) |
|------------------|----------|------------------------------|
| Very Small       | VS       | [0, 0.30]                    |
| Small            | S        | [0, 0.40]                    |
| Rather Small     | RS       | [0.25, 0.45]                 |
| Medium           | M        | [0.30, 0.70]                 |
| Rather Large     | RL       | [0.55, 0.75]                 |
| Large            | L        | [0.60, 1]                    |
| Very Large       | VL       | [0.70, 1]                    |



Given the following rules

| no | antecedents | consequent |
|----|--------------|------------|
| 1  | IF $\rho$.L  | THEN $n$.S |
| 2  | IF $\rho$.M  | THEN $n$.M | 
| 3  | IF $\rho$.H  | THEN $n$.L |
| 4  | IF $m$.VS AND $s$.S | THEN $n$.VL |
| 5  | IF $m$.S AND $s$.S  | THEN $n$.L  |
| 6  | IF $m$.M AND $s$.S  | THEN $n$.M  |
| 7  | IF $m$.VS AND $s$.M | THEN $n$.RL |
| 8  | IF $m$.S AND $s$.M  | THEN $n$.RS |
| 9  | IF $m$.M AND $s$.M  | THEN $n$.S  |
| 10 | IF $m$.VS AND $s$.L | THEN $n$.M  |
| 11 | IF $m$.S AND $s$.L  | THEN $n$.S  |
| 12 | IF $m$.M AND $s$.L  | THEN $n$.VS |

determine using `skfuzzy` libraries, what is the number of spares that you 
need to prepare, if the mean delay $m = 0.4$, number of servers $s = 0.45$,
and repair utilisation factor $\rho = 0.45$

*Hint*: 1) First draw the membership function; 2) Declare the fuzzy rules
for all 12 rules aboves; 3) Perform fuzzy union operator using `np.fmax()` to each
fuzzy sets of consequents in each rule; 4) Aggregate the fuzzy sets;
5) Defuzzification to get the crips value for the number of spares.


## Problem 2 (30 points)

For a specific value of $\rho=0$, get all the possible output $n$ for
all possible inputs $m$ and $s$. Represent those output values using
3D surface plot.  What is the insight that you get from that 3D plot?
Explain your answer.